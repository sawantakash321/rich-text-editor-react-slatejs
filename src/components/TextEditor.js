import React, { Component } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import BoldMark from './BoldMark';

const intialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						leaves: [
							{
								text: 'My first paragraph!',
							},
						],
					},
				],
			},
		],
	},
});

export default class TextEditor extends Component {
	state = {
		value: intialValue,
	};

	// On change, update the app's React state with the editor value
	onChange = ({ value }) => {
		this.setState({ value });
	};

	onKeyDown = (e, change) => {
		/*
			we want all our commands to start with the user pressed ctrl,
			if they don't--we cancel the action.
		*/
		if (!e.ctrlKey) {
			return;
		}
		e.preventDefault();
		/* Decide what to do based on key code... */
		switch (e.key) {
			/* When "b" is pressed, add a "bold" mark to the text. */
			case 'b': {
				change.toggleMark('bold');
				return true;
			}
			default:
				break;
		}
	};

	renderMark = props => {
		switch (props.mark.type) {
			case 'bold':
				return <BoldMark {...props} />;
		}
	};

	render() {
		return (
			<Editor
				value={this.state.value}
				onChange={this.onChange}
				onKeyDown={this.onKeyDown}
				renderMark={this.renderMark}
			/>
		);
	}
}

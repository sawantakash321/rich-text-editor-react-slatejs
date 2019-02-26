import React, { Component } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';

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

	render() {
		return <Editor value={this.state.value} onChange={this.onChange} />;
	}
}

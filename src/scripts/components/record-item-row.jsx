'use strict';

import React from 'react';
import $ from 'jquery';

export default class RecordItemRow extends React.Component {

	handleChange() {
		let category = this.props.category;
		let id = this.props.id + '.json';
console.log(this.props)
		$.get('data/' + category + '/' + id, data => {
			this.props.onSelect(data);
		});
	}

	render() {
		let record = this.props.record;
		let item = [
			<td key={0}>
				<input
					type="checkbox"
					id={this.props.id}
					category={this.props.category}
					onChange={this.handleChange}
				/>
			</td>
		];

		Object.keys(record).forEach((key, idx) => {
			item.push(<td key={idx + 1}>{record[key]}</td>);
		});

		return (<tr>{item}</tr>);
	}

}

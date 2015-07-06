'use strict';

import React from 'react';

export default class RecordCategoryRow extends React.Component {

	render() {
		let first = this.props.records[0] || [];
		let titles = Object.keys(first).map((title, idx) => {
  		return (<th key={idx}>{title[0].toUpperCase() + title.slice(1)}</th>);
  	});

		return (
			<tr>
				<th>Select</th>
				{titles}
			</tr>
		);
	}

}

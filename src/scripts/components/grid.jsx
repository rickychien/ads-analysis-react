'use strict';

import React from 'react';
import RecordCategoryRow from './record-category-row.jsx';
import RecordItemRow from './record-item-row.jsx';

export default class Grid extends React.Component {

	updateCollection(data) {
		console.log('updateCollection ')
	}

	render() {
		let records = this.props.records;
		let rows = records.map(record => {
			return (
				<RecordItemRow
					key={record.id}
					id={record.id}
					record={record}
					category={this.props.category}
					onSelect={this.updateCollection}
				/>);
		});

		return (
			<table id="grid-data" className="table">
				<thead>
					<RecordCategoryRow records={records}/>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}

}

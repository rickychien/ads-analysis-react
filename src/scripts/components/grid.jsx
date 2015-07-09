'use strict';

import React from 'react';
import RecordCategoryRow from './record-category-row.jsx';
import RecordItemRow from './record-item-row.jsx';

export default class Grid extends React.Component {

  render() {
    let records = this.props.records;
    let rows = records.map(record => {
      return (
        <RecordItemRow
          key={record.id}
          id={record.id}
          record={record}
          checked={this.props.selections[record.id]}
          onSelect={this.props.onRowSelect}
        />
      );
    });

    return (
      <div className="panel panel-info tab-pane in active" id="grid">
        <div className="panel-heading">Grid</div>
        <div className="panel-body">
          <div className="alert alert-success">
            <span className="glyphicon glyphicon-info-sign"></span>
            {'Tips : Select item(s) and click Chart / Map for visualization.'}
          </div>
          <div className="table-responsive" id="grid-table">
            <table id="grid-data" className="table">
              <thead>
                <RecordCategoryRow records={records}/>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

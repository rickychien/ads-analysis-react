'use strict';

import React from 'react';

export default class RecordItemRow extends React.Component {

  constructor() {
    super();
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect() {
    this.props.onSelect(this.props.id);
  }

  render() {
    let record = this.props.record;
    let item = [
      <td key={0}>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this._onSelect}
        />
      </td>
    ];

    Object.keys(record).forEach((key, idx) => {
      item.push(<td key={idx + 1}>{record[key]}</td>);
    });

    return (<tr>{item}</tr>);
  }

}

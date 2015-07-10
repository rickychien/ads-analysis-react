'use strict';

import React from 'react';

export default class RecordCategoryRow extends React.Component {

  render() {
    let first = this.props.records[0] || [];
    let titles = Object.keys(first).map((title, idx) => {
      let lastIndex = title.indexOf('_count') > 0 ?
        title.indexOf('_count') - 1 : title.length;
      return (
        <th key={idx}>{title[0].toUpperCase() + title.substr(1, lastIndex)}</th>
      );
    });

    return (
      <tr>
        <th>Select</th>
        {titles}
      </tr>
    );
  }

}

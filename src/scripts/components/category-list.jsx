'use strict';

import React from 'react';

export default class CategoryList extends React.Component {

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this.state = {
      list: ['notifications', 'vipcards', 'banners']
    }
  }

  _onClick(category) {
    this.props.onClick(category);
  }

  render() {
    let links = this.state.list.map((item, idx) => {
      let title = item[0].toUpperCase() + item.substr(1);
      let category = this.props.category;

      return (
        <a
          key={idx}
          ref={item}
          href={'#' + item}
          className={`list-group-item ${item === category ? 'active' : ''}`}
          onClick={this._onClick.bind(this, item)} >
          {title}
        </a>
      );
    });

    return (
      <div className="col-md-3">
        <div className="hidden-print affix-top" role="complementary">
          <ul ref="list" className="nav">
            {links}
          </ul>
        </div>
      </div>
    );
  }

}

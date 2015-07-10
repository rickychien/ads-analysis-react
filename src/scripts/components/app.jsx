'use strict';

import React from 'react';
import CategoryList from './category-list.jsx';
import Search from './search.jsx';
import Visualization from './visualization.jsx';

export default class App extends React.Component {

  constructor() {
    super();
    this._changeCategory = this._changeCategory.bind(this);
    this.state = {
      category: 'notifications'
    }
  }

  _changeCategory(category) {
    this.setState({
      category: category
    });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h3 className="text-muted">Ads Analysis</h3>
        </div>
        <CategoryList
          {...this.state}
          onClick={this._changeCategory}
        />
        <div id="view" className="col-md-9">
          <Search />
          <Visualization
            {...this.state}
          />
        </div>
      </div>
    );
  }

}

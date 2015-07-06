'use strict';

import React from 'react';
import $ from 'jquery';
import Grid from './grid.jsx';
import Chart from './chart.jsx';

export default class Visualization extends React.Component {

	constructor() {
		super();
		this.state = {
			category: 'notifications',
			records: [],
			collection: {}
    };
  }

  componentDidMount() {
		$.get(this.props.source, records => {
    	this.setState({
        records: records 
      });
    });
	}

	updateCollection(newCollection) {
		let collection = this.state.collection;

		for (let record in newCollection) {
			collection[record] = newCollection[record];
		}

		this.setState({
      collection: collection 
    });
	}

	render() {
		return (
			<div>
        <ul className="nav nav-tabs nav-justified" id="tabs">
          <li><a data-toggle="tab" href="#chart" id="chart-tab">Chart</a></li>
          <li className="active"><a data-toggle="tab" href="#grid" id="grid-tab">Grid</a></li>
          <li><a data-toggle="tab" href="#map" id="map-tab">Map</a></li>
        </ul>
        <div className="well">
          <div className="progress-wrapper" />
          <div className="tab-content" id="content">
            <div className="panel panel-info tab-pane fade" id="chart">
              <div className="panel-heading">Chart</div>
              <div className="panel-body">
                <div className="alert alert-success">
                  <span className="glyphicon glyphicon-info-sign" />
                  Tips : Select item(s) from Grid to see it's Chart visualization.
                </div>
                <div id="column" />
                <div>
                  <ul className="nav nav-tabs nav-justified" id="line-tabs" />
                  <div className="tab-content" id="line" />
                </div>
              </div>
            </div>
            <div className="panel panel-info tab-pane fade in active" id="grid">
              <div className="panel-heading">Grid</div>
              <div className="panel-body">
                <div className="alert alert-success">
                  <span className="glyphicon glyphicon-info-sign" />
                  Tips : Select item(s) and then click Chart / Map to see visualization.
                </div>
                <div className="table-responsive" id="grid-table">
                	<Grid
                		category={this.state.category}
                		records={this.state.records}
                		collection={this.state.collection}
                		onSelect={this.updateCollection}
                	/>
                </div>
              </div>
            </div>
            <div className="panel panel-info tab-pane fade" id="map">
              <div className="panel-heading">Map</div>
              <div className="panel-body">
                <div className="alert alert-success">
                  <span className="glyphicon glyphicon-info-sign" />
                  Tips : Select item(s) from Grid to see it's Map visualization.
                </div>
                <div className="map-wrapper">
                	<Chart records={this.state.records}/>
                  <div id="map-canvas" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}

}

'use strict';

import React from 'react';
import $ from 'jquery';
import Grid from './grid.jsx';
import Chart from './chart.jsx';
import Maps from './map.jsx';

export default class Visualization extends React.Component {

  constructor() {
    super();
    this._updateRecords = this._updateRecords.bind(this);
    this._updateRawRecords = this._updateRawRecords.bind(this);
    this.state = {
      tab: 'grid',
      selections: {},
      records: [],
      rawRecords: {}
    };
  }

  componentDidMount() {
    this._updateRecords();
  }

  _updateRecords() {
    $.get(`data/${this.props.category}.json`, records => {
      this.setState({
        tab: 'grid',
        selections: {},
        records: records,
        rawRecords: {}
      });
    });
  }

  _updateRawRecords(id) {
    let selections = this.state.selections;
    selections[id] = !selections[id];

    this.setState({
      selections: selections
    });

    if (!this.state.rawRecords[id]) {
      $.get(`data/${this.props.category}/${id}.json`, rawRecord => {
        this.state.rawRecords[id] = rawRecord;
      });
    }
  }

  _handleTab(tab) {
    this.setState({
      tab: tab
    });
  }

  render() {
    let tab = this.state.tab;
    let partial;

    if (tab === 'chart') {
      partial =
        <Chart
          {...this.state}
        />;
    } else if (tab === 'grid') {
      partial =
        <Grid
          {...this.state}
          onRowSelect={this._updateRawRecords}
        />;
    } else if (tab === 'map') {
      partial =
        <Maps
          {...this.state}
        />;
    }

    return (
      <div>
        <ul className="nav nav-tabs nav-justified" id="tabs">
          <li className={tab === 'chart' ? 'active' : ''}>
            <a data-toggle="tab" href="#chart" id="chart-tab"
              onClick={this._handleTab.bind(this, 'chart')}>Chart
            </a>
          </li>
          <li className={tab === 'grid' ? 'active' : ''}>
            <a data-toggle="tab" href="#grid" id="grid-tab"
              onClick={this._handleTab.bind(this, 'grid')}>Grid
            </a>
          </li>
          <li className={tab === 'map' ? 'active' : ''}>
            <a data-toggle="tab" href="#map" id="map-tab"
              onClick={this._handleTab.bind(this, 'map')}>Map
            </a>
          </li>
        </ul>
        <div className="well">
          <div className="progress-wrapper" />
          <div className="tab-content" id="content">
            {partial}
          </div>
        </div>
      </div>
    );
  }

}

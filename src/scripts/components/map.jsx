'use strict';

import React from 'react';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';

export default class Map extends React.Component {

  constructor() {
    super();
    this._updateMap = this._updateMap.bind(this);
  }

  _updateMap() {
    let clusters = [];
    let records = this.props.records;
    let rawRecords = this.props.rawRecords;

    records.forEach(record => {
      let id = record.id;
      if (this.props.selections[id]) {
        let logs = rawRecords[id];
        // Generate random location for demo
        (function() {
          let lat = 23.39781;
          let lng = 120.26051499;
          let min = 0.01;
          let max = 1.5;

          logs.forEach(log => {
            log.lat = lat + Math.random() * (max - min) + min;
            log.lng = lng + Math.random() * (max - min) + min;
          });
        })();

        let markers = [];

        markers = logs.map(function(log) {
          return {
            info: record.message,
            lat: log.lat,
            lng: log.lng
          };
        });

        clusters.push(markers);
      }
    });

    return clusters;
  }

  render() {
    let markers = this._updateMap().map((logs, i) => {
      return logs.map((log, j) => {
        let id = '' + i + '-' + j;
        return (
          <Marker
            key={'marker' + id}
            lat={log.lat}
            lng={log.lng}
          />
        );
      });
    });

    return (
      <div className="panel panel-info tab-pane in active" id="map">
        <div className="panel-heading">Map</div>
        <div className="panel-body">
          <div className="alert alert-success">
            <span className="glyphicon glyphicon-info-sign"></span>
            {'Tips : Select item(s) from Grid to see Map visualization.'}
          </div>
          <div className="map-wrapper">
            <div id="map-canvas">
              <Gmaps
                width={'100%'}
                height={'100%'}
                lat={23.57873}
                lng={121.0227}
                zoom={7}>
                {markers}
              </Gmaps>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

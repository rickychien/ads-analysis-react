'use strict';

import React from 'react';
import Highcharts from 'react-highcharts';

export default class Chart extends React.Component {

  constructor() {
    super();
    this._updateColumnChart = this._updateColumnChart.bind(this);
  }

	_updateColumnChart() {
		let options = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Column Chart'
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total quantity'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
          ': <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: []
    };
    let series = options.series;
    let records = this.props.records;

    for (let attr in records[0]) {
      if (attr.indexOf('_count') !== -1) {
        series.push({
          name: attr[0].toUpperCase() + attr.substring(1,
            attr.indexOf('_count')),
          data: []
        });
      }
    }

    records.forEach(record => {
      if (this.props.selections[record.id]) {
        options.xAxis.categories.push('ID ' + record.id);
        series.forEach(seriesItem => {
          let name = seriesItem.name;
          name = name[0].toLowerCase() + name.slice(1) + '_count';
          seriesItem.data.push(record[name]);
        });
      }
    });

    return options;
	}

  _updateLineChart() {
    let options = [];
    let option;
    let records = this.props.records;
    let rawRecords = this.props.rawRecords;

    for (let attr in records[0]) {
      if (attr.indexOf('_count') !== -1) {
        let title = attr[0].toUpperCase() + attr.substring(1,
                   attr.indexOf('_count')) + 's';
        option = {
          chart: {
            type: 'line'
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Line Chart - ' + title
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            title: {
              text: title
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ' ' + attr.substring(0, attr.indexOf('_count')) + 's'
          },
          series: []
        };

        records.forEach(record => {
          let id = record.id;

          if (this.props.selections[id]) {
            let values = {};
            let seriesData = [];

            for (let key in rawRecords[id]) {
              let rawRecord = rawRecords[id][key];
              let date;
              date = new Date(rawRecord['updated_at']);
              date = date.toString().substring(0, 18) + ':00';
              values[date] = values[date] || 0;
              values[date] += rawRecord[attr];
            }

            for (let time in values) {
              let date = new Date(time);
              seriesData.push([date.getTime(), values[time]]);
            }

            option.series.push({
              name: 'ID ' + id,
              data: seriesData.sort()
            });
          }
        });

        options.push(option);
      }
    }

    return options;
  }

	render() {
    let columnOption = this._updateColumnChart();
    let lineCharts = this._updateLineChart().map((option, idx) => {
      return (
        <Highcharts
          key={idx}
          config={option}
        />
      );
    });

		return (
      <div className="panel panel-info tab-pane in active" id="chart">
        <div className="panel-heading">Chart</div>
        <div className="panel-body">
          <div className="alert alert-success">
            <span className="glyphicon glyphicon-info-sign"></span>
            {'Tips : Select item(s) from Grid to see Chart visualization.'}
          </div>
          <Highcharts config={columnOption} />
          {lineCharts}
        </div>
      </div>
		);
	}

}

'use strict';

import React from 'react';
import $ from 'jquery';
import Highcharts from 'react-highcharts';

export default class Chart extends React.Component {

	updateColumnChart() {
		var options = {
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
        pointFormat: '<span style="color:{series.color}">{series.name}</span>:' +
          ' <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: []
    },
    series = options.series;

    for (let attr in this.props.attributes) {
      if (attr.indexOf('_count') !== -1) {
        series.push({
          name: attr[0].toUpperCase() + attr.substring(1,
            attr.indexOf('_count')),
          data: []
        });
      }
    }

    this.each(record => {
      if (record.get('selected')) {
        options.xAxis.categories.push('ID ' + record.id);
        series.forEach(seriesItem => {
          var name = seriesItem.name;
          seriesItem.data.push(record.get(name[0].toLowerCase() +
            name.slice(1) + '_count'));
        });
      }
    });

    return options;
	}

	render()  {
		let data = this.props.data;

		return (
			<div />
		);
	}

}

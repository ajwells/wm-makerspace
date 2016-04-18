import React from 'react';
import Api from '../api';
const RadarChart = require('react-chartjs').Radar;

var API = new Api();

export default class CountRadarChart extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var rawdata = API.getCounts('interest');
		var counts = [];
		var labels = [];
		rawdata.forEach(function(item, index) {
			counts.push(item.count);
			labels.push(item.interest);
		});
		var data = {
			labels: labels,
			datasets: [
				{
					label: "data",
					fillcolor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: counts
				}
			]
		};
		console.log(data);
		return <RadarChart data={data} width='800' height='1000'/>
	}
}

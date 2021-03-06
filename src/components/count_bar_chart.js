import React from 'react';
import Api from '../api';
const BarChart = require('react-chartjs').Bar;

var API = new Api();

export default class CountBarChart extends React.Component {

	constructor(props) {
		super(props);
	}

	updateData(rawdata) {	
		var counts = [];
		var labels = [];
		rawdata.forEach(function(item, index) {
			counts.push(item.count);
			labels.push(item.item);
		});
		return {counts: counts, labels: labels};
	}

	render() {
		var rawdata = API.getCounts(this.props.type);
		var updated_data = this.updateData(rawdata);
		var counts = updated_data.counts;
		var labels = updated_data.labels;
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
		return <div style={{textAlign: 'center'}}>
			<BarChart id='chart' data={data} width='1000' height='545' style={{display: 'inline-block'}} redraw/>
		</div>
	}
}

import React from 'react';
import Api from '../api';
const LineChart = require('react-chartjs').Line;

var API = new Api();

export default class VisitLineChart extends React.Component {

	constructor(props) {
		super(props);
	}

	getTimes(rawdata) {	
		var times = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		rawdata.forEach(function(item, index) {
			var start = item.time_in;
			var end = item.time_out;
			while (start != end) {
				times[start] = times[start] + 1;
				start = (start + 1) % 24;
			}
		});
		return times;
	}

	render() {
		var rawdata = API.getTimes(this.props.type);
		var times = this.getTimes(rawdata);
		var labels = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', 
				'7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', 
				'2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 
				'9:00 PM', '10:00 PM', '11:00 PM']
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
					data: times
				}
			]
		};
		return <div style={{textAlign: 'center', paddingTop: '100px'}}>
			<LineChart id='chart' data={data} width='700' height='565' style={{display: 'inline-block'}} redraw/>
		</div>
	}
}

import React from 'react';
import Api from '../api';
const BarChart = require('react-chartjs').Bar;

var API = new Api();

export default class MakerspaceBarChart extends React.Component {

	constructor(props) {
		super(props);
	}

	getTimes(rawdata) {	
		var times = [0,0,0,0,0,0,0];
		rawdata.forEach(function(item, index) {
			times[item.time_in] = times[item.time_in] + 1;
		});
		return times;
	}

	render() {
		var rawdata = API.getDays();
		var times = this.getTimes(rawdata);
		var labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
		return <div style={{textAlign: 'center', paddingTop: '20px'}}>
			<BarChart id='chart' data={data} width='700' height='565' style={{display: 'inline-block'}} redraw/>
		</div>
	}
}

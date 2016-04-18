import React from 'react';
import CountRadarChart from './count_radar_chart';

export default class VisitView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="ui inverted yellow segment">
			<CountRadarChart />;
		</div>
	}
}

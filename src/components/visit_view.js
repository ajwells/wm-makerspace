import React from 'react';
import CountRadarChart from './count_radar_chart';

export default class VisitView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			type: 'interests'
		}
	}

	handleUpdate(e) {
		this.setState({type: e.target.value});
	}

	getSelected(id, data) {
		var selected;
		data.forEach(function(item) {
			if ((item.id) == (id)) {
				selected = item;
			}
		});
		return selected;
	}

	render() {
		
		var types = ['interest'];
		var type = this.state.type;
		var typeDrop = <select value={this.state.id} className="ui compact search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this)}>
			<option value='interests'>interested in</option>
			<option value='skills'>skilled in</option>
			<option value='certifications'>certified in</option>
		</select>

		return <div className="ui inverted yellow segment">
			<div className="ui grid">
			<div className="three wide column">
			<div className="ui inverted form" style={{paddingLeft: '30px', paddingTop: '20px'}}>	
				<div className="field">
				<label>Our Members are</label>
					{typeDrop}
				</div>
			</div>
			</div>
			<div className="three wide column">
			</div>
			<CountRadarChart type={type}/>
			</div>
		</div>
	}
}

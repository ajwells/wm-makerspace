import React from 'react';
import CountBarChart from './count_bar_chart';


export default class OurMemberView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			type: 'interests'
		}
	}

	handleUpdate(item) {
		this.setState({type: item});
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
		var view = this.state.type;
		var isActive = v => v === view ? 'active' : '';

		return <div>
			<div className="ui top attached menu">
				<a onClick={this.handleUpdate.bind(this, 'interests')} className={`item ${isActive('interests')}`}>
					Interests	
				</a>
				<a onClick={this.handleUpdate.bind(this, 'skills')} className={`item ${isActive('skills')}`}>
					Skills	
				</a>
				<a onClick={this.handleUpdate.bind(this, 'certifications')} className={`item ${isActive('certifications')}`}>
					Certifications	
				</a>
			</div>
			<div className="ui yellow attached segment">
				<div style={{paddingTop: '10px'}}>
					<CountBarChart type={this.state.type} />
				</div>
			</div>
		</div>
	}
}

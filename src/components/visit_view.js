import React from 'react';
import VisitLineChart from './visit_line_chart';
import Api from '../api';

var API = new Api();

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
		
		var interests = API.getInterestList();
		var items =[]
		
		var view = this.state.type;
		var isActive = v => v === view ? 'active' : '';
		
		interests.forEach(function(data, i) {
			items.push(<a onClick={this.handleUpdate.bind(this, data.interest)} className={`item ${isActive(data.interest)}`} key={i}>{data.interest}</a>)
		}.bind(this));


		return <div>
			<div className="ui yellow segment">
				<div className="ui grid">
					<div className="three wide column">
						<div className="ui vertical pointing menu">
							<div className="item"><h3>I want to learn ...</h3></div>
							{items}
						</div>
					</div>
					<div className="thirteen wide column">
						<VisitLineChart type={this.state.type} />
					</div>
				</div>
			</div>
		</div>
	}
}

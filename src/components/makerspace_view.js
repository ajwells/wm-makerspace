import React from 'react';
import MemberCard from './membercard';
import MakerspaceBarChart from './makerspace_bar_chart';
import Api from '../api';

var API = new Api();

class DropdownItem extends React.Component {
	render() {
		var item = this.props.item;

		return <option value={item}>
			{item}
		</option>
	}
}

export default class MakerspaceView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: false
		}
	}

	handleClick(item) {
		this.setState({id: item});
	}

	handleUpdate(type, e) {
		if (type === 'ID') {
			this.setState({id: e.target.value});
		}
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

		var data = API.getUsers("current");
		var idrows = [];
		var selected = this.getSelected(this.state.id, data);

		if (!data) {
			data = {};
		}
		data.forEach(function(data, index) {
			idrows.push(<DropdownItem item={data.id} key={index} />);
		});

		var idDrop = <select value={this.state.id} className="ui fluid search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this, 'ID')}>
			<option value=""></option>
			{idrows}
		</select>

		var card;
		if (selected) {
			var card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} last_visit={selected.last_visit}/>
			var graphData = API.getMemberTimes(this.state.id);
		} else {
			var graphData = API.getTimes('all');
		}

		var view = <div className="ui grid">
			<div className="four wide column">
				<div className="ui yellow segment">
					<div style={{paddingTop: '20px', paddingBottom: '20px'}} >
						<div style={{paddingBottom: '20px'}} ><h2>Current Makers: {data.length}</h2></div>
						<div>{idDrop}</div>
					</div>
				</div>
				<div style={{textAlign: 'center'}}><div sytle={{display: 'inline-block'}}>{card}</div></div>
			</div>
			<div className="twelve wide column">
				<div className="ui yellow segment">
					<MakerspaceBarChart data={graphData}/>
				</div>
			</div>
		</div>;
		
		return <div>
			{view}
		</div>;
	}
}

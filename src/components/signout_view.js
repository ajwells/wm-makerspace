import React from 'react';
import MemberCard from './membercard';
import Api from '../api';

var API = new Api();

class SignOutItem extends React.Component {
	render() {
		var item = this.props.item;

		return <option value={item}>
			{item}
		</option>
	}
}

export default class SignOutView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: false,
			room: ''
		}
	}

	handleClick(item) {
		this.setState({id: item});
	}

	handleUpdate(type, e) {
		if (type === 'ID') {
			this.setState({id: e.target.value});
		} else if (type === 'ROOM') {
			this.setState({room: e.target.value});
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

		data.forEach(function(data, index) {
			idrows.push(<SignOutItem item={data.id} key={index} />);
		});

		var idDrop = <select value={this.state.id} className="ui search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this, 'ID')}>
			<option value=""></option>
			{idrows}
		</select>

		var signout = <div className="ui yellow segment" style={{paddingTop: '50px', paddingBottom: '60px'}}>
			<div className="ui grid">
				<div className="twelve wide column">
					<div className="ui form">	
						<div className="field">
						<label>Member ID</label>
							{idDrop}
						</div>
					</div>
				</div>
				<div className="four wide column">
					<div style={{paddingTop: '24px'}}></div>
					<div className="ui fluid button">Sign Out</div>
				</div>
			</div>
		</div>;

		if (!selected) {
			var view = signout;
		} else {
			var card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} last_visit={selected.last_visit} />
			var view = <div className="ui middle aligned grid">
				<div className="ten wide column">
					{signout}
				</div>
				<div className="one wide column">
				</div>
				<div className="four wide column">
					{card}
				</div>
			</div>
		}

		return <div>
			{view}
		</div>;
	}
}

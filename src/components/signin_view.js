import React from 'react';
import MemberCard from './membercard';

class SignInItem extends React.Component {
	render() {
		var item = this.props.item;

		return <option value={item}>
			{item}
		</option>
	}
}

export default class SignInView extends React.Component {

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
		data.forEach(function(data) {
			if (data.id === id) {
				selected = data;
			}
		});
		return selected;
	}

	render() {

		var data = [{id: '39120321', name: 'name 1', visit: '1'}, {id: '8008231', name: 'name 2', visit: '4'}];
		var idrows = [];
		var rooms = ['SM143', 'SM235'];
		var roomrows = [];
		var selected = this.getSelected(this.state.id, data);

		data.forEach(function(data, index) {
			idrows.push(<SignInItem item={data.id} key={index} />);
		});
		rooms.forEach(function(item, index) {
			roomrows.push(<SignInItem item={item} key={index} />);
		});

		var idDrop = <select value={this.state.id} className="ui search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this, 'ID')}>
			<option value=""></option>
			{idrows}
		</select>
		var roomDrop = <select value={this.state.room} className="ui search dropdown" id="roomDrop" onChange={this.handleUpdate.bind(this, 'ROOM')}>
			<option value=""></option>
			{roomrows}
		</select>

		var signin = <div className="ui yellow inverted segment" style={{paddingTop: '50px', paddingBottom: '60px'}}>
			<div className="ui grid">
				<div className="six wide column">
					<div className="ui inverted form">	
						<div className="field">
						<label>Member ID</label>
							{idDrop}
						</div>
					</div>
				</div>
				<div className="five wide column">
					<div className="ui inverted form">	
						<div className="field">
						<label>Room</label>
							{roomDrop}
						</div>
					</div>
				</div>
				<div className="four wide column">
					<div style={{paddingTop: '24px'}}></div>
					<div className="ui fluid button">Sign In</div>
				</div>
			</div>
		</div>;

		if (!this.state.id) {
			var view = signin;
		} else {
			var card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} />
			var view = <div className="ui grid">
				<div className="nine wide column">
					{signin}
				</div>
				<div className="two wide column">
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

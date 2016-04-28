import React from 'react';
import MemberCard from './membercard';
import Api from '../api';

var API = new Api();

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
			id: '',
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

	submit() {
		console.log(this.state.id);
		console.log(this.state.room);
		var data = {
			id: this.state.id,
			room: this.state.room
		}
		API.newSignIn(data);
		this.forceUpdate();
	}

	render() {

		var data = API.getUsers("notcurrent");
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

		var signin = <div className="ui yellow segment" style={{paddingTop: '50px', paddingBottom: '60px'}}>
			<div className="ui grid">
				<div className="six wide column">
					<div className="ui form">	
						<div className="field">
						<label>Member ID</label>
							{idDrop}
						</div>
					</div>
				</div>
				<div className="five wide column">
					<div className="ui form">	
						<div className="field">
						<label>Room</label>
							{roomDrop}
						</div>
					</div>
				</div>
				<div className="four wide column">
					<div style={{paddingTop: '24px'}}></div>
					<div className="ui fluid button" onClick={this.submit.bind(this)} >Sign In</div>
				</div>
			</div>
		</div>;

		if (!selected) {
			var view = signin;
		} else {
			var card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} last_visit={selected.last_visit}/>
			var view = <div className="ui middle aligned grid">
				<div className="ten wide column">
					{signin}
				</div>
				<div className="one wide column">
				</div>
				<div className="four wide column">
					<div style={{textAlign: 'center'}}><div sytle={{display: 'inline-block'}}>{card}</div></div>
				</div>
			</div>
		}

		return <div>
			{view}
		</div>;
	}
}

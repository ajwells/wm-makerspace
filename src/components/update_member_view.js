import React from 'react';
import Api from '../api'
import MemberCard from './membercard';

const API = new Api();
const INTEREST = 'interest';
const SKILL = 'skill';
const CERT = 'certification';
const NAME = 'name';
const ID = 'id';

class DropdownItem extends React.Component {
	render() {
		var item = this.props.item;

		return <option value={item}>
			{item}
		</option>
	}
}

class InputItem extends React.Component {

	render() {
		var the_name = this.props.list_type + " " + (this.props.index + 1).toString();
		return <div className="field">
			<input type="text" placeholder={the_name} onChange={this.props.onChange} />
		</div>;
	}
}

export default class UpdateMemberView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			[NAME]: '',
			[ID]: '',
			[INTEREST]: [],
			[SKILL]: [],
			[CERT]: []
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

	addToCount(count) {
		this.setState({
			[count]: this.state[count].concat('')
		});
	}
	
	removeFromCount(count) {
		this.setState({
			[count]: this.state[count].splice(0, (this.state[count].length - 1))
		});
	}

	update(item, index, e) {
		switch (item) {
			case 'id':
				this.setState({ [ID]: e.target.value });
				break;
			case 'name':
				this.setState({ [NAME]: e.target.value });
				break;
			default:
				var new_state = this.state[item];
				new_state[index] = e.target.value;
				this.setState({ [item]: new_state });
		}
	}

	deleteItem(type, item) {
		var res = API.deleteMemberInfo(type, this.state.id, item);
		this.forceUpdate();
	}

	submit() {
		console.log(this.state[ID]);
		console.log(this.state[NAME]);
		console.log(this.state[INTEREST]);
		console.log(this.state[SKILL]);
		console.log(this.state[CERT]);
		var data = {
			id: this.state[ID],
			name: this.state[NAME],
			interests: this.state[INTEREST],
			skills: this.state[SKILL],
			certs: this.state[CERT]
		};
		API.newMember(data);
	}



	render() {
	
		//drop down
		var data = API.getMemberList();
		var idrows = [];
		data.forEach(function(data, index) {
			idrows.push(<DropdownItem item={data.id} key={index} />);
		});
		var idDrop = <select value={this.state.id} className="ui search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this, 'ID')}>
			<option value=""></option>
			{idrows}
		</select>

		//member card
		var selected = this.getSelected(this.state.id, data);
		var card;
		var certs = [];
		var skills = [];
		var interests = [];
		var length;
		if (selected) {
			length = "twelve wide column"
			card = (<div className="four wide column" ><div style={{textAlign: 'center'}}><div sytle={{display: 'inline-block'}}>
				<MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} last_visit={selected.last_visit}/>
				</div></div></div>);
			certs = API.getMemberInfo('certs', this.state.id);
			skills = API.getMemberInfo('skills', this.state.id);
			interests = API.getMemberInfo('interests', this.state.id);
		} else {
			length = "sixteen wide column"
			selected = {}
		}
	
		//member info

		//interests
		var interest_list = [];
		this.state[INTEREST].forEach(function(value, index) {
			interest_list.push(<InputItem index={index} key={index} onChange={this.update.bind(this, INTEREST, index)} list_type={INTEREST} />)
		}.bind(this));
	
		//skills
		var skill_list = [];
		this.state[SKILL].map(function(num, index) {
			skill_list.push(<InputItem index={index} key={index} onChange={this.update.bind(this, SKILL, index)} list_type={SKILL} />)
		}.bind(this));
	
		//certs
		var cert_list = [];	
		this.state[CERT].map(function(num, index) {
			cert_list.push(<InputItem index={index} key={index} onChange={this.update.bind(this, CERT, index)} list_type={CERT} />)
		}.bind(this));
		
		return <div>
			<div className="ui grid">
			<div className={length}>
			<div className="ui yellow segment">
			<form className="ui form">
				<div className="two fields">
				<div className="field">
					<label>ID</label>
					{idDrop}
				</div>
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" placeholder={selected.name} onChange={this.update.bind(this, NAME, 0)} />
				</div>
				</div>

				{/* interests */}
				<div className="ui left labeled button" tabIndex="0">
					<div className="ui basic label">
						Interests
					</div>
					<div onClick={this.addToCount.bind(this, INTEREST)} className="ui button">
						Add
					</div>
				</div>
				<div onClick={this.removeFromCount.bind(this, INTEREST)} className="negative ui right floated button">
					Remove
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{interests.map(function(data, i) {
						return (<div className="ui left labeled button" tabIndex="0" key={i}>
								<div className="ui basic label">
									{data.interest}
								</div>
								<div className="ui negative icon button" onClick={this.deleteItem.bind(this, INTEREST, data.interest)}>
									<i className="remove icon"></i>
								</div>
							</div>);
					}.bind(this))}
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{interest_list}
				</div>
				<div className="ui divider"> </div>

				{/* skills */}
				<div className="ui left labeled button" tabIndex="0">
					<div className="ui basic label">
						Skills
					</div>
					<div onClick={this.addToCount.bind(this, SKILL)} className="ui button">
						Add
					</div>
				</div>
				<div onClick={this.removeFromCount.bind(this, SKILL)} className="negative ui right floated button">
					Remove
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{skills.map(function(data, i) {
						return (<div className="ui left labeled button" tabIndex="0" key={i}>
								<div className="ui basic label">
									{data.skill}
								</div>
								<div className="ui negative icon button" onClick={this.deleteItem.bind(this, SKILL, data.skill)}>
									<i className="remove icon"></i>
								</div>
							</div>);
					}.bind(this))}
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{skill_list}
				</div>
				<div className="ui divider"> </div>

				{/* certifications */}
				<div className="ui left labeled button" tabIndex="0">
					<div className="ui basic label">
						Certifications
					</div>
					<div onClick={this.addToCount.bind(this, CERT)} className="ui button">
						Add
					</div>
				</div>
				<div onClick={this.removeFromCount.bind(this, CERT)} className="negative ui right floated button">
					Remove
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{certs.map(function(data, i) {
						return (<div className="ui left labeled button" tabIndex="0" key={i}>
								<div className="ui basic label">
									{data.certificate}
								</div>
								<div className="ui negative icon button" onClick={this.deleteItem.bind(this, CERT, data.certificate)}>
									<i className="remove icon"></i>
								</div>
							</div>);
					}.bind(this))}
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{cert_list}
				</div>
			</form>
			<div className="ui hidden divider"></div>
			<div onClick={this.submit.bind(this)} className="white ui button">
				Submit
			</div>
			</div>
			</div>
			{card}
			</div>
		</div>;
	}
}

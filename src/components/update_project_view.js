import React from 'react';
import Api from '../api';
import ProjectCard from './projectcard';

const API = new Api();
const MEMBERS = 'member id';
const NAME = 'name';
const BUDGET = 'budget';
const SPENT = 'spent';

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

export default class UpdateProjectView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			[NAME]: '',
			[BUDGET]: '',
			[SPENT]: '',
			[MEMBERS]: []
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

	deleteItem(item) {
		console.log(item);
		API.deleteMemberInfo('project', item, this.state.id);
		this.forceUpdate();
	}

	update(item, index, e) {
		switch (item) {
			case 'spent':
				this.setState({ [SPENT]: e.target.value });
				break;
			case 'budget':
				this.setState({ [BUDGET]: e.target.value });
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

	submit() {
		console.log(this.state[BUDGET]);
		console.log(this.state[NAME]);
		console.log(this.state[MEMBERS]);
		var data = {
			id: this.state.id,
			spent: this.state[SPENT],
			budget: this.state[BUDGET],
			members: this.state[MEMBERS]
		}
		var res = API.updateProject(data);
		if (res == 200) {
			this.setState({[SPENT]: ''});
			this.setState({[BUDGET]: ''});
			this.setState({[MEMBERS]: []});
			this.forceUpdate();
		}
	}



	render() {
		
		var members_list = [];
		this.state[MEMBERS].forEach(function(value, index) {
			members_list.push(<InputItem index={index} key={index} onChange={this.update.bind(this, MEMBERS, index)} list_type={MEMBERS} />)
		}.bind(this));
		
		var data = API.getProjectList();
		var idrows = [];
		data.forEach(function(data, index) {
			idrows.push(<DropdownItem item={data.id} key={data.id} />);
		});
		var idDrop = <select value={this.state.id} className="ui search dropdown" id="idDrop" onChange={this.handleUpdate.bind(this, 'ID')}>
			<option value=""></option>
			{idrows}
		</select>
		
		var selected = this.getSelected(this.state.id, data);
		var members;
		var length;
		var card;
		if (selected) {
			length = "twelve wide column"
			var remaining = (parseFloat(selected.budget) - parseFloat(selected.spent)).toFixed(2);
			card = (<div className="four wide column" ><div style={{textAlign: 'center'}}><div sytle={{display: 'inline-block'}}>
				<ProjectCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} remaining={remaining}/>
				</div></div></div>);
			members = API.getProjectInfo("members", this.state.id).map(function(data, i) {
				return (<div className="ui left labeled button" tabIndex="0" key={i}>
						<div className="ui basic label">
							{data.id}
						</div>
						<div className="ui negative icon button" onClick={this.deleteItem.bind(this, data.id)}>
							<i className="remove icon"></i>
						</div>
					</div>);
			}.bind(this));

		} else {
			length = "sixteen wide column"
			selected = {}
		}

		return <div>
			<div className="ui grid">
			<div className={length}>
			<div className="ui yellow segment">
			<form className="ui form">
				<div className="three fields">
				<div className="field">
					<label>ID</label>
					{idDrop}
				</div>
				<div className="field">
					<label>Budget</label>
					<input type="text" name="budget" placeholder="Budget" onChange={this.update.bind(this, BUDGET, 0)} />
				</div>
				<div className="field">
					<label>Spent</label>
					<input type="text" name="spent" placeholder="Spent" onChange={this.update.bind(this, SPENT, 0)} />
				</div>
				</div>

				{/* members */}
				<div className="ui left labeled button" tabIndex="0">
					<div className="ui basic label">
						Members
					</div>
					<div onClick={this.addToCount.bind(this, MEMBERS)} className="ui button">
						Add
					</div>
				</div>
				<div onClick={this.removeFromCount.bind(this, MEMBERS)} className="negative ui right floated button">
					Remove
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{members}
				</div>
				<div className="ui hidden divider"></div>
				<div>
					{members_list}
				</div>
				<div className="ui divider"> </div>

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

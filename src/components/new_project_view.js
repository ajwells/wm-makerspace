import React from 'react';

const MEMBERS = 'member';
const NAME = 'name';
const BUDGET = 'budget';

class InputItem extends React.Component {

	render() {
		var the_name = this.props.list_type + " " + (this.props.index + 1).toString();
		return <div className="field">
			<input type="text" placeholder={the_name} onChange={this.props.onChange} />
		</div>;
	}
}

export default class NewProjectView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			[NAME]: '',
			[BUDGET]: '',
			[MEMBERS]: []
		}
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
	}



	render() {
		
		var members_list = [];
		this.state[MEMBERS].forEach(function(value, index) {
			members_list.push(<InputItem index={index} key={index} onChange={this.update.bind(this, MEMBERS, index)} list_type={MEMBERS} />)
		}.bind(this));
		
		
		return <div>
			<div className="ui yellow segment">
			<form className="ui form">
				<div className="two fields">
				<div className="required field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name" onChange={this.update.bind(this, NAME, 0)} />
				</div>
				<div className="required field">
					<label>Budget</label>
					<input type="text" name="budget" placeholder="Budget" onChange={this.update.bind(this, BUDGET, 0)} />
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
					{members_list}
				</div>
				<div className="ui divider"> </div>

			</form>
			<div className="ui hidden divider"></div>
			<div onClick={this.submit.bind(this)} className="white ui button">
				Submit
			</div>
			</div>
		</div>;
	}
}

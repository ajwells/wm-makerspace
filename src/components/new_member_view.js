import React from 'react';

const INTEREST = 'interest';
const SKILL = 'skill';
const CERT = 'cert';
const NAME = 'name';
const ID = 'id';

export default class NewMemberView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			[NAME]: '',
			[ID]: '',
			[INTEREST]: [],
			[SKILL]: [],
			[CERT]: []
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
			case 'id':
				this.setState({ [ID]: e.target.value });
				break;
			case 'name':
				this.setState({ [NAME]: e.target.value });
				break;
			default:
				var new_state = this.state[item][index] = e.target.value;
				this.setState({ [INTEREST]: new_state });
		}
	}

	submit() {
		console.log(this.state[ID]);
		console.log(this.state[NAME]);
		console.log(this.state[INTEREST]);
		console.log(this.state[SKILL]);
		console.log(this.state[CERT]);
	}



	render() {
		var interest_list = this.state[INTEREST].map(function(num, index) {
			var the_name = "interest " + (index + 1).toString();
			return <div className="field"> <input type="text" key={the_name} placeholder={the_name} /> </div>
		})
		
		var skill_list = this.state[SKILL].map(function(num, index) {
			var the_name = "skill " + (index + 1).toString();
			return <div className="field"> <input type="text" key={the_name} placeholder={the_name}/> </div>
		})
		var cert_list = this.state[CERT].map(function(num, index) {
			var the_name = "certification " + (index + 1).toString();
			return <div className="field"> <input type="text" key={the_name} placeholder={the_name}/> </div>
		})
		
		return <div>
			<div className="ui yellow inverted segment">
			<form className="ui inverted form">
				<div className="two fields">
				<div className="required field">
					<label>ID</label>
					<input type="text" name="id" placeholder="ID" onChange={this.update.bind(this, ID, 0)} />
				</div>
				<div className="required field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name" onChange={this.update.bind(this, NAME, 0)} />
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
					{cert_list}
				</div>
			</form>
			<div className="ui hidden divider"></div>
			<div onClick={this.submit.bind(this)} className="white ui button">
				Submit
			</div>
			</div>
		</div>;
	}
}

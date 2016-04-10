import React from 'react';

const INTEREST = 'interest_count';
const SKILL = 'skill_count';
const CERT = 'cert_count';

export default class NewMemberView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			[INTEREST]: [],
			[SKILL]: [],
			[CERT]: []
		}
	}

	addToCount(count) {
		this.setState({
			[count]: this.state[count].concat([this.state[count].length])
		});
	}
	
	removeFromCount(count) {
		this.setState({
			[count]: this.state[count].splice(0, (this.state[count].length - 1))
		});
	}

	render() {
		var interest_list = this.state[INTEREST].map(function(num, index) {
			var the_name = "interest " + (num + 1).toString();
			return <div className="field"> <input type="text" key={index} placeholder={the_name}/> </div>
		})
		
		var skill_list = this.state[SKILL].map(function(num, index) {
			var the_name = "skill " + (num + 1).toString();
			return <div className="field"> <input type="text" key={index} placeholder={the_name}/> </div>
		})
		var cert_list = this.state[CERT].map(function(num, index) {
			var the_name = "certification " + (num + 1).toString();
			return <div className="field"> <input type="text" key={index} placeholder={the_name}/> </div>
		})
		
		return <div>
			<div className="ui yellow inverted segment">
			<form className="ui inverted form">
				<div className="two fields">
				<div className="required field">
					<label>ID</label>
					<input type="text" name="id" placeholder="ID"/>
				</div>
				<div className="required field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name"/>
				</div>
				</div>

				{/* interests */}
				<div className="ui left labeled button" tabIndex="0">
					<div className="ui basic label">
						Interests
					</div>
					<div onClick={this.addToCount.bind(this, INTEREST)} className="ui button">
						New
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
						New
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
						New	
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
			<div className="white ui button">
				Submit
			</div>
			</div>
		</div>;
	}
}

import React from 'react';

export default class NewMemberView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
		return <div>
			<div className="ui green inverted segment">
			<form className="ui inverted form">
				<div className="field">
					<label>ID</label>
					<input type="text" name="id" placeholder="ID"/>
				</div>
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name"/>
				</div>
			</form>
			</div>
		</div>;
	}
}

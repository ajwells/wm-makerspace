import React from 'react';

class SignInItem extends React.Component {
	render() {
		var item = this.props.item;

		return <option value={item}>
			{item}
		</option>
	}
}

export default class SignInView extends React.Component {

	render() {

		var data = [{id: 'id 1'}, {id: 'id 2'}];
		var rows = [];


		data.forEach(function(data, index) {
			rows.push(<SignInItem item={data.id} key={index} />)
		});
		
		return <div>
			<div className="ui two column stackable grid">
				<div className="column">
					<div className="ui yellow inverted segment" style={{paddingTop: '50px', paddingBottom: '60px'}}>
						<div className="ui grid">
							<div className="six wide column">
								<div className="ui inverted form">	
									<div className="field">
									<label>Member ID</label>
									<select className="ui search dropdown">
										<option value=""></option>
										<option value="test">Test</option>
									</select>
									</div>
								</div>
							</div>
							<div className="five wide column">
								<div className="ui inverted form">	
									<div className="field">
									<label>Room</label>
									<select className="ui search dropdown">
										<option value=""></option>
										<option value="test">Test</option>
									</select>
									</div>
								</div>
							</div>
							<div className="four wide column">
								<div style={{paddingTop: '24px'}}></div>
								<div className="ui fluid button">Sign In</div>
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="ui yellow inverted segment">
						<div className="ui divided list">
							<div className="item" style={{paddingBottom: '10px'}}>
								<div className="ui label">Name:
									<div className="detail"> Aaron</div>
								</div>
							</div>
							<div className="item">
								<div className="ui label">Projects:</div>
								<div className="ui list">
									<div className="item">item</div>
								</div>
							</div>
							<div className="item">
								<div className="ui label">Certifications:</div>
								<div className="ui list">
									<div className="item">item</div>
								</div>
							</div>
							<div className="item">
								<div className="ui label">Skills:</div>
								<div className="ui list">
									<div className="item">item</div>
								</div>
							</div>
							<div className="item">
								<div className="ui label">Interests:</div>
								<div className="ui list">
									<div className="item">item</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

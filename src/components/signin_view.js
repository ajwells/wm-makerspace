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

		var data = [{id: 'id 1'}, {id: 'id 2'}]
		var rows = [];

		data.forEach(function(data, index) {
			rows.push(<SignInItem item={data.id} key={index} />)
		});
		
		return <div>
			<div className="ui two column middle aligned stackable grid">
				<div className="column">
					<div className="ui yellow inverted segment">
						<div className="ui grid">
							<div className="nine wide column">
								<form className="ui inverted form">	
									<label>ID</label>
									<select className="ui dropdown" placeholder="id">
										<option value=""></option>
										{rows}
									</select>
								</form>
							</div>
							<div className="seven wide column">
								<form className="ui inverted form">	
									<label>Room</label>
									<select className="ui dropdown" placeholder="id">
										<option value=""></option>
										{rows}
									</select>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="ui yellow inverted segment">
						<div className="ui label">Name:
							<div className="detail"> Aaron</div>
						</div>
						<div className="ui divider"></div>
						<div className="ui grid">
							<div className="eight wide column">
								<div className="ui segment">
									<div>Projects:</div>
									<div>Projects:</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

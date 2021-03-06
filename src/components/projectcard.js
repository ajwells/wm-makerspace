import React from 'react';
import Api from '../api';

var API = new Api();

export default class ProjectCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	clicked() {
		this.props.onClick('');
	}

	render() {
		var name = this.props.name;
		var id = this.props.id;
		var url = API.getImage2("project.jpg");
		var members = API.getProjectInfo("members", id);

		return <div>	
		<div className="ui card">
			<div className="image" style={{position: 'relative'}}>
				<button className="ui compact right floated negative icon button" style={{position: 'absolute', right: '5px', top: '5px'}} onClick={this.clicked.bind(this)}>
					<i className="remove icon"></i>
				</button>
				<img src={url} />
			</div>
			<div className="content">
				<div className="header">{name}</div>
				<div className="ui divided list">
					<div className="item">
						<div className="ui label">Working On:</div>
						<div className="ui list">
							{members.map(function(data, i) {
								return (<div className="item" key={i}>{data.name}</div>)
							})}
						</div>
					</div>
					<div className="item">
						<div className="ui label">Money Remaining:</div>
						<div className="ui list">
							<div className="item">${this.props.remaining}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>

	}
}

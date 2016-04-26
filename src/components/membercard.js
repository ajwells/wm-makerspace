import React from 'react';
import Api from '../api';

var API = new Api();

export default class MemberCard extends React.Component {

	constructor(props) {
		super(props);
	}

	clicked() {
		this.props.onClick(false);
	}

	render() {
		
		var certs = API.getMemberInfo('certs', this.props.id);
		var certsList = [];
		var skills = API.getMemberInfo('skills', this.props.id);
		var skillsList = [];
		var interests = API.getMemberInfo('interests', this.props.id);
		var projects = API.getMemberInfo('projects', this.props.id);
		var name = this.props.name;
		var url = API.getImage2("matthew.png");


		return <div>
		{/*<div style={{position: 'fixed', top: '153px'}}>*/}
		<div className="ui card">
			<div className="image" style={{position: 'relative'}}>
				<button className="ui compact right floated negative icon button" style={{position: 'absolute', right: '5px', top: '5px'}} onClick={this.clicked.bind(this)}>
					<i className="remove icon"></i>
				</button>
				<img src={url} />
			</div>
			<div className="content">
				<div className="header">{name}</div>
				<div className="meta">
					<span className="date">Last Visit: {this.props.last_visit.split('T')[0]}</span>
				</div>
				<div className="ui divided list">
					<div className="item">
						<div className="ui label">Projects:</div>
						<div className="ui list">
							{projects.map(function(data, i) {
								return (<div className="item" key={i}>{data.project_name}</div>)
							})}
						</div>
					</div>
					<div className="item">
						<div className="ui label">Certifications:</div>
						<div className="ui list">
							{certs.map(function(data, i) {
								certsList.push(data.certificate);
								return (<div className="item" key={i}>{data.certificate}</div>)
							})}
						</div>
					</div>
					<div className="item">
						<div className="ui label">Skills:</div>
						<div className="ui list">
							{skills.map(function(data, i) {
								skillsList.push(data.skill);
								if ((certsList.indexOf(data.skill)) == -1) {
									return (<div className="item" key={i}>{data.skill}</div>);
								}
								return;
							})}
						</div>
					</div>
					<div className="item">
						<div className="ui label">Interests:</div>
						<div className="ui list">
							{interests.map(function(data, i) {
								if ((skillsList.indexOf(data.interest)) == -1) {
									return (<div className="item" key={i}>{data.interest}</div>)
								}
								return;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>

	}
}

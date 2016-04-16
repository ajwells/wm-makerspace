import React from 'react';

export default class MemberCard extends React.Component {

	constructor(props) {
		super(props);
	}

	clicked() {
		this.props.onClick(false);
	}

	render() {
		var name = this.props.name;
		var url = "http://ec2-52-91-5-18.compute-1.amazonaws.com:12000/images/test";

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
				<div className="meta">
					<span className="date">Last Visit:</span>
				</div>
				<div className="ui divided list">
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

	}
}

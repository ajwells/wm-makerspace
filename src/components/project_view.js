import React from 'react';

const MAIN = 'List';
const NEW = 'New';
const UPDATE = 'Update';

const views = {
	[MAIN]: 'List',
	[NEW]: 'New',
	[UPDATE]: 'Update'
};

export default class ProjectView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			view: views[MAIN]
		};
	}

	changeView(view) {
		this.setState({ view });
	}

	render() {
		var view = this.state.view;
		var isActive = v => v === view ? 'active' : '';
		
		return <div>
			<div className="ui secondary pointing menu">	
				<div onClick={this.changeView.bind(this, MAIN)} className={`item ${isActive(MAIN)}`}>
					List	
				</div>
				<div onClick={this.changeView.bind(this, NEW)} className={`item ${isActive(NEW)}`}>
					New	
				</div>
				<div onClick={this.changeView.bind(this, UPDATE)} className={`item ${isActive(UPDATE)}`}>
					Update
				</div>
			</div>
		</div>;
	}
}

import React from 'react';
import VisitView from './visit_view';

const MAIN = 'The Makerspace';
const VISIT = 'When to Visit';
const UPDATE = 'Update';

const views = {
	[MAIN]: 'The Makerspace',
	[VISIT]: 'When to Visit',
	[UPDATE]: 'Update'
};

export default class HomeView extends React.Component {
	
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
			<div className="ui yellow secondary pointing menu">	
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, MAIN)} className={`item ${isActive(MAIN)}`}>
					The Makerspace
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, VISIT)} className={`item ${isActive(VISIT)}`}>
					When to Visit
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, UPDATE)} className={`item ${isActive(UPDATE)}`}>
					Update
				</a>
			</div>

			{view === VISIT && <VisitView />}

		</div>;
	}
}

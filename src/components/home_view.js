import React from 'react';
import OurMemberView from './our_member_view';
import VisitView from './visit_view';
import MakerspaceView from './makerspace_view';

const MAIN = 'The Makerspace';
const DETAIL = 'Our Members';
const VISIT = 'When to Visit';

const views = {
	[MAIN]: 'The Makerspace',
	[VISIT]: 'When to Visit',
	[DETAIL]: 'Our Members'
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
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, DETAIL)} className={`item ${isActive(DETAIL)}`}>
					Our Members
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, VISIT)} className={`item ${isActive(VISIT)}`}>
					When to Visit
				</a>
			</div>
			
			{view === MAIN && <MakerspaceView />}

			{view === DETAIL && <OurMemberView />}

			{view === VISIT && <VisitView />}

		</div>;
	}
}

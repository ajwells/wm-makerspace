import React from 'react';
import SignInView from './signin_view';
import SignOutView from './signout_view';

const MAIN = 'Sign In';
const OUT = 'Sign Out';

const views = {
	[MAIN]: 'Sign In',
	[OUT]: 'Sign Out',
};

export default class SignView extends React.Component {
	
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
					Sign In
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, OUT)} className={`item ${isActive(OUT)}`}>
					Sign Out
				</a>
			</div>

			{view === MAIN && <SignInView />} 
			
			{view === OUT && <SignOutView />} 

		</div>;
	}
}

import React from 'react';
import MemberView from './components/member_view';
import ProjectView from './components/project_view';
import HomeView from './components/home_view';
import SignView from './components/sign_view';

const MAIN = 'Home';
const USER = 'Members';
const PROJECT = 'Projects';
const SIGN = 'Sign In/Out';

const views = {
	[MAIN]: 'Home',
	[USER]: 'Members',
	[PROJECT]: 'Projects',
	[SIGN]: 'Sign In/Out'
};



export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			view: MAIN
		};
	}

	changeView(view) {
		this.setState({ view });
	}

	render() {

		var view = this.state.view;
		var isActive = v => v === view ? 'active' : '';

		return <div>
			<div>
			{/* menu */}
			<div className='ui left fixed vertical menu'>
				<div className='item'><h2>W&M Makerspace</h2></div>
				<a onClick={this.changeView.bind(this, MAIN)} className={`item ${isActive(MAIN)}`}>
					Home
				</a>
				<a onClick={this.changeView.bind(this, USER)} className={`item ${isActive(USER)}`}>
					Members
				</a>
				<a onClick={this.changeView.bind(this, PROJECT)} className={`item ${isActive(PROJECT)}`}>
					Projects
				</a>
				<a onClick={this.changeView.bind(this, SIGN)} className={`item ${isActive(SIGN)}`}>
					Sign In/Out
				</a>
				<div className='item'></div>
			</div>

			{/* page */}
			<div style={{backgroundColor: '#003200'}}>
			<div className='pusher' style={{padding: '25px', marginLeft: '210px'}}>
				
				<div style={{marginBottom: '20px'}}>
					<h1 className='ui block header' style={{color: 'white', backgroundColor: '#FFB70A'}}>{views[view]}</h1>
				</div>

				{view === MAIN && <HomeView />}

				{view === USER && <MemberView  />}

				{view === PROJECT && <ProjectView  />}

				{view === SIGN && <SignView  />}
			</div>
			</div>
			</div>
		</div>;
	}
}

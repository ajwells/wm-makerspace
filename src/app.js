import React from 'react';
import Test1 from './components/test1';
import Test2 from './components/test2';


const MAIN = 'Main';
const USER = 'Users';
const PROJECT = 'Projects';

const views = {
	[MAIN]: 'Main',
	[USER]: 'Users',
	[PROJECT]: 'Projects'
};



export default class App extends React.Component {

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
			<div>
			{/* menu */}
			<div className='ui left fixed vertical menu'>
				<div className='item'><h2>Makerspace</h2></div>
				<div onClick={this.changeView.bind(this, MAIN)} className={`item ${isActive(MAIN)}`}>
					Main
				</div>
				<div onClick={this.changeView.bind(this, USER)} className={`item ${isActive(USER)}`}>
					Users
				</div>
				<div onClick={this.changeView.bind(this, PROJECT)} className={`item ${isActive(PROJECT)}`}>
					Project
				</div>
				<div className='item'></div>
			</div>

			{/* page */}
			<div className='pusher' style={{padding: '25px', marginLeft: '210px'}}>
				
				<div style={{marginBottom: '20px'}}>
					<h1 className='ui block header center'>{views[view]}</h1>
				</div>

				{view === MAIN && <Test1 />}

				{view === USER && <Test2 test="Props Test" />}

			</div>
			</div>
		</div>;
	}
}

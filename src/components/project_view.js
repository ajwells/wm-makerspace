import React from 'react';
import ListProjectView from './list_project_view';
import NewProjectView from './new_project_view';
import UpdateProjectView from './update_project_view';

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
			<div className="ui yellow secondary pointing menu">	
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, MAIN)} className={`item ${isActive(MAIN)}`}>
					List	
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, NEW)} className={`item ${isActive(NEW)}`}>
					New	
				</a>
				<a style={{color: 'white'}} onClick={this.changeView.bind(this, UPDATE)} className={`item ${isActive(UPDATE)}`}>
					Update
				</a>
			</div>
			
			{view === MAIN && <ListProjectView />} 

			{view === NEW && <NewProjectView />} 

			{view === UPDATE && <UpdateProjectView />} 
		</div>;
	}
}

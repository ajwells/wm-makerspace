import React from 'react';
import MemberCard from './membercard';
import MakerspaceBarChart from './makerspace_bar_chart';
import Api from '../api';

var API = new Api();

export default class MakerspaceView extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		var rows = [];

		var view;

		view = <div className="ui grid">
			<div className="twelve wide column">
				<div className="ui yellow segment">
					<MakerspaceBarChart type={'CAD'} />
				</div>
			</div>
			<div className="four wide column">
			</div>
		</div>;
		
		return <div>
			{view}
		</div>;
	}
}

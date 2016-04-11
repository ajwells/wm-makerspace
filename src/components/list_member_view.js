import React from 'react';

class ListItem extends React.Component {
	render() {
		var name = this.props.name;
		var visit = this.props.visit;

		return <tr>
			<td>{name}</td>
			<td>{visit}</td>
		</tr>


	}
}

export default class ListMemberView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		var data = [{name: 'name 1', visit: '1'}, {name: 'name 2', visit: '4'}]
		var rows = [];

		data.forEach(function(data) {
			rows.push(<ListItem name={data.name} visit={data.visit} key={data.name} />)
		});
		
		return <div>
			<table className="ui striped inverted yellow table">
				<thead><tr>
					<th>Member Name</th>
					<th>Visits</th>
				</tr></thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>;
	}
}

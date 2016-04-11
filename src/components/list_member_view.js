import React from 'react';

export default class ListMemberView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
		return <div>
			<table className="ui striped inverted yellow table">
				<thead><tr>
					<th>Member Name</th>
					<th>Visits</th>
				</tr></thead>
				<tbody>
				<tr>
					<td>Name1</td>
					<td>1</td>
				</tr>
				<tr>
					<td>Name2</td>
					<td>4</td>
				</tr>
				</tbody>
			</table>
		</div>;
	}
}

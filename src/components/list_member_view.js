import React from 'react';
import MemberCard from './membercard';


class MemberListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	clicked() {
		this.props.onClick(this.props.id);
	}

	render() {
		var name = this.props.name;
		var visit = this.props.visit;

		return <tr onClick={this.clicked.bind(this)}>
			<td>{name}</td>
			<td>{visit}</td>
		</tr>;


	}
}

export default class ListMemberView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: false
		}
	}

	handleClick(item) {
		this.setState({id: item});
	}

	getSelected(id, data) {
		var selected;
		data.forEach(function(data) {
			if (data.id === id) {
				selected = data;
			}
		});
		return selected;
	}

	render() {

		var data = [{id: '39120321', name: 'name 1', visit: '1'}, {id: '8008231', name: 'name 2', visit: '4'}];
		var rows = [];
		var selected = this.getSelected(this.state.id, data);

		data.forEach(function(data) {
			rows.push(<MemberListItem onClick={this.handleClick.bind(this)} id={data.id} name={data.name} visit={data.visit} key={data.name} />)
		}.bind(this));

		var list;
		var card;
		if (!this.state.id) {
			list = <table className="ui striped inverted yellow table">
				<thead><tr>
					<th>Member Name</th>
					<th>Visits</th>
				</tr></thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		} else {
			card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} />
			list = <div className="ui grid">
				<div className="twelve wide column">
				<table className="ui striped inverted yellow table">
					<thead><tr>
						<th>Member Name</th>
						<th>Visits</th>
					</tr></thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				</div>
				<div className="column four wide column">
					{card}
				</div>
			</div>;
		}
		
		return <div>
			{list}
		</div>;
	}
}

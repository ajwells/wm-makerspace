import React from 'react';
import ProjectCard from './projectcard';
import Api from '../api';

var API = new Api();

class ProjectListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	clicked() {
		this.props.onClick(this.props.data.id);
	}

	render() {
		var id = this.props.data.id;
		var name = this.props.data.name;
		var budget = this.props.data.budget;
		var spent = this.props.data.spent;

		return <tr onClick={this.clicked.bind(this)}>
			<td>{id}</td>
			<td>{name}</td>
			<td>{budget}</td>
			<td>{spent}</td>
		</tr>;


	}
}

export default class ListProjectView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: false,
			data: API.getMemberList()
		}
	}

	componentDidMount() {
		/*var url = API.url + "/memberlist";
		$.ajaxSetup({async:false});
		$.get(url, function(result) {
			this.setState({data : result});
		}.bind(this));
		$.ajaxSetup({async:true});*/
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

		var data = [{id: '39120321', name: 'name 1', budget: '3211', spent: '124'}, {id: '8008231', name: 'name 2', budget: '4', spent: '2'}];
		var rows = [];
		var selected = this.getSelected(this.state.id, data);

		data.forEach(function(data) {
			rows.push(<ProjectListItem onClick={this.handleClick.bind(this)} data={data} key={data.name} />)
		}.bind(this));

		var table = <table className="ui striped inverted yellow table">
			<thead><tr>
				<th>Project ID</th>
				<th>Name</th>
				<th>Budget</th>
				<th>Spent</th>
			</tr></thead>
			<tbody>
				{rows}
			</tbody>
		</table>

		var view;

		if (!this.state.id) {
			view = table
		} else {
			var card = <ProjectCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} />
			view = <div className="ui grid">
				<div className="ten wide column">
					{table}
				</div>
				<div className="one wide column">
				</div>
				<div className="four wide column">
					{card}
				</div>
			</div>;
		}
		
		return <div>
			{view}
		</div>;
	}
}

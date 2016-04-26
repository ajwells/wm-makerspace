import React from 'react';
import MemberCard from './membercard';
import Api from '../api';

var API = new Api();

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

		var data = this.state.data;
		var rows = [];
		var selected = this.getSelected(this.state.id, data);

		data.forEach(function(data) {
			rows.push(<MemberListItem onClick={this.handleClick.bind(this)} id={data.id} name={data.name} visit={data.visit} key={data.name} />)
		}.bind(this));

		var list = <table className="ui striped yellow table">
			<thead><tr>
				<th>Member Name</th>
				<th>Visits</th>
			</tr></thead>
			<tbody>
				{rows}
			</tbody>
		</table>

		var view;

		if (!this.state.id) {
			view = list;
		} else {
			var card = <MemberCard onClick={this.handleClick.bind(this)} id={selected.id} name={selected.name} last_visit={selected.last_visit}/>
			view = <div className="ui grid">
				<div className="ten wide column">
					{list}
				</div>
				<div className="one wide column">
				</div>
				<div className="four wide column">
					<div style={{textAlign: 'center'}}><div sytle={{display: 'inline-block'}}>{card}</div></div>
				</div>
			</div>;
		}
		
		return <div>
			{view}
		</div>;
	}
}

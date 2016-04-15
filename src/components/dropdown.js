import React from 'react';
import $ from 'jquery';

export default class SimpleDropDown extends React.component {

	constructor(props) {
		super(props);
		this.state = {
			value: null
		}
	}

	componentDidMount() {
		$('.ui.selection.dropdown').dropdown({
			dataType:'jsonp',
			apiSettings: {
				onResponse: function(githubResponse) {
					var response = {
						results: []
					};
					$.each(githubResonse.items,  function(index, item) {
						response.results.push({
							name: item.name,
							value: item.id
						});
					});
					return response;
				},
				url: '//api.github.com/search/repositories?q={query}'
			},
			onChange: (value) => {
				this.setState({ value });
			}
		});
	}

	componentDidUpdate() {
		$('.ui.dropdown').dropdown('refresh');
	}

	/*render() {
		return <div>
			<div>
				<h2>Dropdown</h2>
				<div className="ui search selection dropdown">
					<input type="hidden" name="member-ids" />
					<div className="defualt text">Choose ID</div>
					<i className="dropdown icon"></i>
					<div className="menu"></div>
				</div>
			</div>
		</div>
	}*/
}


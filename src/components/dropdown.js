import React from 'react';

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
	}

}


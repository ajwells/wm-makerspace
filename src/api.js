

export default class API {
	
	constructor() {
		this.url = "http://ec2-52-91-5-18.compute-1.amazonaws.com:12000";
	}

	getCounts(type) {
		var link = this.url + '/counts/' + type;
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getUsers(type) {
		var link = this.url + '/makerspace/' + type;
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getMemberInfo(type, id) {
		var link = this.url + '/member/' + type + '/' + id;
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getMemberList() {
		var link = this.url + "/memberlist";
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getProjectInfo(type, id) {
		var link = this.url + '/project/' + type + '/' + id;
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getProjectList() {
		var link = this.url + "/projectlist";
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getInterestList() {
		var link = this.url + "/interestlist";
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}
	
	getDays() {
		var link = this.url + '/day';
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getTimes(type) {
		var link = this.url + '/time/' + type;
		var data;
		$.ajaxSetup({async:false});
		$.get(link, function(result) {
			data = result;
		});
		$.ajaxSetup({async:true});
		return data;
	}

	getImage2(name) {
		var data = `${this.url}/images/${name}`;
		return data;
	}
}

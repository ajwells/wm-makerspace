

export default class API {
	
	constructor() {
		this.url = "http://ec2-52-91-5-18.compute-1.amazonaws.com:12000";
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

	getImage2(name) {
		var data = `${this.url}/images/${name}`;
		return data;
	}
}

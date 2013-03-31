var fs = require('fs');
var _ = require('underscore');

fs.readFile('./companiesold.json', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var oldCompanies = JSON.parse(data);

	var oldPermalinks = oldCompanies.map(function(item, index){
		return item.permalink;
	})

	console.log(oldPermalinks);

	fs.readFile('./companiesnew.json', 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		var newCompanies = JSON.parse(data);

		var newPermalinks = newCompanies.map(function(item, index){
			return item.permalink;
		})

		console.log(newPermalinks);

		var mantener = _.intersection(oldPermalinks, newPermalinks);
		var anadir = _.difference(newPermalinks, oldPermalinks);
		var eliminar = _.difference(oldPermalinks, newPermalinks);

		console.log('MANTENER: ' + mantener);
		console.log('ANADIR: ' + anadir);
		console.log('ELIMINAR: ' + eliminar);
	});
});
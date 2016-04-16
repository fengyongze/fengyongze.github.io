require.config({
	baseUrl: "js/modul",
	paths: {
		house: "house",
		location: "location",
		pageswitch: "pageswitch",
		select: "select"
	}
});
requirejs(["house"], function(house) {
	new house.house();
});
requirejs(["location"], function(location) {
	new location.location();
});
requirejs(["pageswitch"], function(pageswitch) {
	new pageswitch.pageswitch();
});
requirejs(["select"], function(select) {
	new select.select();
});
requirejs(["select"], function(select) {
	new select.selection1Color();
	new select.selection2Color();
});
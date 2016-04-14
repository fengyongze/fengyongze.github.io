define(function() {
	function location() {
		var This = this;
		$(".location").on("click", function() {
			This.locationClick();
		});
		$(".city span").on("click", function() {
			This.cityClick(this);
		});
	}
	location.prototype.locationClick = function() {
		$(".city").toggleClass("hidden");
	};
	location.prototype.cityClick = function(elm) {
		var selectCity = $(elm).text();
		$(".location").text(selectCity);
		$(".city").addClass("hidden");
	};
	return {
		location: location
	};
});
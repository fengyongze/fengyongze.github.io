define(function() {
	function house() {
		var This = this;
		$(".house div").on("mouseover", function() {
			This.mouseIn(this);
		});
		$(".house div").on("mouseout", function() {
			This.mouseOut(this);
		});
		$(".house .up").on("click", function() {
			This.upClick(this);
		});
		$(".house .down").on("click", function() {
			This.downClick(this);
		});
	}
	house.prototype.mouseIn = function(elm) {
		$(elm).children(".up,.down").removeClass("hidden");
	};
	house.prototype.mouseOut = function(elm) {
		$(elm).children(".up,.down").addClass("hidden");
	};
	house.prototype.upClick = function(elm) {
		var num = $(elm).siblings(".num").text();
		num++;
		$(elm).siblings(".num").text(num);
	};
	house.prototype.downClick = function(elm) {
		var num = $(elm).siblings(".num").text();
		num === "0" ? num = 0 : num--;
		$(elm).siblings(".num").text(num);
	};
	return {
		house: house
	};
});
define(function() {
	function pageswitch() {
		var This = this;
		this.width = window.innerWidth;
		window.addEventListener("resize", function() {
			This.Resize();
		}, false);
		this.transform = ["-webkit-transform", "-ms-transform", "-moz-transform", "transform"];
		$("#section0 .go").on("click", function() {
			if (!($("#section0 .square").val() === "")) {
				This.switch(This.width);
			}
		});
		$("#section1 .page2-main div").on("click", function() {
			This.switch(2 * This.width);
		});
		$("#section1 .footer").on("click", function() {
			This.switch(0);
		});
	}
	pageswitch.prototype.isSuportCss = function(property) {
		var body = $("body")[0];
		for (var i = 0; i < property.length; i++) {
			if (property[i] in body.style) {
				return true;
			}
		}
		return false;
	};
	pageswitch.prototype.Resize = function() {
		this.width = window.innerWidth;
	};
	pageswitch.prototype.switch = function(width) {
		if (this.isSuportCss(this.transform)) {
			traslate = "-" + width + "px, 0px, 0px";
		}
		$("#container").css({
			"transform": "translate3d(" + traslate + ")",
		});
	};
	return {
		pageswitch: pageswitch
	};
});
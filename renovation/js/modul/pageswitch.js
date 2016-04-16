define(function() {
	function pageswitch() {
		var This = this;
		this.width = window.innerWidth;
		$(window).on("resize", function() {
			This.Resize();
		});
		this.transform = ["-webkit-transform", "-ms-transform", "-moz-transform", "transform"];
		$("#section0 .go").on("click", function() {
			if (!($("#section0 .square").val() === "")) {
				This.Switch(This.width, "#section0", "#section1");
			} else {
				$(".area .square").addClass("error");
			}
			$(".page2-main .circle").addClass("roll");
		});
		$("#section1 .page2-main div").on("click", function() {
			This.Switch(2 * This.width, "#section1", "#section2");
			$(".page2-main .circle").removeClass("roll");
			$(".page3-main .circle").addClass("roll");
		});
		$("#section1 .back").on("click", function() {
			This.Switch(0, "#section1", "#section0");
			$(".page2-main .circle").removeClass("roll");
		});
		$("#section2 .back").on("click", function() {
			This.Switch(This.width, "#section2", "#section1");
			$(".page2-main .circle").addClass("roll");
			$(".page3-main .circle").removeClass("roll");
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
	pageswitch.prototype.Switch = function(width, dom1, dom2) {
		if (this.isSuportCss(this.transform)) {
			traslate = "-" + width + "px, 0px, 0px";
		}
		$("#section0 .city").addClass("hidden");
		if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
			$(dom1).addClass("hidden");
			$(dom2).removeClass("hidden");
		} else {
			$("#container").css({
				"transform": "translate3d(" + traslate + ")",
			});
		}
	};
	return {
		pageswitch: pageswitch
	};
});
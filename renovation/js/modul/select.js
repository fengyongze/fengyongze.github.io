define(function() {
	function Select() {
		$("#section0 .go").on("click", function() {
			$("#section1 .square,#section2 .square").text($("#section0 .square").val());
			$("#section1 .room,#section2 .room").text($("#section0 .room").text());
			$("#section1 .hall,#section2 .hall").text($("#section0 .hall").text());
			$("#section1 .kitchen,#section2 .kitchen").text($("#section0 .kitchen").text());
			$("#section1 .toilet,#section2 .toilet").text($("#section0 .toilet").text());
		});
		$("#section1 .page2-main div").on("click", function() {
			$("#section2 .style").text($(this).text());
		});
	}
	return {
		select: Select
	};
});
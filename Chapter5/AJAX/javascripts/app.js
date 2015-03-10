var main = function () {
	"use strict";
	// getJSON even parses the JSON for us, so we don't need to
	// call JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
		var $cardParagraph = $("<p>");

		$cardParagraph.text(card.rank + " of " + card.suit);

		$("main").append($cardParagraph);
	});

	$.getJSON("cards/hand.json", function (hand) {
		var $cardList = $("<ul>");

		hand.forEach(function(card){
			var $cardLi = $("<li>");
			$cardLi.text(card.rank + " of " + card.suit);
			$cardList.append($cardLi);
		});

		$("main").append($cardList);
	});
}

$(document).ready(main);
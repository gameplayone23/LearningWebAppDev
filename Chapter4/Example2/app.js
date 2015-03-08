var main = function (){
	"use strict";

	// Execution d'une fonction lors du clic sur le bouton
	$(".comment-input button").on("click", function(event){
		$(".comments").append("<p>this is a new content</p>");
	});
};

$(document).ready(main);
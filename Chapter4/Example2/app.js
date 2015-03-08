var main = function (){
	"use strict";

	// Execution d'une fonction lors du clic sur le bouton
	$(".comment-input button").on("click", function(event){
		console.log("Hello World");
	});
};

$(document).ready(main);
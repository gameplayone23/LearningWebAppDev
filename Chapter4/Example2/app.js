var main = function (){
	"use strict";

	var addCommentFormInputBox = function(){
		var $new_comment;

		if ( $(".comment-input input").val() !== "" ) {
			$new_comment= $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			 // Remise à zéro de l'input apres ajout
			 $(".comment-input input").val("");
		};
	}

	// Execution d'une fonction lors du clic sur le bouton
	$(".comment-input button").on("click", function(event){
		addCommentFormInputBox();
	});

	// Execution d'un fonction lorsque le user fait "enter"
	$(".comment-input input").on("keypress", function (event) {
		if ( event.keyCode == 13) {
			addCommentFormInputBox();
		};
	});
};

$(document).ready(main);
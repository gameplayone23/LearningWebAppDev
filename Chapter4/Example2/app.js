var main = function (){
	"use strict";

	// Execution d'une fonction lors du clic sur le bouton
	$(".comment-input button").on("click", function(event){
		// Creation d'une nouvelle variable contenant la code html à ajouter
		// $("<p>") permet de créer un objet de type paragraphe
		// la fonction val permet d'obtenir le contenu d'un objet de type input box
		var $new_comment;

		if ( $(".comment-input input").val() !== "" ) {
			 $new_comment= $("<p>").text($(".comment-input input").val());
			 $(".comments").append($new_comment);
			 // Remise à zéro de l'input apres ajout
			 $(".comment-input input").val("");
		};
	});
};

$(document).ready(main);
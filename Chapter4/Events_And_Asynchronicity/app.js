// Illustration d'une execution asynchrone
// la log du clic arrive apres les logs du scripts
var main1 = function(){
	"use strict";

	console.log("premier");

	$("button").on("dblclick",function(){
		console.log("double clic");
	});
	console.log("second");
};


// Autre exemple avec les timings : chargement du script, quand la page est chargée et apres un timer
var main2 = function(){
	"use strict";

	console.log("print quand le document est ready");
};

var main3 = function(){
	"use strict";
	// Creation d'une div cachée
	var $content = $("<div>Hello World !</div>").hide();
	var $moreContent = $("<div>Goodbye World !</div>").hide();
	// Ajout de la div dans le body
	$("body").append($content);
	$("body").append($moreContent);
	// Affiche progressif de la div de haut en bas
	$content.slideDown(2000, function(){
		// Affiche de la second div par fondu une fois la premiere affichée entièrement
		// Notion de callback
		$moreContent.fadeIn();
	});
};

$(document).ready(main3);

// utilisation d'un timer
setTimeout(function(){
	console.log("print apres 3 secondes");
}, 3000);

// log sans timing
console.log("print en premier");
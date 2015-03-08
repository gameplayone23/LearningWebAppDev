// Creation d'un fonction main
var main = function () {
	// Toujours mettre en premiere ligne d'une fonction cette commande :
	"use strict";
	// Example de popup
	window.alert("hello world!");
};
// Execution de la fonction via Jquery lors la page HTML est chargée
$(document).ready(main);

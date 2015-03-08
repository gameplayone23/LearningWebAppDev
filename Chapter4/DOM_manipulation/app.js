var main = function(){
	"use strict";
	// Creation de nouveaux éléments :
	var $newUl = $("<ul>");
	var $newPara = $("<p>").text("insertion d'un paragraphe via append!");

	var $listItemOne = $("<li>").text("premier li");
	var $listItemTwo = $("<li>").text("deuxieme li");
	var $listItemThree = $("<li>").text("troisieme li");

	// Ajout du nouveau paragraphe au footer via append
	$("footer").append($newPara);

	// Ajout des li aux ul
	$newUl.append($listItemOne);
	$newUl.append($listItemTwo);
	$newUl.append($listItemThree);

	// ajout de la liste au main
	$("main").append($newUl);

	// Ajout d'un paragraphe en first child du noeud parent via prepend
	var $footerFirstChild = $("<p>").text("insertion en premier via prepend");
	$("footer").prepend($footerFirstChild);

	// Suppression d'un élément
	$("ul li:first-child").remove();

	// Vider un élement
	$newUl.empty();

	// faire disparaitre un element sans le supprimer
	$("footer p").fadeOut();
}

$(document).ready(main);
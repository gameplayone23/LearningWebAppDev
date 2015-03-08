var main = function () {
	"use strict";

	var toDos=[
		"Get Groceries",
		"Make some new Todos",
		"Prep for Monday's class",
		"Answer recruiter emails on Linkedin",
		"Take Gracie to the park",
		"Finish writing book"
	];

	var addTodo = function(){
		var $new_comment;

		if ( $(".content input").val() !== "" ) {
			toDos.push($(".content input").val());
			 // Remise à zéro de l'input apres ajout
			 $(".content input").val("");
		};
	}

	$(".tabs a span").toArray().forEach(function (element) {
		// create a click handler for this element
		$(element).on("click", function () {
			// since we're using the jQuery version of element,
			// we'll go ahead and create a temporary variable
			// so we don't need to keep recreating it
			var $element = $(element),
				$content,
				$input,
				$button,
				i;
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {

				console.log("FIRST TAB CLICKED!");
				$content = $("<ul>");
			  	for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }

			} else if ($element.parent().is(":nth-child(2)")) {

				console.log("SECOND TAB CLICKED!");
				$content = $("<ul>");
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});

			} else if ($element.parent().is(":nth-child(3)")) {

				console.log("THIRD TAB CLICKED!");
				$input = $("<input>");
				$button = $("<button>").text("+");
				$("main .content").append($input);
				$("main .content").append($button);

				$(".content button").on("click", function(){
					addTodo();
					$(".tabs a:first-child span").trigger("click");
				});
			}
			$("main .content").append($content);
			return false;
		});
	});

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
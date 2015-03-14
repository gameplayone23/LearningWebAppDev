var main = function (toDoObjects) {
	"use strict";

	var toDos = toDoObjects.map(function (toDo) {
		// we'll just return the description
		// of this toDoObject
		return toDo.description;
	});

	var addTodo = function(){
		var $new_comment;

		if ( $(".content input").val() !== "" ) {
			toDos.push($(".content input").val());
			 // Remise à zéro de l'input apres ajout
			 $(".content input").val("");
		};
	}

	var organizeByTags = function (toDoObjects) {
		// create an empty tags array
		var tags = [];
		// iterate over all toDos
		toDoObjects.forEach(function (toDo) {
			// iterate over each tag in this toDo
			toDo.tags.forEach(function (tag) {
				// make sure the tag is not already
				// in the tag array
				if (tags.indexOf(tag) === -1) {
					tags.push(tag);
				}
			});
		});

		var tagObjects = tags.map(function (tag) {
			// here we find all the to-do objects
			// that contain that tag
			var toDosWithTag = [];
			toDoObjects.forEach(function (toDo) {
				// check to make sure the result
				// of indexOf is *not* equal to -1
				if (toDo.tags.indexOf(tag) !== -1) {
					toDosWithTag.push(toDo.description);
				}
			});
			// we map each tag to an object that
			// contains the name of the tag and an array
			return { "name": tag, "toDos": toDosWithTag };
		});
		
		return tagObjects;

	};

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

				var toDoObjectsOrganized = organizeByTags(toDoObjects);

				toDoObjectsOrganized.forEach(function (tag) {
					var $tagName = $("<h3>").text(tag.name),
					$content = $("<ul>");

					tag.toDos.forEach(function (description) {
						var $li = $("<li>").text(description);
						$content.append($li);
					});
					
					$("main .content").append($tagName);
					$("main .content").append($content);
				});

			}else if ($element.parent().is(":nth-child(4)")) {

				console.log("FOURTH TAB CLICKED!");
				var $input = $("<input>").addClass("description"),
					$inputLabel = $("<p>").text("Description: "),
					$tagInput = $("<input>").addClass("tags"),
					$tagLabel = $("<p>").text("Tags: "),
					$button = $("<button>").text("+");

					$("main .content").append($inputLabel);
					$("main .content").append($input);
					$("main .content").append($tagLabel);
					$("main .content").append($tagInput);
					$("main .content").append($button);

				$button.on("click", function () {
					var description = $input.val(),
						tag = $tagInput.val();

					if ( description !== "" && tag !== "") {
						// split on the comma
						var tagsArray = tag.split(",");
						toDoObjects.push({"description":description, "tags":tagsArray});
						// update toDos
						toDos = toDoObjects.map(function (toDo) {
							return toDo.description;
						});
						$input.val("");
						$tagInput.val("");
					}
				});
			}
			$("main .content").append($content);
			return false;
		});
	});

$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function(){
	$.getJSON("todos.json", function(toDoObjects){
		main(toDoObjects);
	});
});
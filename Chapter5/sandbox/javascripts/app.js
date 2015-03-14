var toDoObjects = [
	{
		"description" : "Get groceries",
		"tags" : [ "shopping", "chores" ]
	},
	{
		"description" : "Make up some new ToDos",
		"tags" : [ "writing", "work" ]
	},
	{
		"description" : "Make up some new ToDos2",
		"tags" : [ "writing", "work" ]
	}
];

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
	console.log(tagObjects);

};

var main = function(){
	'use scricts';

	organizeByTags(toDoObjects);
	
};

$(document).ready(main);
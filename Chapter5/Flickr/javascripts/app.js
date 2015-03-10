var main = function () {
	'use stricts';
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
		"tags=cats&format=json&jsoncallback=?";

	$.getJSON(url,function(flickrResponse){
		console.log(flickrResponse);
		flickrResponse.items.forEach(function(photo){
			console.log(photo.media.m);

			var $photoImg = $('<img>').hide();
			$photoImg.attr("src",photo.media.m);
			$("main .photos").append($photoImg);
			$photoImg.fadeIn();

		});
	});
};

$(document).ready(main);
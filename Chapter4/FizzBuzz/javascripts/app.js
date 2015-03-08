/*Write a program that prints the numbers from 1 to 100. But for multiples of three print
“Fizz” instead of the number and for the multiples of five print “Buzz.” For numbers which
are multiples of both three and five print “FizzBuzz.”*/

var main = function(){
	"use strict";

	var $para;

	for (var i = 1; i <= 100; i++) {
		console.log(i);
		if (i%3===0 && i%5===0) {
			$para = $('<p>').text("FizzBuzz");
		}else if(i%3===0){
			$para = $('<p>').text("Fizz");
		}else if(i%5===0){
			$para = $('<p>').text("Buzz");
		}else{
			$para = $('<p>').text(i);
		}
		$("main .container").append($para);
	};
};

$(document).ready(main);
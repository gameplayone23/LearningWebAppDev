var main = function () {
	'use strict';

 	var monArray = [48,52,54];

 	var additionFunction = function(mesNombres){
 		var total = 0;
 		mesNombres.forEach(function(nombre){
 			total = total + nombre;
 		});
 		return total;
 	};

 	alert(additionFunction(monArray));

};

$(document).ready(main);
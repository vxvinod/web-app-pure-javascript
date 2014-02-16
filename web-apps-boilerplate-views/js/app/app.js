 define([
 	'app/views/app'
 	],function(Appview){
 		'user strict';
 		 	
 		var initialize = function(){
 			var appView = new Appview;
 			$('body').append(appView.el);
 		};
 		return{
 			initialize: initialize,
 			}
 });
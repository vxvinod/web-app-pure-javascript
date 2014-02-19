 define([
 	'app/views/app',
 	'app/routers/router'
 	],function(Appview,Router){
 		'use strict';
 		 	
 		var initialize = function(){
 			var appView = new Appview;
 			$('body').append(appView.el);
 			var router = new Router(appView);
 			Backbone.history.start();  //initialize to monitor the URL
 		};
 		return{
 			initialize: initialize,
 			}
 });
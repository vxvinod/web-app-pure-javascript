 define([
 	'jquery',
 	'bootstrap'
 	],function($,bootstrap){
 		'user strict';
 		var id ="content";

 		var getId = function(){
 			return id;
 		};

 		var initialize = function(){
 			alert("init");
 			$('body').append('<div id ="'+id+'"></div>');
 		};

 		var getTimeString = function(){
 			var date = new Date();
 			return [date.getHours(),':',date.getMinutes()].join(''); 
 		};

 		var displayTime = function(){
 			var html =[
 					'<div class = "alert">',
 						'<button type="button" class="close" data-dismiss="alert">&times:</button>',
 						'The time is:',
 						getTimeString(),
 						'</div>'
 					].join('');
 					alert("time");
 					$('#'+id).html(html);
 		};
 		return{
 			initialize: initialize,
 			displayTime:displayTime,
 			getId: getId
 		}
 });
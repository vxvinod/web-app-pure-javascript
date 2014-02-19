define([
	'jquery',
	'underscore',
	'backbone'
	], function(){
		'use strict';
		
		var Router = Backbone.Router.extend({
			routes:{
				'':'gotTODash',
				'dash':'gotTODash',
				'dash/:place':'gotTODash',
				'about':'gotTOAbout'
			},

			initialize:function(view){
				this.AppView = view;
			},

			gotTODash:function(place){
				this.AppView.setPage('dash');
				if (place){
					alert("weather is " + place);
				}
			},


			gotTOAbout:function(){
				this.AppView.setPage('about');
			}

		});

		return Router;
	});
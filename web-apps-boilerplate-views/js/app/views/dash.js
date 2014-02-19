define([
	'jquery',
	'underscore',
	'backbone'
],function($, _,Backbone){
	'use script';
	
	var DashView = Backbone.View.extend ({
		
		intialize:function(){

		},

		events:{

		},

		render:function(){
			var html ="<h3>Dashboard View</h3>";
			this.$el.html(html);
			return this;
		}
	});

	return DashView;
});
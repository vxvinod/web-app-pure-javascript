define([
	'jquery',
	'underscore',
	'backbone'
],function($, _,Backbone){
	'use script';
	
	var AboutView = Backbone.View.extend ({
		
		intialize:function(){

		},

		events:{

		},

		render:function(){
			var html ="<h3>About View</h3>";
			this.$el.html(html);
			return this;
		}
	});

	return AboutView;
});
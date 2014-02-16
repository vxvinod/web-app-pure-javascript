define([
	'jquery',
	'underscore',
	'backbone'
],function($, _,Backbone){
	'use script';
	
	var CounterView = Backbone.View.extend ({
		counter : 0 ,
		intialize:function(){

		},

		events:{
			'click span' : 'incrCounter',
			'click strong':'removeTxt'
		},

		render:function(){
			var html ="<h3>this nav has been <span> clicked </span> "+this.counter+" times <strong>Remove</strong></h3>";
			this.$el.html(html);
			return this;
		},

		incrCounter:function(e){
			this.counter++;
			this.render();
		},

		removeTxt:function(e){
			this.remove();
		}
	});

	return CounterView;
});
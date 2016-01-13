var app = app || {};

app.HomeView = Backbone.View.extend({
	el : '.page',
	
	initialize:  function(){
		var self = this;
		console.log('HomeView initialize()');
		//initial render 
		self.render();	
	},
	
	render: function(){
		var template = Handlebars.compile($("#home-template").html());
		this.$el.html(template);
		return this;
	}
});
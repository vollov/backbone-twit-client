var app = app || {};

app.AboutView = Backbone.View.extend({
	el : '.page',
	
	initialize:  function(){
		var self = this;
		console.log('AboutView initialize()');
		//initial render 
		self.render();	
	},
	
	render: function(){
		var template = _.template($('#about-template').html());
		this.$el.html(template);
		return this;
	}
});

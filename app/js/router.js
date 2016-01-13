var app = app || {};


app.AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'sayHello',
		'service': 'service',
		'about': 'about'
	},
	
	initialize:  function(){
		console.log('AppRouter initialize()');
		var self = this; 
	},
	sayHello: function(){
		console.log('hello in router');
	},
//	
//	about: function(){
//		console.log('about in router');
//	},
//	service: function(){
//		console.log('service in router');
//		
//	},
	
});

var homeView = new app.HomeView({});
var serviceView = new app.ServiceView({});
var aboutView = new app.AboutView({});

var router = new app.AppRouter;

router.on('route:sayHello', function() {	
	homeView.render();
});

router.on('route:service', function() {
	
	serviceView.render();
});

router.on('route:about', function() {
	
	aboutView.render();
})

Backbone.history.start();
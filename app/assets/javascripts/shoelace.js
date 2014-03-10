window.Shoelace = {
	Views: {},
	Routers: {},

	initialize: function(){
		var navbar = new Shoelace.Views.ShoelaceNavbar
		$('#navbar').html(navbar.render().$el)
		new Shoelace.Routers.Router({
			$rootEl: $('#page')
		});
		Backbone.history.start();
	}
}
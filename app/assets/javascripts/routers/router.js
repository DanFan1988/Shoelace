Shoelace.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "home",
		"buttons": "buttons"
	},

	home: function(){
		var view = new Shoelace.Views.Home
		this._swapView(view)
	},

	buttons: function(){
		var view = new Shoelace.Views.Buttons
		this._swapView(view)
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view
		this.$rootEl.html(view.render().$el)
	}
})
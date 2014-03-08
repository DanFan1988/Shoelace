Shoelace.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "home"
	},

	home: function(){
		var view = new Shoelace.Views.Home
		this._swapView(view)
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view
		this.$rootEl.html(view.render().$el)
	}
})
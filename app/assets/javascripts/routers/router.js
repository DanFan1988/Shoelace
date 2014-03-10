Shoelace.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "home",
		"buttons": "buttons",
		"tabs": "tabs",
		"tables": "tables",
		"forms": "forms",
		"dropdowns": "dropdowns",
		"navbar": "navbar",
		"modals": "modals",
		"carousel": "carousel"
	},

	home: function(){
		var view = new Shoelace.Views.Home
		this._swapView(view)
	},

	buttons: function(){
		var view = new Shoelace.Views.Buttons
		this._swapView(view)
	},

	forms: function(){
		var view = new Shoelace.Views.Forms
		this._swapView(view)
	},

	tables: function(){
		var view = new Shoelace.Views.Tables
		this._swapView(view)
	},

	tabs: function(){
		var view = new Shoelace.Views.Tabs
		this._swapView(view)
	},

	dropdowns: function(){
		var view = new Shoelace.Views.Dropdowns
		this._swapView(view)
	},

	modals: function(){
		var view = new Shoelace.Views.Modals
		this._swapView(view)
	},

	carousel: function(){
		var view = new Shoelace.Views.Carousel
		this._swapView(view)
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view
		this.$rootEl.html(view.render().$el)
	}
})
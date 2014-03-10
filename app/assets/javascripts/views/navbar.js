Shoelace.Views.ShoelaceNavbar = Backbone.View.extend({
	template: JST['shoelace_navbar'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
});
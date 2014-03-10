Shoelace.Views.Navbar = Backbone.View.extend({
	template: JST['components/navbar'],

	render: function(){
		this.$el.html(this.template);
		return this;
	}
})
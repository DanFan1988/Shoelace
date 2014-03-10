Shoelace.Views.Carousel = Backbone.View.extend({
	template: JST['javascript/carousel'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
});
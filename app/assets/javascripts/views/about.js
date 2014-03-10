Shoelace.Views.About = Backbone.View.extend({
	template: JST['about'],

	render: function(){
		this.$el.html(this.template);
		return this;
	}
});
Shoelace.Views.Home = Backbone.View.extend({
	template: JST['home'],

	render: function(){
		this.$el.html(this.template);
		return this;
	}
});
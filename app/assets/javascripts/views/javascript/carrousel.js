Shoelace.Views.Carrousel = Backbone.View.extend({
	template: JST['javascript/carrousel'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
});
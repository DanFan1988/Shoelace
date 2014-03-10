Shoelace.Views.Modals = Backbone.View.extend({
	template: JST['javascript/modals'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
});
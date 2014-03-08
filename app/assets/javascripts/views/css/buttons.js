Shoelace.Views.Buttons = Backbone.View.extend({
	template: JST['css/buttons'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
})
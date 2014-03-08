Shoelace.Views.Tabs = Backbone.View.extend({
	template: JST['components/tabs'],

	render: function(){
		this.$el.html(this.template);
		return this;
	}
})
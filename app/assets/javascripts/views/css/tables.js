Shoelace.Views.Tables = Backbone.View.extend({
	template: JST['css/tables'],

	render: function(){
		this.$el.html(this.template)
		return this;
	}
});
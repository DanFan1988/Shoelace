Shoelace.Views.Forms = Backbone.View.extend({
	template: JST['css/forms'],

		render: function(){
		this.$el.html(this.template)
		return this;
	}
});
Shoelace.Views.Forms = Backbone.View.extend({
	template: JST['css/forms'],

	events: {
		"submit": "prevent"
	},

	render: function(){
	this.$el.html(this.template)
	return this;
	},

	prevent: function(event){
		event.preventDefault();
	}
});
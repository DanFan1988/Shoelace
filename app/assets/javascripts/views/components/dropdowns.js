Shoelace.Views.Dropdowns = Backbone.View.extend({
	template: JST['components/dropdowns'],

	events: {
		"click a": "prevent"
	},

	render: function(){
		this.$el.html(this.template);
		return this;
	},

	prevent: function(event){
		event.preventDefault();
	}
})
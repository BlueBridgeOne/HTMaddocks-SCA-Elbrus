/*BB1 G Truslove July 2017*/
define('Brands.List.View', [
'Profile.Model'
	,	'SC.Configuration',
	'Backbone', 'brands_list.tpl', 'brands_main.tpl', 'Backbone.CollectionView', 'Backbone.CompositeView', 'Brands.Details.View', 'Brands.Main.View'
], function(	ProfileModel
	,	Configuration,Backbone, brands_list_tpl, brands_main_tpl, CollectionView, CompositeView, BrandsDetailsView, BrandsMainView) {
	return Backbone.View.extend({
	title:"Brands",
		initialize: function(options) {
			CompositeView.add(this);
			this.application = options.application;
			this.collection = options.collection;
			this.category = options.category;
			if (options.category) {
			var cat=(options.category=="0"?"0-9":(options.category||''));
				this.template = brands_list_tpl;
				this.title="Brands Beginning With '"+cat+"'"
			} else {
				this.template = brands_main_tpl;
			}
			var self = this;
			ProfileModel.getPromise().done(function()
			{
				self.render();
			});
		},
		childViews: {
			'Brands.Collection': function() {
				if (this.category) {
				return new CollectionView({
						'childView': BrandsDetailsView,
						'collection': this.collection,
						'viewsPerRow': 1
					});
				} else {
					return new CollectionView({
						'childView': BrandsMainView,
						'collection': this.collection,
						'viewsPerRow': 1
					});
				}
			}
		},
		getBreadcrumbPages: function() {
			var crumbs = [{
				text: 'Brands',
				href: '/Brands'
			}]
			if (this.category) {
				crumbs.push({
					text: this.category,
					href: '/Brands/' + this.category
				});
			}
			return crumbs;
		},
		getContext: function() {

var cat=(this.category=="0"?"0-9":(this.category||''));
			return {
				category: cat,
				categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0 - 9']
			};
		},
		template:brands_list_tpl
	});
});
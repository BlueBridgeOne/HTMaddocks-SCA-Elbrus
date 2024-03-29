/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module CMSadapter
define(
	'CMSadapter.Page.Router'
,	[
		'CMSadapter.Landing.View'
	,	'CMSadapter.Page.Collection'
	,	'Backbone'
	]
,	function (
		View
	,	Collection
	,	Backbone
	)
{
	'use strict';

	// @class CMSadapter.Page.Router @extends Backbone.Router
	return Backbone.Router.extend({

		routes: {}

	,	initialize: function (application, collection)
		{
			this.application = application;
			this.allPages = collection;
			this.landingPages = new Collection(collection.filter(function(page)
			{
				return page.get('type') === 1;
			}) || []);

			var self = this;

			this.landingPages.each(function(landing_page)
			{
				self.route(landing_page.get('url') + '?*options', 'displayLandingPage');
				self.route(landing_page.get('url'), 'displayLandingPage');
			});
		}

		// @method displayLandingPage uses the DataModels.loadPage to load the data and create the model
	,	displayLandingPage: function (options)
		{

			var page = this.getPageForFragment();

			var view = new View({
				application: this.application
			,	model: page
			,	options: options
			});

			view.showContent();
			Backbone.Events.trigger('adapter:page:changed');
		}

		// @method getPageForFragment TODO: this is a handcrafted method for getting the page model given a url. Consider using CMS api for this.
	,	getPageForFragment: function (fragment, allPages)
		{
			fragment = fragment || Backbone.history.fragment || '/';
			fragment = fragment.split('?')[0]; //remove options

			var collection = allPages ? this.allPages : this.landingPages;
			return collection.find(function(page)
			{
				return page.get('url') === fragment;
			});
		}

	,	addLandingRoute: function (page, originalUrl)
		{
			var originalPage = this.getPageForFragment(originalUrl || page.url);

			if (originalPage)
			{
				this.landingPages.remove(originalPage);
			}

			this.route(page.url, 'displayLandingPage');
			this.landingPages.add(page);
		}
	});
});

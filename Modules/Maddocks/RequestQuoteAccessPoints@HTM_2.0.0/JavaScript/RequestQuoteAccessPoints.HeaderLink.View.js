/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove Jun 2017
*/

//@module RequestQuoteAccessPoints
define('RequestQuoteAccessPoints.HeaderLink.View', [
	'Profile.Model',
	'SC.Configuration',
	'requestquote_accesspoints_headerlink.tpl'

	, 'Backbone'
], function(
	ProfileModel,
	Configuration,
	requestquote_accesspoints_headerlink_tpl

	, Backbone
) {
	'use strict';

	//@class RequestQuoteAccessPoints.HeaderLink.View @extend Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: requestquote_accesspoints_headerlink_tpl,
		initialize: function() {
			var self = this;
			ProfileModel.getPromise().done(function() {
				self.render();
			});
		}

		//@method getContext
		//@return {RequestQuoteAccessPoints.HeaderLink.View.Context}
		,
		getContext: function() {
			//BB1 GT show hide login classes
			var profile = ProfileModel.getInstance(),
				is_loading = !_.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) &&  ProfileModel.getPromise().state() !== 'resolved',
				is_loged_in = profile.get('isLoggedIn') === 'T'  && profile.get('isGuest') === 'F';

			//@class RequestQuoteAccessPoints.HeaderLink.View.Context
			return {
				login: is_loged_in,
				//@property {Boolean} hasClass
				hasClass: !!this.options.className
					//@property {String} className
					,
				className: this.options.className
			};
			//@class RequestQuoteAccessPoints.HeaderLink.View
		}
	});
});
/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/* global CMS: false */
/*

@module CMSadapter
@class CMSadapterImpl.Core the class that has the core integration using the CMS API.
*/

define('CMSadapterImpl.Core', [
	'Profile.Model',
	'underscore', 'Backbone', 'SC.Configuration'
], function(
	ProfileModel,
	_, Backbone, Configuration
) {
	'use strict';

	function AdapterCore(application, CMS) {
		this.CMS = CMS;
		this.application = application;

		this.init();
		this.listenForCMS();
	}

	_.extend(AdapterCore.prototype, {

		init: function() {


				if (!SC.isPageGenerator()&&!SC.ENVIRONMENT.startLoggedIn && document.location.href.indexOf("/Products") > -1 && SC.ENVIRONMENT.SCTouchpoint == "shopping") {
					//alert("Redirect to Login "+SC.ENVIRONMENT.startLoggedIn);
					document.location.href = SC.ENVIRONMENT.siteSettings.touchpoints.login + "&l=4&redirect=Products";
					throw ("Redirect to Login");
				}

				var self = this;

				this.application.getLayout().on('afterAppendView', function() {
					self.CMS.trigger('adapter:page:changed');
				});

				this.CMS.trigger('adapter:ready');
			}

			,
		listenForCMS: function() {
				// CMS listeners - CMS tells us to do something, could fire anytime.
				var self = this;

				self.CMS.on('adapter:get:setup', function() {
					var setup = self.getSetupOptions(); // Config values the adapter can give the cms on startup. Currently nothing is used (cms ignores values).
					CMS.trigger('adapter:got:setup', setup);
				});

				self.CMS.on('adapter:get:context', function() {
					var context = self.getCmsContext();
					self.CMS.trigger('adapter:got:context', context);
				});
			}

			,
		getSetupOptions: function() {
				return {
					esc_to_login_disabled: Configuration.get('cms.escToLoginDisabled') || false,
					features: [
						'landingPages', 'categories'
					]
				};
			}

			,
		getCmsContext: function() {
			var url = Backbone.history.fragment.split('?')[0],
				path = url[0] === '/' ? url : '/' + url;

			//console.log(url+" "+path);

			var profile = ProfileModel.getInstance(),
				is_loading = !_.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) &&  ProfileModel.getPromise().state() !== 'resolved',
				is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';



			if (!SC.isPageGenerator() && !SC.ENVIRONMENT.startLoggedIn && url == "Products" && SC.ENVIRONMENT.SCTouchpoint == "shopping") {
				document.location.href = SC.ENVIRONMENT.siteSettings.touchpoints.login + "&l=3&redirect=Products";
				throw ("Redirect to Login");
			} else {
				var context = {
					path: path,
					site_id: this.application.getConfig('siteSettings.siteid'),
					page_type: this.application.getLayout().currentView ? this.application.getLayout().currentView.el.id : ''
				};

				return context;
			}
		}
	});

	return AdapterCore;
});
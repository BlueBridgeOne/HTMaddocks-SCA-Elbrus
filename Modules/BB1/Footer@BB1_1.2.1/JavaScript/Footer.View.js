/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Footer
define(
	'Footer.View'
,	[
'Profile.Model',
		'SC.Configuration'
	,	'GlobalViews.BackToTop.View'

	,	'footer.tpl'

	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'jQuery'
	,	'Utils'
	]
,	function (
ProfileModel,
		Configuration
	,	GlobalViewsBackToTopView

	,	footer_tpl

	,	Backbone
	,	BackboneCompositeView
	,	jQuery
	,	Utils
	)
{
	'use strict';

	// @class Footer.View @extends Backbone.View
	return Backbone.View.extend({

		template: footer_tpl

	,	initialize: function (options)
		{
			/*'#main-container'*/
			this.application = options.application;

			BackboneCompositeView.add(this);

			//after appended to DOM, we add the footer height as the content bottom padding, so the footer doesn't go on top of the content
			//wrap it in a setTimeout because if not, calling height() can take >150 ms in slow devices - forces the browser to re-compute the layout.
			this.application.getLayout().on('afterAppendToDom', function ()
			{
				var headerMargin = 25;

				setTimeout(function ()
				{
					// TODO REMOVE this HARDCODED Ids!, this parameters should be pass in by each specific layout, for this the header and footer SHOULD BE removed from the
					// ApplicationSkeleton.Layout as this is generic and should not have any concrete view
					var contentHeight = jQuery(window).innerHeight() - jQuery('#site-header')[0].offsetHeight - headerMargin - jQuery('#site-footer')[0].offsetHeight;
  					jQuery('#main-container').css('min-height', contentHeight);
				},10);
			});
var self=this;
ProfileModel.getPromise().done(function() {
					self.render();
				});
		}

	,	childViews: {
			'Global.BackToTop': function ()
			{
				return new GlobalViewsBackToTopView();
			}
		}

		// @method getContext @return {Footer.View.Context}
	,	getContext: function ()
		{
		var profile = ProfileModel.getInstance(),
					is_loading = !Configuration.get('performance.waitForUserProfile', true) && ProfileModel.getPromise().state() !== 'resolved',
					is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';
			var footerNavigationLinks = this.checkLinks(is_loged_in, SC.ENVIRONMENT.currentLanguage.locale,Configuration.get('footer.navigationLinks', []));

			// @class Footer.View.Context
			return {
				// @property {Boolean} showLanguages
				showFooterNavigationLinks: !!footerNavigationLinks.length
				// @property {Array<Object>} footerNavigationLinks - the object contains the properties name:String, href:String
			,	footerNavigationLinks: footerNavigationLinks
			};
			// @class Footer.View
		},
			getDomain: function(url) { //Get the domain in the url.
				var index = url.indexOf(".");
				var char = ['/', '?', '#'];
				var end = -1,
					pos;
				for (var i = 0; i < char.length; i++) {
					pos = url.indexOf(char[i], index);
					if (pos > -1 && (end==-1||pos < end)) {
						end = pos;
					}
				}
				if (end == -1) {
					return url;
				}
				return url.substring(0, end);
			},checkLinks: function(login, locale, links) {
				if (links) {

				var sessionParams = Utils.getSessionParams(SC.ENVIRONMENT.siteSettings.touchpoints.home);
				var domain = this.getDomain(SC.ENVIRONMENT.siteSettings.touchpoints.home);

					for (var i = 0; i < links.length; i++) {

					if (!Utils.isShoppingDomain()) {
							if (!links[i].oldhref) {
								links[i].oldhref = links[i].href;
							}
							links[i].href = domain+links[i].oldhref;
							if(sessionParams.ck){
links[i].href+="?ck="+sessionParams.ck;
							}
							if(sessionParams.cktime){
links[i].href+="&cktime="+sessionParams.cktime;
							}
						}

						if (links[i].requireslogin) {
							links[i].show = login;
						} else {
							links[i].show = true;
						}
						if (links[i].language && links[i].language.length > 0 && locale && locale.length > 0) {
							if (links[i].language != locale) {
								links[i].show = false;
							}
						}
						if (links[i].links) {
							this.checklinks(login, locale, links[i].links);
						}
					}
				}
				return links;
			}
	});
});

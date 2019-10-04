/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Header
define(
	'Header.Menu.View', [
		'Profile.Model', 'SC.Configuration', 'Header.Profile.View', 'Header.Menu.MyAccount.View', 'GlobalViews.HostSelector.View', 'GlobalViews.CurrencySelector.View'

		, 'header_menu.tpl'

		, 'Backbone', 'Backbone.CompositeView', 'underscore', 'jQuery', 'jQuery.sidebarMenu', 'Utils'
	],
	function(
		ProfileModel, Configuration, HeaderProfileView, HeaderMenuMyAccountView, GlobalViewsHostSelectorView, GlobalViewsCurrencySelectorView

		, header_menu

		, Backbone, BackboneCompositeView, _, jQuery, jQuery_sidebarMenu, Utils
	) {
		'use strict';

		//@class Header.Menu.View @extends Backbone.View
		return Backbone.View.extend({

			template: header_menu

			,
			events: {
				'mouseenter [data-toggle="categories-menu"]': 'menuOpen',
				'mouseleave [data-toggle="categories-menu"]': 'menuClose',
				'click [data-toggle="categories-menu"]': 'menuClose'
			}

			,
			menuOpen: function(e) {
				jQuery(e.currentTarget).addClass('open');
			}

			,
			menuClose: function(e) {
				jQuery(e.currentTarget).removeClass('open');
			}

			,
			initialize: function() {
				var self = this;
				BackboneCompositeView.add(this);

				this.options.application.on('Configuration.navigationData', this.render, this);

				ProfileModel.getPromise().done(function() {
					self.render();
				});
			}

			,
			childViews: {
				'Header.Profile': function() {
					return new HeaderProfileView({
						showMyAccountMenu: false,
						application: this.options.application
					});
				},
				'Header.Menu.MyAccount': function() {
					return new HeaderMenuMyAccountView(this.options);
				},
				'Global.HostSelector': function() {
					return new GlobalViewsHostSelectorView();
				},
				'Global.CurrencySelector': function() {
					return new GlobalViewsCurrencySelectorView();
				}
			}

			,
			render: function() {
				Backbone.View.prototype.render.apply(this, arguments);
				this.$('[data-type="header-sidebar-menu"]').sidebarMenu();
			}

			// @method getContext
			// @return {Header.Sidebar.View.Context}
			,
			getContext: function() {


				var profile = ProfileModel.getInstance(),
					is_loading = !Configuration.get('performance.waitForUserProfile', true) && ProfileModel.getPromise().state() !== 'resolved',
					is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F',
					environment = SC.ENVIRONMENT,
					show_languages = environment.availableHosts && environment.availableHosts.length > 1,
					show_currencies = environment.availableCurrencies && environment.availableCurrencies.length > 1 && !Configuration.get('header.notShowCurrencySelector');

				_.each(Configuration.navigationData, function(entry) {
					if (entry.dataTouchpoint !== undefined) {
						entry.data = entry.data || {};
						entry.data.touchpoint = entry.dataTouchpoint;
					}
					if (entry.dataHashtag !== undefined) {
						entry.data = entry.data || {};
						entry.data.hashtag = entry.dataHashtag;
					}
				});
				var categories = this.checkCategories(is_loged_in, SC.ENVIRONMENT.currentLanguage.locale, Configuration.navigationData || []);

				//console.log("Utils: "+Utils+" params: "+JSON.stringify(sessionParams)+" tp: "+JSON.stringify(SC.ENVIRONMENT.siteSettings.touchpoints)+" in checkout: "+Utils.isInCheckout());

				// @class Header.Sidebar.View.Context
				return {
					login: is_loged_in,
					// @property {Array<NavigationData>} navigationItems
					categories: categories
						// @property {Boolean} showExtendedMenu
						,
					showExtendedMenu: !is_loading && is_loged_in
						// @property {Boolean} showLanguages
						,
					showLanguages: show_languages
						// @property {Boolean} showCurrencies
						,
					showCurrencies: show_currencies
				};
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
			},
			checkCategories: function(login, locale, categories) { //check for cross domain urls and if links are visible.

				if (categories) {

					var sessionParams = Utils.getSessionParams(SC.ENVIRONMENT.siteSettings.touchpoints.home);
					var domain = this.getDomain(SC.ENVIRONMENT.siteSettings.touchpoints.home);

					for (var i = 0; i < categories.length; i++) {
						if (!Utils.isShoppingDomain()) {
							if (!categories[i].oldhref) {
								categories[i].oldhref = categories[i].href;
							}
							categories[i].href = domain+categories[i].oldhref;
							if(sessionParams.ck){
categories[i].href+="?ck="+sessionParams.ck;
							}
							if(sessionParams.cktime){
categories[i].href+="&cktime="+sessionParams.cktime;
							}
						}
						if (categories[i].requireslogin) {
							categories[i].show = login;
						} else {
							categories[i].show = true;
						}
						if (categories[i].language && categories[i].language.length > 0 && locale && locale.length > 0) {
							if (categories[i].language != locale) {
								categories[i].show = false;
							}
						}
						if (categories[i].categories) {
							this.checkCategories(login, locale, categories[i].categories);
						}
					}
				}
				return categories;
			}
		});

	});
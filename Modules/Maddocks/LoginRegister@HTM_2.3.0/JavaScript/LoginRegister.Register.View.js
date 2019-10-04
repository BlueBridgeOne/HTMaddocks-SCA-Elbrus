/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove July 2017
*/

// @module LoginRegister
define('LoginRegister.Register.View'
,	[
		'login_register_register.tpl'

	,	'SC.Configuration'
	,	'Account.Register.Model'
	,	'LoginRegister.Utils'
	,	'Tracker'
	,	'Profile.Model'
	,	'LiveOrder.Model'
	,	'Backbone.FormView'

	,	'Backbone'
	,	'GlobalViews.CountriesDropdown.View'
	,	'GlobalViews.States.View'
	,	'underscore'
	,	'Utils'
	]
,	function (
		register_tpl

	,	Configuration
	,	AccountRegisterModel
	,	LoginRegisterUtils
	,	Tracker
	,	ProfileModel
	,	LiveOrderModel
	,	BackboneFormView

	,	Backbone
	,	CountriesDropdownView
	,	GlobalViewsStatesView
	,	_
	)
{
	'use strict';

	// @clasd LoginRegister.Register.View @extend Backbone.View
	return Backbone.View.extend({

		template: register_tpl

    ,   attributes: {
            'id': 'register'
        }

	,	events: {
			'change [data-action="selectcountry"]': 'updateStates'
		,	'change [data-action="selectstate"]': 'eraseZip'
		,	'change [data-action="inputstate"]': 'eraseZip'
		,'submit form': 'saveForm'
		}

	,	bindings: {
			'[name="firstname"]': 'firstname'
		,	'[name="lastname"]': 'lastname'
		,	'[name="company"]': 'company'
		,	'[name="phone"]': 'phone'
		,	'[name="email"]': 'email'
		,	'[name="password"]': 'password'
		,	'[name="password2"]': 'password2'
		,	'[name="addr1"]': 'addr1'
		,	'[name="addr2"]': 'addr2'
		,	'[name="city"]': 'city'
		,	'[name="state"]': 'state'
		,	'[name="country"]': 'country'
		,	'[name="zip"]': 'zip'
		}

	,	initialize: function (options)
		{
			this.options = options;
			this.options.countries = Configuration.get('siteSettings.countries');
			this.application = options.application;
			this.parentView = options.parentView;

			this.model = options.model || new AccountRegisterModel();
			// on save we redirect the user out of the registration page
			// as we know there hasn't been an error
			this.model.on('save', _.bind(this.redirect, this));

			BackboneFormView.add(this);

			this.calculateState();
		}

		// @method trackEvent tracks the 'create-account' event using the global Tracker instance
		// @param {Function} callback
	,	trackEvent: function (callback)
		{
			Tracker.getInstance().trackEvent({
				category: 'create-account'
			,	action: 'click'
			,	value: 1
			,	callback: callback
			});
		}
				//@method calculateState Pre-calculate many state variables used in the get context. In this way this is state is calculated once
		//@return {Void}
	,	calculateState: function ()
		{
			this.site_settings = Configuration.get('siteSettings');
			this.manage = this.options.manage ? this.options.manage + '-' : '';
			this.countries = this.options.countries;
			this.quantity_countries = _.size(this.countries);
			this.selected_country = this.options.selectedCountry;
			this.zip_not_required = this.selected_country && this.site_settings.countries[this.selected_country] && this.site_settings.countries[this.selected_country].isziprequired === 'F';
		}
		//@method eraseZip Show and hide the zip field depending on the selected country
		//@return {Void}
	,	eraseZip: function ()
		{
			var selected_country = this.$('[name="country"]').val()
			,	countries = Configuration.get('siteSettings.countries', {})
			,	$zip_fieldset = this.$('[data-input="zip"]')
			,	$zip_input = this.$('input[name="zip"]', $zip_fieldset);

			$zip_input.val('');

			if (countries[selected_country] && countries[selected_country].isziprequired === 'F')
			{
				$zip_fieldset.hide();
			}
			else
			{
				$zip_fieldset.show();
			}
		}
			//@method updateStates Initialize state of the  dropdowns
		//@param {jQuery.Event} e
		//@return {Void}
	,	updateStates: function (e)
		{
			var statesView = this.getChildViewInstance('StatesView');
			statesView.options.selectedCountry = this.$(e.currentTarget).val();
			statesView.render();
			this.eraseZip(e);
		}
		//@property {Object} childViews
	,	childViews: {
			'CountriesDropdown': function ()
			{
				return new CountriesDropdownView({
					countries: this.options.countries
				,	selectedCountry: this.selected_country
				,	manage: this.options.manage
				});
			}
		,	'StatesView': function ()
			{
				return new GlobalViewsStatesView({
					countries: this.options.countries
				,	selectedCountry: this.selected_country
				,	selectedState: this.model.get('state')
				,	manage: this.manage
				});
			}
		}
		// @method redirect redirects the user after successful account registration taking into account redirect (origin and origin_hash) parameters.
		// @param {Object} response the http response data object result of calling the account-register service.
	,	redirect: function (context, response)
		{
			var url_options = _.parseUrlOptions(window.location.search)
			,	touchpoints = response.touchpoints
			,	application = this.application;

			if (url_options.is && url_options.is === 'checkout')
			{
				var profile_model = ProfileModel.getInstance();

				response.user && profile_model.set(response.user);
				response.cart && LiveOrderModel.getInstance().set(response.cart);
				response.address && profile_model.get('addresses').reset(response.address);
				response.creditcard && profile_model.get('creditcards').reset(response.creditcard);

				// Track Guest Checkout Event
				this.trackEvent(function ()
				{
					application.Configuration.currentTouchpoint = 'checkout';
					Backbone.history.navigate('', { trigger: true });
				});
			}
			else
			{
				// Track Login Event
				this.trackEvent(function ()
				{
					// if we know from which touchpoint the user is coming from
					if (url_options.origin && touchpoints[url_options.origin])
					{
						// we save the url to that touchpoint
						var url = touchpoints[url_options.origin];
						// if there is an specific hash
						if (url_options.origin_hash)
						{
							// we add it to the url as a fragment
							url = _.addParamsToUrl(url, {fragment: url_options.origin_hash});
						}

						window.location.href = url;
					}
					else
					{
						//We've got to disable passwordProtectedSite feature if customer registration is disabled.
						if(Configuration.getRegistrationType() !== 'disabled' && SC.ENVIRONMENT.siteSettings.siteloginrequired==='T')
						{
							window.location.href = touchpoints.home;
						}
						else
						{
						// otherwise we need to take it to the customer center
						window.location.href = touchpoints.customercenter;
					}
					}
				});
			}
		}

		// @method getContext @return {LoginRegister.Register.View.Context}
	,	getContext: function ()
		{
			var url_options = _.parseUrlOptions(window.location.search);

			//@class LoginRegister.Register.View.Context
			return {
				// @property {Boolean} showCompanyField
				showCompanyField: SC.ENVIRONMENT.siteSettings.registration.showcompanyfield === 'T'
				// @property {Boolean} isCompanyFieldRequire
			,	isCompanyFieldRequire: SC.ENVIRONMENT.siteSettings.registration.companyfieldmandatory === 'T'
				// @property {Boolean} isEmailSubscribeChecked
			,	isEmailSubscribeChecked: this.options.isEmailSubscribeChecked
				// @property {String} siteName
			,	siteName: SC.ENVIRONMENT.siteSettings.displayname
				// @property {Boolean} showFormFieldsOnly
			,	showFormFieldsOnly: this.options.showFormFieldsOnly || false
				// @property {Boolean} isRedirect
			,	isRedirect: !!(url_options.is !== 'checkout' && url_options.origin !== 'checkout')
				// @property {Boolean} hasAutoFocus
			,	hasAutoFocus: url_options.is === 'register' && _.isDesktopDevice()
			//@property {Boolean} showAddressFormSecondAddress
			,	showAddressFormSecondAddress: Configuration.get('forms.address.showAddressLine2')
			//@property {Boolean} showCountriesField
			,	showCountriesField: this.quantity_countries > 1
				//@property {Boolean} isZipOptional
			,	isZipOptional: this.zip_not_required

			};
		}
		// @class LoginRegister.Register.View

	});
});
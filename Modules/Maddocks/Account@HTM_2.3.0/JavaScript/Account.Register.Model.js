/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove 2017
*/

//@module Account
define('Account.Register.Model'
,	[	'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function (
		Backbone
	,	_
	,	Utils
	)
{
	'use strict';

	//@class Account.Register.Model
	// Sends user input data to the register service
	// validating fields before they are sent
	// [Backbone.validation](https://github.com/thedersen/backbone.validation)
	//@extend Backbone.Model
	return Backbone.Model.extend({

		//@property {String} urlRoot
		urlRoot: Utils.getAbsoluteUrl('services/Account.Register.Service.ss')

		//@property {Object} validation. Backbone.Validation attribute used for validating the form before submit.
	,	validation: {
			firstname: {
				required: true
			,	msg: _('First Name is required').translate()
			}
		,	lastname: {
				required: true
			,	msg: _('Last Name is required').translate()
			}
		,	email: {
				required: true
			,	pattern: 'email'
			,	msg: _('Valid Email is required').translate()
			}
		,	company: {
				required: SC.ENVIRONMENT.siteSettings.registration.companyfieldmandatory === 'T'
			,	msg: _('Company Name is required').translate()
			}
		,	password:  {
				required: true
			,	msg: _('Please enter a valid password').translate()
			}
		,	password2: [
				{
					required: true
				,	msg: _('Confirm password is required').translate()
				}
			,	{
					equalTo: 'password'
				,	msg: _('New Password and Confirm Password do not match').translate()
				}
			]
		,	addr1: { required: true, msg: _('Address is required').translate() }
		,	addr2: { required: false}
		,	country: { required: true, msg: _('Country is required').translate() }
		,	state: { required:false }
		,	city: { required: true, msg: _('City is required').translate() }
		,	zip: { fn: _.validateZipCode }
		,	phone: {required: true, fn: _.validatePhone, msg: _('Phone Number is required').translate()}
		}
	}); //fn: _.validateState
});
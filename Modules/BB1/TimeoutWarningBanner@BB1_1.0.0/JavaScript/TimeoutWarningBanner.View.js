/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove Aug 2017
*/

//@module TimeoutWarningBanner
define('TimeoutWarningBanner.View'
,	[
		'SC.Configuration'
	,	'timeout_warning_banner_view.tpl'

	,	'jQuery'
	,	'Backbone'
	]
,	function (
		Configuration
	,	timeout_warning_banner_view_tpl

	,	jQuery
	,	Backbone
	)
{
	'use strict';

	//@class TimeoutWarningBanner.View @extend Backbone.View
	return Backbone.View.extend({

		template: timeout_warning_banner_view_tpl

	,	events: {
			'click [data-action="close-message"]': 'closeMessage'
		}

		//@method initialize Override default method to initialize the jQuery Timeout JSON property
		//@return {Void}
	,	initialize: function initialize ()
		{
			Backbone.View.prototype.initialize.apply(this, arguments);
		}

		//@method closeMessage Event handle for the close action
	,	closeMessage: function closeMessage ()
		{
			
		}

		//@method showBanner Indicate if this current message should be shown or not
		//@return {Boolean}
	,	showBanner: function showBanner ()
		{
			return document.location.href.indexOf("isTimeout=T")>-1;
		}

		//@method getContext
		//@return {TimeoutWarningBanner.View.Context}
	,	getContext: function getContext()
		{
		var message=_("Your session has timed out due to inactivity.").translate();
		var logintext=_("Login").translate();
			//@class TimeoutWarningBanner.View.Context
			return {
				//@property {Boolean} showBanner
				showBanner: this.showBanner()
				//@property {String} TimeoutMessage
			,	TimeoutMessage: message+" <a  data-touchpoint='login' data-hashtag='login-register' href='#'>"+logintext+"</a>"
			,	closable: Configuration.get('TimeoutWarningBanner.closable', true)
			};
			//@class TimeoutWarningBanner.View
		}
	});
});
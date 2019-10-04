/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove Aug 2017
*/

// @module TimeoutWarningBanner
// Handles the display of the banner to be displayed warning the customers about session Timeouts
define(
	'TimeoutWarningBanner'
,	[
		'TimeoutWarningBanner.View'
	,	'Header.View'
	]
,	function (
		TimeoutWarningBannerView
	,	HeaderView
	)
{
	'use strict';

	// @class TimeoutWarningBanner
	// @extends ApplicationModule
	return {
		mountToApp: function (application)
		{
			
			HeaderView.addChildViews({
				'Message.Placeholder': function wrapperFunction ()
				{
					return function ()
					{
						return new TimeoutWarningBannerView({application:application});
					};
				}
			});
		}
	};
});

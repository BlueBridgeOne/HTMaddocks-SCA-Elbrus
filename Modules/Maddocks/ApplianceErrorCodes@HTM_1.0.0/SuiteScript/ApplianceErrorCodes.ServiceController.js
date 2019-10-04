define(
	'ApplianceErrorCodes.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'ApplianceErrorCodes.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	ApplianceErrorCodesModel
	)
	{
		'use strict';

		// @class Profile.ServiceController Manage profile requests
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'ApplianceErrorCodes.ServiceController'

		,	get: function()
			{
				return ApplianceErrorCodesModel.get();
			}

		,	put: function()
			{
				ApplianceErrorCodesModel.update(this.data);
				return ApplianceErrorCodesModel.get();
			}
		});
	}
);
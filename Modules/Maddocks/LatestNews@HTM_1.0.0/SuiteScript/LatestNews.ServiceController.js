define(
	'LatestNews.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'LatestNews.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	LatestNewsModel
	)
	{
		'use strict';

		// @class Profile.ServiceController Manage profile requests
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'LatestNews.ServiceController'

		,	get: function()
			{
				return LatestNewsModel.get();
			}

		,	put: function()
			{
				LatestNewsModel.update(this.data);
				return LatestNewsModel.get();
			}
		});
	}
);
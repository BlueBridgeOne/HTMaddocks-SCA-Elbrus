define('ApplianceErrorCodes.Model'
,	[
		'Session'
	,	'Singleton'
	,	'AjaxRequestsKiller'
	,	'SC.Configuration'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Session
	,	Singleton
	,	AjaxRequestsKiller
	,	Configuration
	,	Utils
	,	_
	)
{
	'use strict';

	var ClassProperties = _.extend({

		}, Singleton)

	,	ApplianceErrorCodesModel = Backbone.Model.extend({
		urlRoot: Utils.getAbsoluteUrl('services/ApplianceErrorCodes.Service.ss')

	,	initialize: function initialize ()
		{
			this.list();
		}	

		// Get request funciton
	,	list: function list ()
		{
			var promise = this.sync('read', this, {killerId: AjaxRequestsKiller.getKillerId()});

			var self = this;

			promise.done(function()	{
				self.attributes = promise.responseJSON;
			})
		}	

		// Post request
	,	update: function update	(data)
		{
			this.attributes = {'attributes': data, 'update': true};

			var promise = this.sync('update', this, {killerId: AjaxRequestsKiller.getKillerId()});

			var self = this;

			promise.done(function()	{
				self.list();
				Backbone.history.loadUrl(Backbone.history.fragment);
			})
		}

	}, ClassProperties);

	return ApplianceErrorCodesModel;
});

define(
	'ApplianceErrorCodes.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Utils'
	]
,	function (
		SCModel
	,	ModelsInit
	,	Utils
	)
{
	'use strict';

	return SCModel.extend({
		name: 'ApplianceErrorCodes',

		get: function ()
		{
			// need to create object then return it to the page
			var filters = [
            	new nlobjSearchFilter('isinactive', null, 'is', 'F')
            ];
            var columns = [
				new nlobjSearchColumn('custrecord_appliance_error_codes_brand').setSort(),
				new nlobjSearchColumn('custrecord_appliance_error_codes_error').setSort(),
				new nlobjSearchColumn('custrecord_appliance_error_codes_type'),
				new nlobjSearchColumn('custrecord_appliance_error_codes_desc'),
				new nlobjSearchColumn('custrecord_appliance_error_codes_solve')
			];

			var searchresults = nlapiSearchRecord('customrecord_appliance_error_codes', null, filters, columns);

			var res;
			var List = [];
			for (var i in searchresults) {
				res = searchresults[i];

				List.push({
					applianceBrand: res.getText("custrecord_appliance_error_codes_brand"),
                	applianceErrorCode: res.getValue('custrecord_appliance_error_codes_error'),
                	applianceType: res.getText('custrecord_appliance_error_codes_type'),
                	errorDescription: res.getValue('custrecord_appliance_error_codes_desc'),
                	errorSolution: res.getValue('custrecord_appliance_error_codes_solve')
				});
			}
			return List;
		}
	});
});
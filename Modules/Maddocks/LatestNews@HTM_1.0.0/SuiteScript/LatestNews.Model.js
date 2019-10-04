define(
	'LatestNews.Model'
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
		name: 'LatestNews',

		get: function ()
		{
			// need to create object then return it to the page
			var filters = [
            	new nlobjSearchFilter('isinactive', null, 'is', 'F'),
            	new nlobjSearchFilter('custrecord_latest_news_published_status', null, 'is', '4')
            ];
            var columns = [
				new nlobjSearchColumn('custrecord_latest_news_creation_date').setSort(true),
				new nlobjSearchColumn('custrecord_latest_news_title'),
				new nlobjSearchColumn('custrecord_latest_news_text'),
				new nlobjSearchColumn('custrecord_latest_news_featured_image')
			];

			var searchresults = nlapiSearchRecord('customrecord_sca_latest_news', null, filters, columns);

			var res;
			var List = [];
			for (var i in searchresults) {
				res = searchresults[i];

				List.push({
					creationdate: res.getValue("custrecord_latest_news_creation_date"),
                	title: res.getValue('custrecord_latest_news_title'),
                	text: res.getValue('custrecord_latest_news_text'),
                	image: res.getText('custrecord_latest_news_featured_image')
				});
			}
			return List;
		}
	});
});
define('DocumentationPDP.Model',	[
    'SC.Model',
    'underscore'
], function (
    SCModel,
    _
) {
    'use strict';

    return SCModel.extend({
        name: 'DocumentationPDP',
        getByItemInternalid: function getByItemInternalid(internalid) {
            if(!internalid) return [];

            var filters = [
                new nlobjSearchFilter('custrecord_documentation_related_item_id', null, 'is', internalid),
                new nlobjSearchFilter('isinactive', null, 'is', 'F')
            ];

            var columns = [
                new nlobjSearchColumn('custrecord_documentation_type'),
                new nlobjSearchColumn('custrecord_documentation_description'),
                new nlobjSearchColumn('name')
            ];

            var searchResults = nlapiSearchRecord('customrecord_documentation', null, filters, columns);

            return searchResults ? _.map(searchResults, function mapResults(row) {
                return {
                    type: row.getText('custrecord_documentation_type'),
                    docuname: row.getValue('name'),
                    description: row.getValue('custrecord_documentation_description')
                }
            }) : [];
        }
    });
});
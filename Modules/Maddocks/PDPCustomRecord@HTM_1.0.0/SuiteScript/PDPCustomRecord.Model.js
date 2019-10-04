define('PDPCustomRecord.Model',	[
    'SC.Model',
    'underscore'
], function (
    SCModel,
    _
) {
    'use strict';

    return SCModel.extend({
        name: 'PDPCustomRecord',
        getByItemInternalid: function getByItemInternalid(internalid) {
            if(!internalid) return [];

            var filters = [
                new nlobjSearchFilter('custrecord_t_item_id', null, 'is', internalid),
                new nlobjSearchFilter('isinactive', null, 'is', 'F')

            ];

            var columns = [
                new nlobjSearchColumn('internalid'),
                new nlobjSearchColumn('custrecord_t_text')
            ];

            var searchResults = nlapiSearchRecord('customrecord_test_z', null, filters, columns);

            return searchResults ? _.map(searchResults, function mapResults(row) {
                return {
                    internalid: row.getValue('internalid'),
                    text: row.getValue('custrecord_t_text')
                }
            }) : [];
        }
    });
});
define('PDPCustomRecord.ServiceController',	[
    'ServiceController',
    'Application',
    'PDPCustomRecord.Model'
], function(
   ServiceController,
   Application,
   PDPCustomRecordModel
) {
    'use strict';

    return ServiceController.extend({
        name:'PDPCustomRecord.ServiceController',
        get: function() {
            var id = this.request.getParameter('internalid');
            this.sendContent(
                id ? PDPCustomRecordModel.getByItemInternalid(id) : [],
                { 'cache': response.CACHE_DURATION_LONG }
            );
        }
    });
});
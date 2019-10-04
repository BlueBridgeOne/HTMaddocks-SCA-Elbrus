define('DocumentationPDP.ServiceController',	[
    'ServiceController',
    'Application',
    'DocumentationPDP.Model'
], function(
   ServiceController,
   Application,
   DocumentationPDPModel
) {
    'use strict';

    return ServiceController.extend({
        name:'DocumentationPDP.ServiceController',
        get: function() {
            var id = this.request.getParameter('internalid');
            this.sendContent(
                id ? DocumentationPDPModel.getByItemInternalid(id) : [],
                { 'cache': response.CACHE_DURATION_LONG }
            );
        }
    });
});
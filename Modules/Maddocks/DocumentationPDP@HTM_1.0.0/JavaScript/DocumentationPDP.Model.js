define('DocumentationPDP.Model', [
    'Backbone.CachedModel',
    'underscore',
    'Utils'
], function(
    CachedModel,
    _,
    Utils
) {
    'use strict';
    return CachedModel.extend({
        urlRoot: Utils.getAbsoluteUrl('services/DocumentationPDP.Service.ss')
    });
});
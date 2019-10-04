define('DocumentationPDP.Collection', [
    'DocumentationPDP.Model',
    'Backbone.CachedCollection',
    'underscore',
    'Utils'
], function(
    Model,
    CachedCollection,
    _,
    Utils
) {
    'use strict';
    return CachedCollection.extend({
        model: Model,
        url: Utils.getAbsoluteUrl('services/DocumentationPDP.Service.ss')
    });
});
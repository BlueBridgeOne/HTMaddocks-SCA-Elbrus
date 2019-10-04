define('DocumentationPDP.View', [
    'DocumentationPDP.Line.View',
    'SC.Configuration',
    'Backbone',
    'Backbone.CollectionView',
    'underscore',
    'documentationpdp.tpl',
    'backbone_collection_view_cell.tpl',
    'backbone_collection_view_row.tpl'
], function(
	DocumentationPDPLineView,
    Configuration,
    Backbone,
    BackboneCollectionView,
    _,
    documentationpdpTpl,
    backboneCollectionViewCellTpl,
    backboneCollectionViewRowTpl
) {
    'use strict';

    return Backbone.View.extend({
        initialize: function initialize(options) {
            this.listenTo(options.collection, 'sync', _.bind(this.render, this))
        },
        template: documentationpdpTpl,
        childViews: {

            'Lines.Collection': function () {
            return new BackboneCollectionView(
                {
                    childView: DocumentationPDPLineView,
                    collection: this.collection,
                    viewsPerRow: Configuration.get('itemsPerRow', 1),
                    cellTemplate: backboneCollectionViewCellTpl,
                    rowTemplate: backboneCollectionViewRowTpl
                });
        }}
    })
});
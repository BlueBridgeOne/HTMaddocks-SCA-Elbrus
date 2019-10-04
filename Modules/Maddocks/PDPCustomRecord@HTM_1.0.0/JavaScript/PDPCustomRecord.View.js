define('PDPCustomRecord.View', [
    'PDPCustomRecord.Line.View',
    'SC.Configuration',
    'Backbone',
    'Backbone.CollectionView',
    'underscore',
    'pdpcustomrecord.tpl',
    'backbone_collection_view_cell.tpl',
    'backbone_collection_view_row.tpl'
], function(
    PDPCustomRecordLineView,
    Configuration,
    Backbone,
    BackboneCollectionView,
    _,
    pdpcustomrecordTpl,
    backboneCollectionViewCellTpl,
    backboneCollectionViewRowTpl
) {
    'use strict';

    return Backbone.View.extend({
        initialize: function initialize(options) {
            this.listenTo(options.collection, 'sync', _.bind(this.render, this))
        },
        template: pdpcustomrecordTpl,
        childViews: {

            'Lines.Collection': function () {
            return new BackboneCollectionView(
                {
                    childView: PDPCustomRecordLineView,
                    collection: this.collection,
                    viewsPerRow: Configuration.get('itemsPerRow', 1),
                    cellTemplate: backboneCollectionViewCellTpl,
                    rowTemplate: backboneCollectionViewRowTpl
                });
        }}
    })
});
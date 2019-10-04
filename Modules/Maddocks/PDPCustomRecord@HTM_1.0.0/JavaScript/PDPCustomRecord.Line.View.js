define('PDPCustomRecord.Line.View', [
    'Backbone',
    'pdpcustomrecord_line.tpl'
], function(
    Backbone,
    pdpcustomrecordLineTpl
) {
    'use strict';

    return Backbone.View.extend({
        template: pdpcustomrecordLineTpl,
        getContext: function getContext() {
            return {
                internalid: this.model.get('internalid'),
                text: this.model.get('text')
            }
        }
    })
});
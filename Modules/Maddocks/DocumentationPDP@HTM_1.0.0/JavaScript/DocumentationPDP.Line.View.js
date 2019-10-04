define('DocumentationPDP.Line.View', [
    'Backbone',
    'documentationpdp_line.tpl'
], function(
    Backbone,
    documentationpdpLineTpl
) {
    'use strict';

    return Backbone.View.extend({
        template: documentationpdpLineTpl,
        getContext: function getContext() {
            return {
                type: this.model.get('type'),
                docuname: this.model.get('docuname'),
                description: this.model.get('description')
            }
        }
    })
});
define('LatestNews.Test.View', [
    'latestnews.tpl',
    'Backbone',
    'LatestNews.Model',
    'underscore'
], function LatestNewsNewView(
    latestnewstpl,
    Backbone,
    LatestNewsModel,
    _
) {
    'use strict';

    return Backbone.View.extend({

        template: latestnewstpl

    ,   title: _('Latest News').translate()

    ,   events: {

            }

    ,   initialize: function (options) {
            this.application = options.application;
            this.collection = options.collection;
            this.model = options.model;
        }

    , getBreadcrumbPages: function()
    {
      return [{
        text: _('Latest News').translate()
      , href: '/Latest-News'
      }]
    }

    ,   getContext: function getContext() {

            return {
                //variables to return in template
                model: this.model.attributes,
                creationdate: this.model.get('creationdate'),
                title: this.model.get('title'),
                text: this.model.get('text'),
                image: this.model.get('image')
            }
        }
    });
});
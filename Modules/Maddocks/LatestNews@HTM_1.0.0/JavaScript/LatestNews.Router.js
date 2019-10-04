define('LatestNews.Router'
, [
    'LatestNews.Test.View'
  , 'Backbone'
  , 'LatestNews.Model'
  ]
, function LatestNewsRouter(
    LatestNewsTestView
  , Backbone
  , LatestNewsModel
  )
{
  'use strict';

  return Backbone.Router.extend({

    routes: {
      'Latest-News': 'LatestNewsTest'
    }

  , initialize: function initialize(application) {
      this.application = application;
    }

  , LatestNewsTest: function LatestNewsTest() {
      var model = LatestNewsModel.getInstance();

      var view = new LatestNewsTestView({
        application: this.application,
        model: model
      });

      model.fetch().done(function() {
        view.showContent();
      });
    }
  });
});
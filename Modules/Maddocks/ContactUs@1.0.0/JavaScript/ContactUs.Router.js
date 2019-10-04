define('ContactUs.Router'
, [
    'Backbone'
  , 'ContactUs.Model'
  , 'ContactUs.View'
  ]
, function
  (
    Backbone
  , Model
  , View
  )
{
  'use strict';

  return Backbone.Router.extend({
    routes:
    {
      'contact-us': 'contactUs'
    }

  , initialize: function(application)
    {
      this.application = application;
    }

  , contactUs: function(options)
    {
      var view = new View({
        application: this.application
      , model: new Model()
      });

      view.showContent();
    }
  });
});
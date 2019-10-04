define('ApplianceErrorCodes.Router'
, [
    'ApplianceErrorCodes.View'
  , 'Backbone'
  , 'ApplianceErrorCodes.Model'
  ]
, function ApplianceErrorCodesRouter(
    ApplianceErrorCodesView
  , Backbone
  , ApplianceErrorCodesModel
  )
{
  'use strict';

  return Backbone.Router.extend({

    routes: {
      'Appliance-Error-Codes': 'ApplianceErrorCodes'
    }

  , initialize: function initialize(application) {
      this.application = application;
    }

  , ApplianceErrorCodes: function ApplianceErrorCodes() {
      var model = ApplianceErrorCodesModel.getInstance();

      var view = new ApplianceErrorCodesView({
        application: this.application,
        model: model
      });

      model.fetch().done(function() {
        view.showContent();
      });
    }
  });
});
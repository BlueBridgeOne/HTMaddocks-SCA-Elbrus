/*BB1 G Truslove July 2017*/
define('Brands.Model',
  [
  'Backbone',
  'underscore'
  ],
  function (Backbone, _) {
    return Backbone.Model.extend({
      urlRoot: _.getAbsoluteUrl('services/Brands.Service.ss')
    });
  }
);
/*BB1 G Truslove July 2017*/
define('Brands.Collection',
  [
  'Backbone',
  'Brands.Model'
  ],
  function (Backbone, Model) {
    return Backbone.Collection.extend({
      model: Model,
      url: _.getAbsoluteUrl('services/Brands.Service.ss')
    });
  }
);
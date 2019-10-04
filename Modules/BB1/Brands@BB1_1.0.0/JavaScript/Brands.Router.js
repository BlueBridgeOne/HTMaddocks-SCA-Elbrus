/*BB1 G Truslove July 2017*/
define('Brands.Router', [
  'Backbone',
  'Brands.List.View',
  'Brands.Model',
  'Brands.Collection'
], function(Backbone, ListView,Model,Collection) {
  console.log("Create Brands");
  return Backbone.Router.extend({
    initialize: function(application) {
      this.application = application;
    },
    routes: {
      'brands': 'brandsList',
      'brands/:category': 'brandsCategory'
    },
    brandsList: function () {
      var collection = new Collection();
      var view = new ListView({collection: collection, application: this.application});
      collection.fetch().done(function() {
        view.showContent();
      });
    },
    brandsCategory: function (category) {
    if(category=="0 - 9"){
    category="0"
    }
      var collection = new Collection();
      var view = new ListView({collection: collection, application: this.application,category:category});
      collection.fetch({data: {
            category: category
          }}).done(function() {
        view.showContent();
      });
    }
  });
});
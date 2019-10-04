/*BB1 G Truslove July 2017*/
define('Brands.Details.View',
  [
  'Profile.Model'
  , 'SC.Configuration','Backbone',
  'brands_details.tpl'
  ],
  function (ProfileModel
  , Configuration,Backbone, brands_details_tpl) {
    return Backbone.View.extend({
      events: {
   'click [data-action="login"]' : 'login'
   }
   ,
   login:function(e){
   e.preventDefault();
   e.stopPropagation();
   document.location.href=SC.ENVIRONMENT.siteSettings.touchpoints.login+"&l=1&redirect="+encodeURIComponent("search?keywords="+this.model.get('name'));
   },getContext: function () {
        var profile = ProfileModel.getInstance()
      , is_loading = !_.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) && ProfileModel.getPromise().state() !== 'resolved'
      , is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';

        return {
        'isLoggedIn':is_loged_in,
          'name': this.model.get('name'),
          'oem_distributor': this.model.get('oem_distributor'),
          'logo_image': this.model.get('logo_image'),
          'internalid': this.model.get('internalid')
        }
      },

      template: brands_details_tpl

    });
  }
)

         // 'manufacturer': this.model.get('manufacturer'), //Not needed
         // 'description': this.model.get('description'),
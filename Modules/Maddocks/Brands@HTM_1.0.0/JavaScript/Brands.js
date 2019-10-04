/*BB1 G Truslove July 2017*/
define('Brands', [
  'Brands.Router'
  ],
  function (Router) {
  'use strict';

  return {
    mountToApp: function(application) {
       return new Router(application);
    }
  }
});
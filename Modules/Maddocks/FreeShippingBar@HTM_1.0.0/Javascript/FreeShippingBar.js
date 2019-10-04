define('FreeShippingBar'
, [
    'Cart.Summary.View'
  , 'FreeShippingBar.View'
  , 'SC.Configuration'
  ]
, function (
    CartSummaryView
  , FreeShippingBarView
  , Configuration
  )
{
  'use strict';

  return {

    isEnabled: function isEnabled() {
      return Configuration.get('freeshippingbar.isEnabled');
    }

  , mountToApp: function(application)
    {
      if (this.isEnabled())
      {
        CartSummaryView.prototype.childViews.FreeShippingBar = function()
        {
          return new FreeShippingBarView({
            model: this.model
          })
        }
      }
    }
  }
});
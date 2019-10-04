define('FreeShippingBar.View'
, [
    'Backbone'
  , 'SC.Configuration'
  , 'free_shipping_bar.tpl'
  , 'Session'
  ]
, function (
    Backbone
  , Configuration
  , free_shipping_bar_tpl
  , Session
  )
{
  'use strict';

  return Backbone.View.extend({

    template: free_shipping_bar_tpl

  , getContext: function getContext()
    {
      var summary = this.model.get('summary')
      , config = Configuration.get('freeshippingbar')
      , currentCurrencyCode = SC.ENVIRONMENT.currentCurrency.code
      , subtotal = summary.subtotal
      , gbp_threshold = config.threshold.gbp
      , usd_threshold = config.threshold.usd
      , eur_threshold = config.threshold.eur
      , gbp_difference = +(gbp_threshold - subtotal).toFixed(2)
      , usd_difference = +(usd_threshold - subtotal).toFixed(2)
      , eur_difference = +(eur_threshold - subtotal).toFixed(2)
      , diffpc_gbp = (subtotal / gbp_threshold * 100) + '%'
      , diffpc_usd = (subtotal / usd_threshold * 100) + '%'
      , diffpc_eur = (subtotal / eur_threshold * 100) + '%'

      , orderPercentage = ''

      , message = function message() {
          if (currentCurrencyCode ==="GBP") {        
              if (gbp_difference > 0) {
                return 'Add \£' + gbp_difference + ' more to your cart to get free shipping!'
              } else {
                return 'Congratulations, you qualify for free shipping!'
              }
          } else if (currentCurrencyCode ==="USD") {
              if (usd_difference > 0) {
                return 'Add \$' + usd_difference + ' more to your cart to get free shipping!'
              } else {
                return 'Congratulations, you qualify for free shipping!'
              }
          } else if (currentCurrencyCode ==="EUR") {
              if (usd_difference > 0) {
                return 'Add \€' + usd_difference + ' more to your cart to get free shipping!'
              } else {
                return 'Congratulations, you qualify for free shipping!'
              }
            }
      };

      if (currentCurrencyCode === 'GBP') {
        orderPercentage = diffpc_gbp
      }
      else if (currentCurrencyCode === 'USD') {
        orderPercentage = diffpc_usd
      }
      else if (currentCurrencyCode === 'EUR') {
        orderPercentage = diffpc_eur
      }

      return {
        message: message
      , orderPercentage: orderPercentage  
      }
    }
  });
});
define('Substitutes.View'
, [
    'Backbone'
  , 'substitutes.tpl'
  , 'Utils'    
  ,	'underscore'
  ]
, function (
    Backbone
  , substitutes_tpl
  , Utils    
  , _
  )
{
  'use strict';

    return Backbone.View.extend(
    {
        template: substitutes_tpl

    , getContext: function ()
    {
      //@class ProductLine.Sku.View.Context
      return {
        //@property {Product.Model|Transaction.Line.Model|Item.Model} model
        model: this.model
        //@property {String} sku
      , substitute1 : this.model.get('custitem_substitute1')

      , substitute2 : this.model.get('custitem_substitute2')
      };
      //@class ProductLine.Sku.View
    }

  });
});
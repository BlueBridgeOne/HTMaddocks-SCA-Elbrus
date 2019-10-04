define('ProductSpecifications.View'
, [
    'Backbone'
  , 'product_specifications.tpl'
  , 'Utils'    
  ,	'underscore'
  ]
, function (
    Backbone
  , product_specifications_tpl
  , Utils    
  , _
  )
{
  'use strict';

    return Backbone.View.extend(
    {
        template: product_specifications_tpl

    , getContext: function ()
    {
      var item_model = this.model.get('item');
      //@class ProductLine.Sku.View.Context
      return {
        //@property {Product.Model|Transaction.Line.Model|Item.Model} model
        model: this.model
        //@property {String} sku
      , itemWeight : item_model.get('_itemWeight')
      , ean : item_model.get('_eanCode')
      , palletQty : item_model.get('_palletQuantity')
      , brandManufacturer : item_model.get('_brandManufacturer')
      , productClassification : item_model.get('_productClassification')
      , boxQty : item_model.get('_boxQuantity')
      , dimensions : item_model.get('_itemDimensions')
      , commercialReference : item_model.get('_commercialReference')
      , packQty : item_model.get('_packQuantity')
      };
      //@class ProductLine.Sku.View
    }

  });
});
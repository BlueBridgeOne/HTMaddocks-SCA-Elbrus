define('Productinfo.View'
, [
    'Backbone'
  , 'productinfo.tpl'
  , 'Utils'    
  ,	'underscore'
  ]
, function (
    Backbone
  , productinfo_tpl
  , Utils    
  , _
  )
{
  'use strict';

    return Backbone.View.extend(
    {
        template: productinfo_tpl

    , getContext: function ()
    {
      var item_model = this.model.get('item');
      var havingTroubleMessage=_("If the information provided on this page still isn't sufficient for you to be certain it's what you require, please contact us for further assistance.").translate();
      //@class ProductLine.Sku.View.Context
      return {
        //@property {Product.Model|Transaction.Line.Model|Item.Model} model
        model: this.model

        //Custom Fields
      , fittingInformation: item_model.get('_fittingInformation')
      , otherInformation: item_model.get('_otherInformation')
      , genuineCompatible: item_model.get('_genuineCompatible')
      , manufacturerInformation: item_model.get('_manufacturerInformation')
      , consumablesDescription: item_model.get('_consumablesDescription')
      , bulkOrdering: item_model.get('_bulkOrdering')
      , relatedSubstitutes: item_model.get('_relatedSubstitutes')
      , stillHavingTrouble: havingTroubleMessage
      , threeSixtyDegreeView: item_model.get('_threeSixtyDegreeView')
      , documentDownloads: item_model.get('_documentationHTML')
      , videoContent: item_model.get('_videoContent')

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
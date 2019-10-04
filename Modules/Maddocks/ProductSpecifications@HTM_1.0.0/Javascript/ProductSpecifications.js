define('ProductSpecifications'
,   [
        'ProductSpecifications.View'
    ,   'ProductDetails.Full.View'
    ]
,   function (
        ProductSpecificationsView
    ,   ProductDetailsFullView
    )
{
    'use strict';

    return {
      
        mountToApp: function (application)
		{
            ProductDetailsFullView.prototype.childViews.ProductSpecifications = function()
            {
                return new ProductSpecificationsView({
                    model: this.model
                })
            }
        }
			
    }
});
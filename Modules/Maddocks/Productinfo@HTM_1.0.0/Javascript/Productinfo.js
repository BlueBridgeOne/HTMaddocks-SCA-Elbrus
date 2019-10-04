define('Productinfo'
,   [
        'Productinfo.View'
    ,   'ProductDetails.Full.View'
    ]
,   function (
        ProductinfoView
    ,   ProductDetailsFullView
    )
{
    'use strict';

    return {
      
        mountToApp: function (application)
		{
            ProductDetailsFullView.prototype.childViews.Productinfo = function()
            {
                return new ProductinfoView({
                    model: this.model
                })
            }
        }
			
    }
});
define('Substitutes'
,   [
        'Substitutes.View'
    ,   'ProductDetails.Full.View'
    ]
,   function (
        SubstitutesView
    ,   ProductDetailsFullView
    )
{
    'use strict';

    return {
      
        mountToApp: function (application)
		{
            ProductDetailsFullView.prototype.childViews.Substitutes = function()
            {
                return new SubstitutesView({
                    model: this.model
                })
            }
        }
			
    }
});
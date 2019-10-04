define('PDPCustomRecord', [
    'PDPCustomRecord.View',
    'PDPCustomRecord.Collection'
], function(
    PDPCustomRecordView,
    Collection
) {
    'use strict';

    return {
        mountToApp: function(application) {

            var pdp = application.getComponent('PDP');
            var view_id = 'ProductDetails.Full.View';

            pdp.addChildViews(
                view_id,
                {
                    'PDPCustomRecord': {
                        'PDPCustomRecord.View':
                            {
                                childViewIndex: 1,
                                childViewConstructor: function () {
                                    var itemInternalId = pdp.getItemInfo().item.internalid;
                                    var collection = new Collection();
                                    collection.fetch({data: {internalid: itemInternalId}});
                                    return new PDPCustomRecordView({collection: collection});
                                }
                            }
                    }
                }
            );
        }
    }
});
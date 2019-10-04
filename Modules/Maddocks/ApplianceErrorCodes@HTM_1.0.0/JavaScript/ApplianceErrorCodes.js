define('ApplianceErrorCodes', [
    'ApplianceErrorCodes.Router'
], function(
    Router
) {
    'use strict';

    return {
        MenuItems: {
            id: 'ApplianceErrorCodes',
            name: 'ApplianceErrorCodes',
            index: 0,
            children: [{
                id: 'ApplianceErrorCodes',
                name: 'ApplianceErrorCodes',
                url: 'ApplianceErrorCodes',
                index: 0
            }]
        },

        mountToApp: function(application) {
            return new Router(application);
        }

    }
});
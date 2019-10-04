define('LatestNews', [
    'LatestNews.Router'
], function(
    Router
) {
    'use strict';

    return {
        MenuItems: {
            id: 'LatestNews',
            name: 'LatestNews',
            index: 0,
            children: [{
                id: 'LatestNews',
                name: 'LatestNews',
                url: 'LatestNews',
                index: 0
            }]
        },

        mountToApp: function(application) {
            return new Router(application);
        }

    }
});
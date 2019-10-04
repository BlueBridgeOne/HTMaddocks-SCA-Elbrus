define('ApplianceErrorCodes.View', [
    'appliance_error_codes.tpl',
    'Backbone',
    'ApplianceErrorCodes.Model',
    'underscore'
], function ApplianceErrorCodesNewView(
    appliance_error_codes_tpl,
    Backbone,
    ApplianceErrorCodesModel,
    _
) {
    'use strict';

    return Backbone.View.extend({

        template: appliance_error_codes_tpl

    ,   title: _('Appliance Error Codes').translate()

    ,   events: {

            }

    ,   initialize: function (options) {
            this.application = options.application;
            this.collection = options.collection;
            this.model = options.model;
        }

    , getBreadcrumbPages: function()
    {
      return [{
        text: _('Appliance Error Codes').translate()
      , href: '/Appliance-Error-Codes'
      }]
    }

    ,   getContext: function getContext() {

            return {
                //variables to return in template
                model: this.model.attributes,
                applianceBrand: this.model.get('applianceBrand'),
                applianceErrorCode: this.model.get('applianceErrorCode'),
                applianceType: this.model.get('applianceType'),
                errorDescription: this.model.get('errorDescription'),
                errorSolution: this.model.get('errorSolution')

            ,   errorBrands: [
                    {
                        errorBrandName: 'BSH Group : Bosch, Neff, Siemens, Gaggenau'
                    }
                ,   {
                        errorBrandName: 'Electrolux-Distripart Group'
                    }
                ,   {
                        errorBrandName: 'Indesit Group: Indesit, Hotpoint, Ariston, Creda, Cannon, Scholtes'
                    }
                ,   {
                        errorBrandName: 'Gorenje, Asko Group'
                    }
            ]
            }
        }
    });
});
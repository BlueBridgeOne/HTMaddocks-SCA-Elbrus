define('ContactUs.ServiceController'
, [
    'ServiceController'
  , 'Application'
  , 'ContactUs.Model'
  ]
, function
  (
    ServiceController
  , Application
  , ContactUsModel
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'ContactUs.ServiceController'

  , post: function()
    {
      this.sendContent(ContactUsModel.create(this.data));
    }
  });
});
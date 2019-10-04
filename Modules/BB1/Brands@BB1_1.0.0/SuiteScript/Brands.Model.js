/*BB1 G Truslove July 2017*/
define('Brands.Model', [
    'SC.Model'
  ],
  function(SCModel) {
    return SCModel.extend({
      name: 'Brands',
      get: function(id) {
        //nlapiLogExecution("ERROR", "SCA Testing", "Role for list is " + nlapiGetContext().getRole());
        var filters = [],
          columns = [];

        filters.push(['internalid', 'is', id]);
        filters.push('AND');
        filters.push(['custrecord_brand_available_online', 'is', 'T']);


        columns.push(new nlobjSearchColumn('name'));
        //columns.push(new nlobjSearchColumn('custrecord_brand_manufacturer'));
        //columns.push(new nlobjSearchColumn('custrecord_brand_description'));
        columns.push(new nlobjSearchColumn('custrecord_brand_oem_distributor'));
        columns.push(new nlobjSearchColumn('custrecord_brand_logo_image'));


        var searchresults = nlapiSearchRecord('customrecord1', null, filters, columns);

        var res;
        var Info = {};
        for (var i in searchresults) {
          res = searchresults[i];
          Info = {
            internalid: res.getId(),
            name: res.getValue("name"),
            oem_distributor: res.getValue("custrecord_brand_oem_distributor"),
            logo_image: res.getText("custrecord_brand_logo_image")
          };
          break;
        }
        return Info;

        //manufacturer: res.getText("custrecord_brand_manufacturer"), // Not needed
        //description: res.getValue("custrecord_brand_description"),
      },
      list: function(category) {
        //nlapiLogExecution("ERROR", "SCA Testing", "Role for list is " + nlapiGetContext().getRole()+" "+nlapiGetContext().getRoleId());
        var filters = [],
          columns = [];

        filters.push(['isinactive', 'is', 'F']);
        filters.push('AND');
        filters.push(['custrecord_brand_available_online', 'is', 'T']);
        if (category) {
          filters.push('AND');
          if (category == "0") {
            var nums = [];
            for (var i = 0; i < 10; i++) {
              if (i > 0) {
                nums.push('OR');
              }
              nums.push(['name', 'startswith', i.toString()]);
            }
            filters.push(nums);
          } else {
            filters.push(['name', 'startswith', category]);
          }
        } else {
          filters.push('AND');
          filters.push(['custrecord_brand_promote', 'is', 'T']);
        }


        columns.push(new nlobjSearchColumn('name'));
        //columns.push(new nlobjSearchColumn('custrecord_brand_manufacturer'));
        //columns.push(new nlobjSearchColumn('custrecord_brand_description'));
        columns.push(new nlobjSearchColumn('custrecord_brand_oem_distributor'));
        columns.push(new nlobjSearchColumn('custrecord_brand_logo_image'));

        var searchresults = nlapiSearchRecord('customrecord1', null, filters, columns);

        var res;
        var List = [];
        for (var i in searchresults) {
          res = searchresults[i];

          List.push({
            internalid: +res.getId(),
            name: res.getValue("name"),
            oem_distributor: res.getValue("custrecord_brand_oem_distributor"),
            logo_image: res.getText("custrecord_brand_logo_image")
          });
        }
        return List;
      }
    });
  }
)
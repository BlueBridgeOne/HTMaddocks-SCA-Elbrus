/*BB1 G Truslove July 2017*/

function service (request)
{
	'use strict';

	var Application = require('Application');

	try
	{
		
			var method = request.getMethod()
			,	id = request.getParameter('internalid')
			,	Brands = require('Brands.Model')
			,	data = JSON.parse(request.getBody() || '{}')
			,category = request.getParameter('category');

			switch (method)
			{
				case 'GET':
					//If the id exist, sends the response of Brands.get(id), else sends the response of (Brands.list() || [])
					Application.sendContent(id ? Brands.get(id) : (Brands.list(category) || []));
				break;
				default: 
					// methodNotAllowedError is defined in ssp library commons.js
					Application.sendError(methodNotAllowedError);
			}
		
	}
	catch (e)
	{
		Application.sendError(e);
	}
}
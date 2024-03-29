/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ItemViews
define(
	'ItemRelations.RelatedItem.View'
,	[
		'ProductViews.Price.View'
	,	'GlobalViews.StarRating.View'
	,	'Backbone.CompositeView'

	,	'item_relations_related_item.tpl'

	,	'Backbone'
	]
,	function (
		ProductViewsPriceView
	,	GlobalViewsStarRatingView
	,	BackboneCompositeView

	,	item_relations_related_item_tpl

	,	Backbone
	)
{
	'use strict';

	// @class ItemViews.RelatedItem.View Responsible for rendering an item details. The idea is that the item rendered is related to another one in the same page
	// @extend Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: item_relations_related_item_tpl

		//@method initialize Override default method to make this view composite
		//@param {ItemViews.RelatedItem.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function ()
		{
			Backbone.View.prototype.initialize.apply(this, arguments);
			BackboneCompositeView.add(this);
		}

	,	childViews: {
			'Item.Price': function ()
			{
				return new ProductViewsPriceView({
					model: this.model
				,	origin: 'RELATEDITEM'
				});
			}
		,	'Global.StarRating': function ()
			{
				return new GlobalViewsStarRatingView({
					model: this.model
				,	showRatingCount: false
				});
			}
		}

		//@method getContext
		//@returns {ItemViews.RelatedItem.View.Context}
	,	getContext: function ()
		{
			//@class ItemViews.RelatedItem.View.Context
			return {
				//@property {String} itemURL
				itemURL: this.model.getFullLink()
				//@property {String} itemName
			,	itemName: this.model.get('_name') || this.model.Name
				// @property {ImageContainer} thumbnail
			,	thumbnail: this.model.getThumbnail()
				//@property {String} sku
			,	sku: this.model.get('_sku')
				// @property {String} itemId
			,	itemId: this.model.get('_id')
				// @property {Item.Model} model
			,	model: this.model

				//TODO MOVE THIS TO THE PRODUCT REVIEWS MODULE
				//@property {Boolean} showRating
			,	showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled

				//TODO RE-DESIGN THIS CODE (IT IS USED BY GOOGLE TAG MANAGER!)
				//@property {String} track_productlist_list
			,	track_productlist_list: this.model.get('track_productlist_list')
				//@property {String} track_productlist_position
			,	track_productlist_position: this.model.get('track_productlist_position')
				//@property {String} track_productlist_category
			,	track_productlist_category: this.model.get('track_productlist_category')

			,	newItem: this.model.get('_newItem')
			,	clearanceItem: this.model.get('_clearanceItem')
			,	offerItem: this.model.get('_offerItem')
			,	hidePrice: this.model.get('_hidePrice')
			,	hidePriceMessage: this.model.get('_hidePriceMessage')
			,	isDiscontinued: this.model.get('_discontinuedItem')
			,	clearanceQty: this.model.get('_stock')
			};
			//@class ItemViews.RelatedItem.View
		}
	});
});

//@class ItemViews.RelatedItem.View.Initialize.Options
//@property {Item.Model} model
{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<tr class="transaction-line-views-cell-navigable {{cellClassName}} item-{{itemId}}" data-id="{{itemId}}" data-item-type="{{itemType}}">
	<td class="transaction-line-views-cell-navigable-item-image" name="item-image">
		<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}">
	</td>
	<td class="transaction-line-views-cell-navigable-details" name="item-details">
		<p class="transaction-line-views-cell-navigable-product-description-anchor">
			{{#if isNavigable}}
				<a class="transaction-line-views-cell-navigable-product-title-anchor" {{{itemURLAttributes}}}>{{itemName}}</a>
			{{else}}
				<span class="transaction-line-views-cell-navigable-product-description">
					{{itemName}}
				</span>
			{{/if}}
		</p>
		<div class="transaction-line-views-cell-navigable-sku">{{translate 'Order Code: '}}{{sku}}</div>
		<p>
			<div data-view="Item.Price"></div>
		</p>
		
		{{#if showOptions}}
			<div data-view="Item.Options"></div>
		{{/if}}

		<!--{{#if specialOrder}}
				<div class="product-line-stock-msg-low"><i class="fa fa-star" aria-hidden="true"></i> {{specialOrderMessage}}</div>
		{{else}}
			<p>
				<span class="transaction-line-views-cell-navigable-stock" data-view="ItemViews.Stock.View"></span>
			</p>
		{{/if}}-->	

		<div data-view="StockDescription"></div>
	</td>
	<!--<td class="transaction-line-views-cell-navigable-item-unit-price" name="item-totalprice">
	{{#if showBlockDetail2}}
		<p>
		{{#if showDetail2Title}}
			<span class="transaction-line-views-cell-navigable-item-unit-price-label">{{detail2Title}} </span>
		{{/if}}
		<span class="transaction-line-views-cell-navigable-item-reason-value">{{detail2}}</span>
		</p>
	{{/if}}
	</td>-->
	<td class="transaction-line-views-cell-navigable-item-quantity" name="item-quantity">
		<p>
			<span class="transaction-line-views-cell-navigable-item-quantity-label">{{translate 'Quantity:'}} </span>
			<span class="transaction-line-views-cell-navigable-item-quantity-value">{{quantity}}</span>
		</p>
	</td>
	<td class="transaction-line-views-cell-navigable-amount" name="item-amount">
		<p>
		{{#if showDetail3Title}}
			<span class="transaction-line-views-cell-navigable-item-amount-label">{{detail3Title}} </span>
		{{/if}}
		<span class="transaction-line-views-cell-navigable-item-amount-value">{{detail3}}</span>
		{{#if showComparePrice}}
			<small class="transaction-line-views-cell-navigable-item-old-price">{{comparePriceFormatted}}</small>
		{{/if}}
		</p>
	</td>
</tr>




{{!----
Use the following context variables when customizing this template: 
	
	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.internalid (String)
	model.options (Array)
	model.shipaddress (undefined)
	model.shipmethod (undefined)
	model.location (String)
	model.fulfillmentChoice (String)
	itemId (Number)
	itemName (String)
	isNavigable (Boolean)
	rateFormatted (String)
	showOptions (Boolean)
	itemURLAttributes (String)
	quantity (Number)
	showDetail2Title (Boolean)
	detail2Title (String)
	detail2 (String)
	showBlockDetail2 (Boolean)
	showDetail3Title (Boolean)
	detail3Title (String)
	detail3 (String)
	showComparePrice (Boolean)
	comparePriceFormatted (String)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)

----}}

{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="facets-item-cell-grid" data-type="item" data-item-id="{{itemId}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<meta itemprop="url" content="{{url}}"/>

	<div class="facets-item-cell-grid-image-wrapper">
		{{#if newItem}}
		<div class="facets-item-cell-grid-new-item-tag">{{translate 'NEW'}}</div>
		{{/if}}

		{{#if clearanceItem}}
		<div class="facets-item-cell-grid-clearance-item-tag">{{translate 'CLEARANCE'}}</div>
		{{/if}}

		{{#if offerItem}}
		<div class="facets-item-cell-grid-offer-item-tag">{{translate 'OFFER'}}</div>
		{{/if}}	
		<a class="facets-item-cell-grid-link-image" href="{{url}}">
			<img class="facets-item-cell-grid-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
		</a>
		{{#if isEnvironmentBrowser}}
			<div class="facets-item-cell-grid-quick-view-wrapper">
				<a href="{{url}}" class="facets-item-cell-grid-quick-view-link" data-toggle="show-in-modal">
					<i class="facets-item-cell-grid-quick-view-icon"></i>
					{{translate 'Quick View'}}
				</a>
			</div>
		{{/if}}
	</div>

	<div class="facets-item-cell-grid-stock">
		{{#if specItem}}
			<div class="product-line-stock-msg-low"><i class="fa fa-star" aria-hidden="true"></i> {{specialOrderMessage}}</div>
		{{else}}
			<div data-view="Product.Stock.Info" class="facets-item-cell-grid-stock-message"></div>
		{{/if}}
	</div>

	<div class="facets-item-cell-grid-details {{#if discontinuedItem}}not-available{{/if}}">
		<div class="facets-item-cell-grid-sku" itemprop="sku">{{sku}}</div>
		<a class="facets-item-cell-grid-title" href="{{url}}">
			<span class="facets-item-cell-grid-description" itemprop="name">{{name}}</span>
		</a>

		<div class="facets-item-cell-grid-price" data-view="ItemViews.Price"></div>

		<!--{{#if showRating}}
			<div class="facets-item-cell-grid-rating" itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating" data-view="GlobalViews.StarRating">
			</div>
		{{/if}}-->
		{{#if hidePrice}}
			<div>{{hidePriceMessage}}</div>
		{{else}}
			<div data-view="Cart.QuickAddToCart"></div>
		{{/if}}
		<div data-view="ItemDetails.Options"></div>
		
		{{#if discontinuedItem}}<div class="discontinued-item"></div>{{/if}}

		{{#if clearanceItem}}
		<div class="facets-item-cell-grid-clearance-qty">{{translate 'Quantity Available: '}}{{clearanceQty}}</div>
		{{/if}}

		<div data-view="StockDescription"></div>
	</div>
</div>




{{!----
Use the following context variables when customizing this template: 
	
	itemId (Number)
	name (String)
	url (String)
	sku (String)
	isEnvironmentBrowser (Boolean)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	itemIsNavigable (Boolean)
	showRating (Boolean)
	rating (Number)

----}}

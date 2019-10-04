{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove Jun 2017
}}
<div class="product-details-full">
{{#if awaitingApproval}}
<h3>{{companyname}}</h3>
	{{translate 'Thank you for registering your interest in Maddocks Tradesite. Your account is awaiting approval.'}} 
	<br /><br /><br />
{{else}}
{{#if isLoggedIn}}

	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>
	<!--<div class="product-details-full-divider-desktop"></div>-->
	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>
		<div class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</div>

		<section class="product-details-full-main-content">
			<div class="product-details-full-content-header">
			</div>
			<div class="product-details-full-main-content-left">
			<div class="product-details-full-image-gallery-container">
				<div id="banner-image-top" class="content-banner banner-image-top"></div>
				<div data-view="Product.ImageGallery"></div>
				<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
				{{#if newItem}}
				<div class="product-details-new-item-tag">{{translate 'NEW'}}</div>
				{{/if}}

				{{#if clearanceItem}}
				<div class="product-details-clearance-item-tag">{{translate 'CLEARANCE'}}</div>
				{{/if}}

				{{#if offerItem}}
				<div class="product-details-offer-item-tag">{{translate 'OFFER'}}</div>
				{{/if}}
			</div>
			</div>

			<div class="product-details-full-main-content-right">
			<div class="product-details-full-divider"></div>

			<div class="product-details-full-main">
				{{#if isItemProperlyConfigured}}
					<div class="product-details-full-sku-rating-stock">
						<div data-view="Product.Sku" class="product-details-full-product-sku"></div>
						<!--<div class="product-details-full-rating" data-view="Global.StarRating"></div>-->
					
						<div class="stock-info">
							<div class="product-details-stock-info">
								{{#if specItem}}
									<div class="product-line-stock-msg-low">
										<i class="fa fa-star" aria-hidden="true"></i> {{specialOrderMessage}}
									</div>
								{{else}}
									<div data-view="Product.Stock.Info"></div>
								{{/if}}
							</div>
										
							{{#if clearanceItem}}
								<div class="product-details-full-clearance-qty">{{translate 'Quantity Available: '}} {{clearanceQty}}</div>
							{{/if}}
							<div class="product-details-full-substitutes" data-view="Substitutes"></div>
						</div>
					</div>
					<div data-cms-area="item_info" data-cms-area-filters="path"></div>
					{{#if isCurrentItemPurchasable}}
					<form id="product-details-full-form" data-action="submit-form" method="POST">

						<section class="product-details-full-info">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</section>
													
						{{#if isPriceEnabled}}
						<div class="product-details-order-item">
							{{#if hidePrice}}
								<div class="product-details-full-hide-price-message">{{hidePriceMessage}}</div>
							{{else}}
								<div data-view="Product.Price" class="product-details-full-product-price"></div>
								<div data-view="Quantity.Pricing"></div>
								<!--<div data-view="ProductDetails.AddToQuote"></div>-->
							{{/if}}
						</div>

						<div class="product-details-full-actions">
							<div class="product-details-full-actions-container">
								<div data-view="Quantity" class="product-details-full-quantity"></div>
							</div>
							<div class="product-details-full-actions-container">
								<div data-view="MainActionView" class="product-details-actions-addtobasket"></div>
							</div>
							<div class="product-details-full-actions-container">
								<div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
							</div>
						</div>
						{{/if}}	

						<div data-view="StockDescription"></div>

						<!--<div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div>-->

						<div data-view="Product.Options" class="product-details-your-notes"></div>

						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>

					</form>
					{{/if}}
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>

				<div data-view="ProductSpecifications"></div>

			</div>
			</div>

		</section>
		<!--<section data-view="Product.Information"></section>-->
		<div data-view="Productinfo"></div>
		<!--<div class="product-details-full-divider-desktop"></div>-->
		<div class="product-reviews-expander-head" data-view="ProductReviews.Center"></div>

		<div class="product-details-full-content-related-items">
			<div data-view="Related.Items"></div>
		</div>

		<div class="product-details-full-content-correlated-items">
			<div data-view="Correlated.Items"></div>
		</div>
		<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
	</article>
{{/if}}
{{/if}}
</div>

{{!----
Use the following context variables when customizing this template: 
	
	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

----}}

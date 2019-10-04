<div class="product-specification">
    <div class="product-specification-title">{{translate 'Product Specification'}}</div>
	<div class="product-specification-body">
		{{#if productClassification}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Product Classification: '}}</span>
				<span class="product-specification-line-value" itemprop="product-classification">{{productClassification}}</span>
			</div>
		{{/if}}

		{{#if itemWeight}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Item Weight (kg): '}}</span>
				<span class="product-specification-line-value" itemprop="weight">{{itemWeight}}</span>
			</div>
		{{/if}}

		{{#if packQty}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Pack Quantity: '}}</span>
				<span class="product-specification-line-value" itemprop="box-quantity">{{packQty}}</span>
			</div>
		{{/if}}

		{{#if boxQty}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Box Quantity: '}}</span>
				<span class="product-specification-line-value" itemprop="box-quantity">{{boxQty}}</span>
			</div>
		{{/if}}

		{{#if palletQty}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Pallet Quantity: '}}</span>
				<span class="product-specification-line-value" itemprop="pallet-quantity">{{palletQty}}</span>
			</div>
		{{/if}}

		{{#if ean}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'EAN Code: '}}</span>
				<span class="product-specification-line-value" itemprop="eancode">{{ean}}</span>
			</div>
		{{/if}}

		{{#if brandManufacturer}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Brand/Manufacturer: '}}</span>
				<span class="product-specification-line-value" itemprop="brand-manufacturer">{{brandManufacturer}}</span>
			</div>
		{{/if}}

		{{#if dimensions}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Item Dimensions: '}}</span>
				<span class="product-specification-line-value" itemprop="dimensions">{{dimensions}}</span>
			</div>
		{{/if}}

		{{#if commercialReference}}
			<div class="product-specification-line">
				<span class="product-specification-line-label">{{translate 'Commercial Reference: '}}</span>
				<span class="product-specification-line-value" itemprop="commercial-reference">{{commercialReference}}</span>
			</div>
		{{/if}}

	</div>
</div>

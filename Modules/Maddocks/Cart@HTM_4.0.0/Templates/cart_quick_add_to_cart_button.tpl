{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#if isCurrentItemPurchasable}}
	<div class="cart-quick-add-to-cart-button-container">
		<div class="cart-quick-add-to-cart-button">
			<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-quick-add-to-cart-button-button">
				<i class="fa fa-shopping-basket" aria-hidden="true"></i>
			</button/>
		</div>
	</div>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}

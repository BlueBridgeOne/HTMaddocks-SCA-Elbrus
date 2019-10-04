{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}


	<div class="quantity-pricing {{#unless showContent}}quantity-pricing-hidden{{/unless}} collapse in">
		<div class="quantity-pricing-container">
				<!-- content -->
				<div class="quantity-pricing-expander-body-container">
					<table>
						<thead>
							<tr>
								<th class="quantity-pricing-table-header-quantity">{{translate 'Quantity'}}</th>
								<th class="quantity-pricing-table-header-price">{{translate 'Price'}}</th>
							</tr>
						</thead>
						<tbody>
							{{#each priceSchedule}}
								<tr>
									{{#if maximumquantity}}
										<td class="quantity-pricing-table-body-quantity">{{minimumquantity}} – {{maximumquantity}}</td>
										{{#if is_range}}
											<td class="quantity-pricing-table-body-price">{{price_range.min_formatted}} - {{price_range.max_formatted}}</td>
										{{else}}
											<td class="quantity-pricing-table-body-price">{{price_formatted}}</td>
										{{/if}}
									{{else}}										
										<td class="quantity-pricing-table-body-quantity">{{minimumquantity}} +</td>
										{{#if is_range}}
											<td class="quantity-pricing-table-body-price">{{price_range.min_formatted}} - {{price_range.max_formatted}}</td>
										{{else}}
											<td class="quantity-pricing-table-body-price">{{price_formatted}}</td>				
										{{/if}}
									{{/if}}
								</tr>
							{{/each}}
						</tbody>
					</table>
				</div>
				<!-- /content -->
			</div>
		</div>
	</div>




{{!----
Use the following context variables when customizing this template: 
	
	isAccordion (Boolean)
	showContent (Boolean)
	priceSchedule (Boolean)
	isOpen (Boolean)
	itemKey (String)

----}}

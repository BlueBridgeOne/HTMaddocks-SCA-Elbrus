{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div id="{{cartOptionId}}-container" class="product-views-option-textarea" data-type="option" data-cart-option-id="{{cartOptionId}}" data-item-option-id="{{itemOptionId}}">
	<div class="{{cartOptionId}}-controls-group" data-validation="control-group">
		<!--{{#if showLabel}}
			<label class="product-views-option-textarea-label" for="{{cartOptionId}}">
				{{label}} {{#if showRequiredLabel}}<span class="product-views-option-textarea-label-required">*</span>{{/if}}
			</label>
		{{/if}}-->
		<div data-validation="control">			
			<textarea
				name="{{cartOptionId}}"
				id="{{cartOptionId}}"
				class="product-views-option-textarea-input"
				data-toggle="text-option"
				data-available="true"
				data-id="{{itemOptionId}}"
				placeholder="{{label}}">{{#if showSelectedValue}}{{selectedValue.internalId}}{{/if}}</textarea>
			
		</div>
	</div>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	model (Object)
	model.cartOptionId (String)
	model.itemOptionId (String)
	model.label (String)
	model.type (String)
	values (Array)
	showSelectedValue (Boolean)
	showRequiredLabel (Boolean)
	itemOptionId (String)
	cartOptionId (String)
	label (String)
	selectedValue (Object)
	isTextArea (Boolean)
	isEmail (Boolean)
	isText (Boolean)
	isCheckbox (Boolean)
	isDate (Boolean)
	isSelect (Boolean)
	showLabel (Boolean)
	showSmall (Boolean)

----}}

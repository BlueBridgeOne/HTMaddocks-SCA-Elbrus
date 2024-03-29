{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#if showWrapper}}
<div class="{{wrapperClass}}">
{{/if}}
	<label class="order-wizard-termsandconditions-module-label">
		<input type="checkbox" id="termsandconditions" name="termsandconditions" {{#if isAgreeTermCondition}}checked{{/if}}>
		{{translate 'By placing your order, you are agreeing to our <a data-type="term-condition-link-module" data-toggle="show-terms" href="#">Terms & Conditions</a>, <a data-type="term-condition-link-module" data-toggle="show-terms" href="/Website-Use" target="_blank">Terms of Website Use</a> and <a data-type="term-condition-link-module" data-toggle="show-terms" href="/Website-Acceptable-Use" target="_blank">Website Acceptable Use Policy</a>'}}
	</label>
{{#if showWrapper}}
</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}

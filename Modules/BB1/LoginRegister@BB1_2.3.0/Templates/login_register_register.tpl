{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove July 2017
}}

{{#unless showFormFieldsOnly}}
<p class="login-register-register-form-description">
	{{translate 'Maddocks UK Tradesite is strictly for <u><b>TRADE CUSTOMERS ONLY</b></u> and requires and account to use the facilities.<br /><br />If you would like to open a trade account with Maddocks please fill in the form below.'}}
</p>

<form class="login-register-register-form" method="POST" novalidate>
	<small class="login-register-register-required">{{translate 'Required <span class="login-register-register-form-required">*</span>'}}</small>

{{/unless}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-firstname">
			{{translate 'First Name <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input {{#if hasAutoFocus}} autofocus {{/if}} type="text" name="firstname" id="register-firstname" class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-lastname">
			{{translate 'Last Name <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="text" name="lastname" id="register-lastname" class="login-register-register-form-input">
		</div>
	</div>

	{{#if showCompanyField}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<label class="login-register-register-form-label" for="register-company">
				{{#if isCompanyFieldRequire}}
					{{translate 'Company <small class="login-register-register-form-required">*</small>'}}
				{{else}}
					{{translate 'Company'}} <small class="login-register-register-form-optional">{{translate '(optional)'}}</small>
				{{/if}}
			</label>
			<div class="login-register-register-form-controls" data-validation="control">
				<input type="text" name="company" id="register-company" class="login-register-register-form-input"/>
			</div>
		</div>
	{{/if}}

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-email">
			{{translate 'Email Address <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="email" name="email" id="register-email" class="login-register-register-form-input" placeholder="{{translate 'your@email.com'}}">
			<p class="login-register-register-form-help-block">
				<small>
					{{translate 'We need your email address to contact you about your order.'}}
				</small>
			</p>
		</div>
	</div>
	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-password">
			{{translate 'Password <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password" id="register-password" class="login-register-register-form-input">
		</div>
	</div>

	<div class="login-register-register-form-controls-group" data-validation="control-group">
		<label class="login-register-register-form-label" for="register-password2">
			{{translate 'Re-Enter Password <small class="login-register-register-form-required">*</small>'}}
		</label>
		<div class="login-register-register-form-controls" data-validation="control">
			<input type="password" name="password2" id="register-password2" class="login-register-register-form-input">
		</div>
	</div>

	<div class="address-edit-fields-group" data-input="addr1" data-validation="control-group">
		<label class="address-edit-fields-group-label" for="{{manage}}addr1">
			{{translate 'Address'}} <span class="address-edit-fields-input-required">*</span>
		</label>
		<div  class="address-edit-fields-group-form-controls" data-validation="control">
			<input type="text" class="address-edit-fields-group-input" id="{{manage}}addr1" name="addr1" value="{{addressLine1}}">
			<p class="address-edit-fields-input-help">{{translate 'Example: 1234 Main Street'}}</p>
		</div>
	</div>

	{{#if showAddressFormSecondAddress}}
	<div class="address-edit-fields-group address-edit-fields-group-big" data-input="addr2">
		<label for="{{manage}}addr2" class="address-edit-fields-addr2-optional-label">
			{{translate '(optional)'}}
		</label>
		<div>
			<input type="text" class="address-edit-fields-group-input" id="{{manage}}addr2" name="addr2" value="{{addressLine2}}">
			<p class="address-edit-fields-input-help">{{translate 'Example: Apt. 3 or Suite #1516'}}</p>
		</div>
	</div>
	{{/if}}
	<div class="address-edit-fields-group" data-input="city" data-validation="control-group">
		<label class="address-edit-fields-group-label" for="{{manage}}city">
			{{translate 'City'}} <span class="address-edit-fields-input-required">*</span>
		</label>
		<div  class="address-edit-fields-group-form-controls" data-validation="control">
			<input type="text" class="address-edit-fields-group-input" id="{{manage}}city" name="city" value="{{city}}">
		</div>
	</div>

	<div class="address-edit-fields-group {{#unless showCountriesField}} hide {{/unless}}" data-view="CountriesDropdown" data-input="country" data-validation="control-group">
	</div>

	<div class="address-edit-fields-group" data-input="state" data-view="StatesView" data-validation="control-group">
	</div>

	<div class="address-edit-fields-group" data-input="zip" {{#if isZipOptional}} style="display: none;" {{/if}} data-validation="control-group">
		<label class="address-edit-fields-group-label" for="{{manage}}zip">
			{{translate 'Zip Code'}} <span class="address-edit-fields-input-required">*</span>
		</label>
		<div  class="address-edit-fields-group-form-controls" data-validation="control">
			<input type="text" class="address-edit-fields-group-input-zip" id="{{manage}}zip" name="zip" value="{{zip}}" data-type="zip">
			<p class="address-edit-fields-input-help">{{translate 'Example: 94117'}}</p>
		</div>
	</div>


	{{#if isRedirect}}
		<div class="login-register-register-form-controls-group" data-validation="control-group">
			<div class="login-register-register-form-controls" data-validation="control">
				<input value="true" type="hidden" name="redirect">
			</div>
		</div>
	{{/if}}

	<div class="login-register-register-form-controls-group">
		<label class="login-register-register-form-label">
			<input type="checkbox" name="emailsubscribe" id="register-emailsubscribe" value="T" {{#if isEmailSubscribeChecked}} checked {{/if}}>
			{{translate 'Yes, Please sign me up for $(0) exclusive offers and promotions' siteName}}
		</label>
	</div>

	<div class="login-register-register-form-messages" data-type="alert-placeholder"></div>

	<p class="login-register-register-form-temps">
	{{translate 'By registering, you are agreeing to out <a href="/terms-conditions">Terms & Conditions</a>, <a href="/terms-of-website-use">Terms of Website Use</a> and <a href="website-acceptable-use-policy">Website Acceptable Use Policy</a>.'}}
</p>

{{#unless showFormFieldsOnly}}
	<div class="login-register-register-form-controls-group">
		<button type="submit" class="login-register-register-form-submit">
			{{translate 'Create Account'}}
		</button>
	</div>
</form>
{{/unless}}




{{!----
Use the following context variables when customizing this template: 
	
	showCompanyField (Boolean)
	isCompanyFieldRequire (Boolean)
	siteName (String)
	showFormFieldsOnly (Boolean)
	isRedirect (Boolean)
	hasAutoFocus (Boolean)

----}}

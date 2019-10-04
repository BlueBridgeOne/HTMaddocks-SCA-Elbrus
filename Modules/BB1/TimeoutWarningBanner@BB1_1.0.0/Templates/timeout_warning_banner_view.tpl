{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Truslove Aug 2017
}}

{{#if showBanner}}
	<div class="timeout-warning-banner-view alert" role="alert">
		<div>
			{{{TimeoutMessage}}}
		</div>
			<button class="timeout-warning-banner-view-close-button" data-action="close-message" type="button" data-dismiss="alert">&times;</button>
		
	</div>
{{/if}}

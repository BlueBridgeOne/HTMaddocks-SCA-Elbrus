{{!BB1 G Truslove July 2017}}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 brands-promote-col brands-col">
	<div class="brands-promote">
		<a class="brands-promote-button" {{#if isLoggedIn}}href="/search?keywords={{name}}"{{else}}href="{{register}}"{{/if}} title="{{name}}">
			{{#if logo_image}}
			<img class="brands-image brands-promote-height" src="{{logo_image}}" />
			{{else}}
			<table class="brands-text-table" cellspacing="0"><tr><td class="brands-text brands-promote-height">{{name}}</td></tr></table>
			{{/if}}
		</a>
	</div>
</div>
{{!BB1 G Truslove July 2017}}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 brands-col">
	{{#equals oem_distributor 'T'}}
	<a class="button-large button-primary brands-button" {{#if isLoggedIn}}href="/search?keywords={{name}}"{{else}}href="{{register}}"{{/if}} title="{{name}}">
		{{#if logo_image}}
		<img class="brands-image" src="{{logo_image}}" />
		{{else}}
		<table class="brands-text-table" cellspacing="0"><tr><td class="brands-text">{{name}}</td></tr></table>
		{{/if}}
	</a>
	{{/equals}}
	{{#notequals oem_distributor 'T'}}
	<a class="button-large button-secondary brands-button" {{#if isLoggedIn}}href="/search?keywords={{name}}"{{else}}href="{{register}}"{{/if}} title="{{name}}">
		{{#if logo_image}}
		<img class="brands-image" src="{{logo_image}}" />
		{{else}}
		<table class="brands-text-table" cellspacing="0"><tr><td class="brands-text">{{name}}</td></tr></table>
		{{/if}}
	</a>
	{{/notequals}}
</div>
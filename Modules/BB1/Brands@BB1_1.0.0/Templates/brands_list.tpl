{{!BB1 G Truslove July 2017}}
<div class="cms-landing-page cms-content">

	<h1>Brands beginning with '{{category}}'</h1>
	<p>We are authorised distributors for those brands listed in <span class="brands-yellow">yellow</span>.</p>
	<p>Click any of the brand names listed below to see a selection of the parts we can offer.</p>
	<div class="row" data-view="Brands.Collection">
	</div>
	<br />
	<div class="row">
		{{#each categories}}
		<div class="col-lg-1 col-md-2 col-sm-2 col-xs-3"><a class="button-medium button-tertiary brands-category-button" href="/brands/{{this}}">{{this}}</a></div>
		{{/each}}
	</div>
</div>
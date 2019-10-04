{{!BB1 G Truslove July 2017}}
<div class="cms-landing-page cms-content">
	
	<h1>{{translate "Brands"}}</h1>
	<p class="brands-text">{{translate "Maddocks is one of Europe's leading distributors of replacement parts for commercial and domestic appliances. We can supply replacement parts for most major brands and manufacturers."}}</p>
	<div class="row" data-view="Brands.Collection">
	</div>
	<div class="brands-divider"></div>
	
	<h4>{{translate "Choose A Brand Category"}}</h4>
	<p class="brands-text">{{translate "Click any of the brand categories listed below to see a selection of the brands we can offer."}}</p>
	<div class="row">
		{{#each categories}}
		<div class="brand-category"><a class="brands-category-button" href="/Brands/{{this}}">{{this}}</a></div>
		{{/each}}
	</div>
</div>
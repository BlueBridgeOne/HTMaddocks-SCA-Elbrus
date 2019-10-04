{{!BB1 G Truslove July 2017}}
<div class="cms-landing-page cms-content">

	<h1>{{translate "Brands beginning with"}} '{{category}}'</h1>
	<p class="brands-text">{{translate 'We are authorised distributors for those brands listed in <span class="brands-yellow">yellow</span>.'}}</p>
	<p class="brands-text">{{translate "Click any of the brand names listed below to see a selection of the parts we can offer."}}</p>
	<div class="row" data-view="Brands.Collection">
	</div>
	<div class="brands-divider"></div>
	<h4>Choose A Brand Category</h4>
	<div class="row brand-category-container">
		{{#each categories}}
		<div class="brand-category"><a class="brands-category-button" href="/Brands/{{this}}">{{this}}</a></div>
		{{/each}}
	</div>
</div>
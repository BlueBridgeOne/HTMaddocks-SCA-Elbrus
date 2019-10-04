{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}


<div class="product-details-information-content">
	{{#if showInformation}}
		{{#each details}}
			{{!-- Mobile buttons --}}
			<button class="product-details-information-pusher" data-target="product-details-information-{{ @index }}" data-type="sc-pusher">
				{{ name }} <i></i>
				<p class="product-details-information-hint"> {{{trimHtml content 150}}} </p>
			</button>
		{{/each}}

		<div class="product-details-information-content-container">

			<div id="banner-content-top" class="content-banner banner-content-top"></div>

			<div role="tabpanel">
				{{!-- When more than one detail is shown, these are the tab headers  --}}
				<ul class="product-details-information-content-tabs" role="tablist">
						<li class="product-details-information-tab-title active" role="presentation">
							<a href="#" data-action="selected-tab" data-id="{{@index}}" data-target="#product-details-information-tab-moreaboutthisproduct" data-toggle="tab">{{translate 'More About This Product'}}</a>
						</li>
					{{#each details}}
						<li class="product-details-information-tab-title" role="presentation">
							<a href="#" data-action="selected-tab" data-id="{{@index}}" data-target="#product-details-information-tab-{{@index}}" data-toggle="tab">{{name}}</a>
						</li>
					{{/each}}
						<li class="product-details-information-tab-title" role="presentation">
							<a href="#" data-action="selected-tab" data-id="{{@index}}" data-target="#product-details-information-tab-reviews" data-toggle="tab"><i class="fa fa-star" aria-hidden="true"></i>{{translate ' Technical Feedback &amp; Reviews'}}</a>
						</li>
				</ul>
				{{!-- Tab Contents --}}
				<div class="product-details-information-tab-content" data-type="information-content" data-action="tab-content">
						<div role="tabpanel" class="product-details-information-tab-content-panel active" id="product-details-information-tab-moreaboutthisproduct" itemprop="{{itemprop}}" data-action="pushable" data-id="product-details-information-{{ @index }}">
							<div id="product-details-information-tab-content-container-{{@index}}" class="product-details-information-tab-content-container" data-type="information-content-text"><div data-view="Productinfo"></div></div>
						</div>
					{{#each details}}
						<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-{{@index}}" itemprop="{{itemprop}}" data-action="pushable" data-id="product-details-information-{{ @index }}">
							{{#if ../showHeader}}<h3 class="product-details-information-tab-content-panel-title">{{name}}</h3>{{/if}}
							<div id="product-details-information-tab-content-container-{{@index}}" class="product-details-information-tab-content-container" data-type="information-content-text">{{{content}}}</div>
						</div>
					{{/each}}
						<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-reviews" itemprop="{{itemprop}}" data-action="pushable" data-id="product-details-information-{{ @index }}">
							<div id="product-details-information-tab-content-container-{{@index}}" class="product-details-information-tab-content-container" data-type="information-content-text"><div data-view="ProductReviews.Center"></div></div>
						</div>
					<div class="product-details-information-tab-action" data-type="information-content-text-actions">
						<a href="#" class="product-details-information-tab-action-more" data-action="show-more">{{translate 'See More'}}</a>
						<a href="#" class="product-details-information-tab-action-less" data-action="show-more">{{translate 'See Less'}}</a>
					</div>
				</div>
			</div>
			<div id="banner-content-bottom" class="content-banner banner-content-bottom"></div>
		</div>
	{{/if}}
</div>


{{!----
Use the following context variables when customizing this template: 
	
	showInformation (Boolean)
	showHeader (Boolean)
	details (Array)

----}}

<div class="product-details-information-content">
	<button class="product-details-information-pusher" data-target="product-details-information-1" data-type="sc-pusher">
		{{translate 'Additional Information'}} <i></i>
	</button>
	{{#if documentDownloads}}
	<button class="product-details-information-pusher" data-target="product-details-information-2" data-type="sc-pusher">
		{{translate 'Documentation'}} <i></i>
	</button>
	{{/if}}
	{{#if threeSixtyDegreeView}}
	<button class="product-details-information-pusher" data-target="product-details-information-3" data-type="sc-pusher">
		{{translate '360<span class="degrees">&deg;</span> Degree View'}} <i></i>
	</button>
	{{/if}}
	{{#if videoContent}}
	<button class="product-details-information-pusher" data-target="product-details-information-4" data-type="sc-pusher">
		{{translate 'Video'}} <i></i>
	</button>
	{{/if}}

	<div class="product-details-information-content-container">
		<div id="banner-content-top" class="content-banner banner-content-top"></div>
			<div role="tabpanel">
				{{!-- When more than one detail is shown, these are the tab headers  --}}
				<ul class="product-details-information-content-tabs" role="tablist">
					<li class="product-details-information-tab-title active" role="presentation">
						<a href="#" data-action="selected-tab" data-id="1" data-target="#product-details-information-tab-1" data-toggle="tab">{{translate 'Additional Information'}}</a>
					</li>
					{{#if documentDownloads}}
					<li class="product-details-information-tab-title" role="presentation">
						<a href="#" data-action="selected-tab" data-id="2" data-target="#product-details-information-tab-2" data-toggle="tab">{{translate 'Documentation'}}</a>
					</li>
					{{/if}}
					{{#if threeSixtyDegreeView}}
					<li class="product-details-information-tab-title" role="presentation">
						<a href="#" data-action="selected-tab" data-id="3" data-target="#product-details-information-tab-3" data-toggle="tab">{{translate '360<span class="degrees">&deg;</span> Degree View'}}</a>
					</li>
					{{/if}}
					{{#if videoContent}}
					<li class="product-details-information-tab-title" role="presentation">
						<a href="#" data-action="selected-tab" data-id="4" data-target="#product-details-information-tab-4" data-toggle="tab">{{translate 'Video'}}</a>
					</li>
					{{/if}}
					<li class="product-details-information-tab-title" role="presentation">
						<a href="#" data-action="selected-tab" data-id="5" data-target="#product-details-information-tab-5" data-toggle="tab"><i class="fa fa-wrench" aria-hidden="true"></i> {{translate 'Product Reviews'}}</a>
					</li>
				</ul>

				<!-- Tab Contents -->
				<div class="product-details-information-tab-content" data-type="information-content" data-action="tab-content">
					<div role="tabpanel" class="product-details-information-tab-content-panel active" id="product-details-information-tab-1" data-action="pushable" data-id="product-details-information-1">
						<div id="product-details-information-tab-content-container-1" class="product-details-information-tab-content-container" data-type="information-content-text">
							{{#if fittingInformation}}
							<div class="product-info-title">{{translate 'Fitting'}}</div>
							<div class="product-info-description">{{{fittingInformation}}}</div>
							{{/if}}

							{{#if otherInformation}}
							<div class="product-info-title">{{translate 'Other Information'}}</div>
							<div class="product-info-description">{{{otherInformation}}}</div>
							{{/if}}

							{{#if genuineCompatible}}
							<div class="product-info-title">{{translate 'Product Classification'}}</div>
							<div class="product-info-description">{{{genuineCompatible}}}</div>
							{{/if}}

							{{#if manufacturerInformation}}
							<div class="product-info-title">{{translate 'Manufacturer Information'}}</div>
							<div class="product-info-description">{{{manufacturerInformation}}}</div>
							{{/if}}

							{{#if consumablesDescription}}
							<div class="product-info-title">{{translate 'Consumables'}}</div>
							<div class="product-info-description">{{{consumablesDescription}}}</div>
							{{/if}}

							{{#if bulkOrdering}}
							<div class="product-info-title">{{translate 'Bulk Ordering'}}</div>
							<div class="product-info-description">{{{bulkOrdering}}}</div>
							{{/if}}

							{{#if relatedSubstitutes}}
							<div class="product-info-title">{{translate 'Related Items &amp; Substitutes'}}</div>
							<div class="product-info-description">{{{relatedSubstitutes}}}</div>
							{{/if}}

							<div class="product-info-title">{{translate 'Still Having Trouble?'}}</div>
							<div class="product-info-description"><p>{{stillHavingTrouble}}</p></div>
						</div>
					</div>
					{{#if documentDownloads}}
						<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-2" data-action="pushable" data-id="product-details-information-2">
							<div id="product-details-information-tab-content-container-2" class="product-details-information-tab-content-container" data-type="information-content-text">{{{documentDownloads}}}</div>
						</div>
					{{/if}}
					{{#if threeSixtyDegreeView}}
						<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-3" data-action="pushable" data-id="product-details-information-3">
							<div id="product-details-information-tab-content-container-3" class="product-details-information-tab-content-container" data-type="information-content-text">{{{threeSixtyDegreeView}}}</div>
						</div>
					{{/if}}
					{{#if videoContent}}	
						<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-4" data-action="pushable" data-id="product-details-information-4">
							<div id="product-details-information-tab-content-container-4" class="product-details-information-tab-content-container" data-type="information-content-text">{{{videoContent}}}</div>
						</div>
					{{/if}}

					<div role="tabpanel" class="product-details-information-tab-content-panel" id="product-details-information-tab-5" data-action="pushable" data-id="product-details-information-5">
						<div id="product-details-information-tab-content-container-5" class="product-details-information-tab-content-container" data-type="information-content-text">
							<div data-view="ProductReviews.Center"></div>
						</div>
					</div>
					
				</div>
			</div>
			<div id="banner-content-bottom" class="content-banner banner-content-bottom"></div>
		</div>
</div>
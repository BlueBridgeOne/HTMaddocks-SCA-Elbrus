{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="home">
	<!--<div class="home-banner-top">
		<p class="home-banner-top-message">
			{{translate 'Use promo code <strong>MADDOCKS2K17</strong> for <strong>15%</strong> off your next order'}}
		</p>
	</div>-->
	<div class="home-slider-container">
		<div class="home-image-slider">
			{{#if login}}
			<ul data-slider class="home-image-slider-list">
				{{#each carouselImages}}
					<li>
						<div class="home-slide-main-container">
							<a href="{{link}}">
								<img src="{{image}}" alt="{{altText}}" />
							</a>
						</div>
					</li>
				{{/each}}
			</ul>
			{{else}}
			<ul data-slider class="home-image-slider-list">
				{{#each carouselImagesOffline}}
					<li>
						<div class="home-slide-main-container">
							<a href="{{link}}">
								<img src="{{image}}" alt="{{altText}}" />
							</a>
						</div>
					</li>
				{{/each}}
			</ul>
			{{/if}}
		</div>
	</div>
	<div class="home-description">{{translate "<b>Incorporated in 1957</b>, Maddocks is a global company based in Cardiff, UK. We are a wholesale distributor of everything for commercial and domestic appliances. Spearheaded by the grandson of our original founder, we've always put our customers and suppliers at the heart of everything we do. Today, we're one of the leading distributors in the UK supplying quality spare parts."}}</div>
	
	{{#if login}}
	<div class="home-card-main">
	{{#each bottomBannerImages}}
      <div class="col-md-4">
      	<div class="home-card-img">
      		<img class="card-image" src="{{image}}" alt="" >
      		<div class="home-card-content">
	        	<span class="home-card-title">{{title}}</span>
	        	<p class="home-card-description">{{description}}</p>
	        	<div class="home-card-footer">
	        		<a href="{{link}}" class="btn home-card-btn-nth{{@index}}">{{btnText}}</a>
	        	</div>
        	</div>
        </div>
      </div>
    {{/each}}
	</div>
	{{else}}
	<div class="home-card-main">
	{{#each bottomBannerImagesOffline}}
      <div class="col-md-4">
      	<div class="home-card-img">
      		<img class="card-image" src="{{image}}" alt="" >
      		<div class="home-card-content">
	        	<span class="home-card-title">{{title}}</span>
	        	<p class="home-card-description">{{description}}</p>
	        	<div class="home-card-footer">
	        		<a href="{{link}}" class="btn home-card-btn-nth{{@index}}">{{btnText}}</a>
	        	</div>
        	</div>
        </div>
      </div>
    {{/each}}
	</div>
	{{/if}}

	
	<div class="row">
		<div class="col-sm-5 home-brands-left"><hr></div>
    	<div class="col-sm-2 home-brands-header-text">{{translate 'Popular Brands'}}</div>
    	<div class="col-sm-5 home-brands-right"><hr></div>
  	</div>
  	<div class="row" align="center">
		<div class="home-brands-header"></div>
		<div class="home-brands-header-text"></div>
		{{#if login}}
		{{#each homeBrands}}
      	<div class="col-lg-2 col-md-3 col-sm-4 col-xs-4">
	      	<div class="home-card-img">
	      		<a href="/search?keywords={{brandName}}" class="home-brands-link">
	      			<img class="brand-image" src="{{brandLogoUrl}}" alt="" >
	      		</a>
		    </div>
      	</div>
    	{{/each}}
    	{{else}}
    	{{#each homeBrands}}
      	<div class="col-lg-2 col-md-3 col-sm-4 col-xs-4">
	      	<div class="home-card-img">
	      		<img class="brand-image" src="{{brandLogoUrl}}" alt="" >
		    </div>
      	</div>
    	{{/each}}
    	{{/if}}
	</div>
	<div class="row" align="center">
		<div class="col-sm-5 home-brands-left"><hr></div>
    	<div class="col-sm-2"><a href="{{brandsPageUrl}}" class="btn home-brands-btn">{{translate 'View More Brands'}}</a></div>
    	<div class="col-sm-5 home-brands-right"><hr></div>
  	</div>
  	

	<div class="home-merchandizing-zone">
		<div data-id="your-merchandising-zone" data-type="merchandising-zone"></div>
	</div>

</div>

<div class="home-content-top" data-cms-area="home-content-top" data-cms-area-filters="path"></div>
<div class="home-content-mid" data-cms-area="home-content-mid" data-cms-area-filters="path"></div>
<div class="home-content-bottom" data-cms-area="home-content-bottom" data-cms-area-filters="path"></div>

{{!----
Use the following context variables when customizing this template: 
	
	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}

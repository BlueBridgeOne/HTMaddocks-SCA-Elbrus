/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Home
define(
	'Home.View'
,	[
		'SC.Configuration'
	,	'Profile.Model'
	,	'Utilities.ResizeImage'

	,	'home.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'Utils'
	]
,	function (
		Configuration
	,	ProfileModel
	,	resizeImage
	,	home_tpl

	,	Backbone
	,	jQuery
	,	_
	,	Utils
	)
{
	'use strict';

	//@module Home.View @extends Backbone.View
	return Backbone.View.extend({

		template: home_tpl

	,	title: _('Everything For Commercial & Domestic Appliances').translate()

	,	page_header: _('Maddocks UK Tradesite').translate()

	,	attributes: {
			'id': 'home-page'
		,	'class': 'home-page'
		}

	,	events:
		{
			'click [data-action=slide-carousel]': 'carouselSlide'
		}

	,	initialize: function ()
		{
			var self = this;
			ProfileModel.getPromise().done(function() {
				self.render();
			});

			this.windowWidth = jQuery(window).width();
			this.on('afterViewRender', function()
			{
				_.initBxSlider(self.$('[data-slider]'), {
					nextText: '<a class="home-gallery-next-icon"></a>'
				,	prevText: '<a class="home-gallery-prev-icon"></a>'
				});
			});

			var windowResizeHandler = _.throttle(function ()
			{
				if (_.getDeviceType(this.windowWidth) === _.getDeviceType(jQuery(window).width()))
				{
					return;
				}
				this.showContent();

				_.resetViewportWidth();

				this.windowWidth = jQuery(window).width();

			}, 1000);

			this._windowResizeHandler = _.bind(windowResizeHandler, this);

			jQuery(window).on('resize', this._windowResizeHandler);
		}

	,	destroy: function()
		{
			Backbone.View.prototype.destroy.apply(this, arguments);
			jQuery(window).off('resize', this._windowResizeHandler);
		}

		// @method getContext @return Home.View.Context
	,	getContext: function()
		{
			//var carouselImages = _.map(Configuration.get('home.carouselImages', []), function(url)
			//{
			//	return Utils.getAbsoluteUrlOfNonManagedResources(url);
			//});

			//var bottomBannerImages = _.map(Configuration.get('home.bottomBannerImages', []), function(url)
			//{
			//	return Utils.getAbsoluteUrlOfNonManagedResources(url);
			//});

			var profile = ProfileModel.getInstance(),
				is_loading = !_.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) &&  ProfileModel.getPromise().state() !== 'resolved',
				is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';

			return {
				login: is_loged_in
			,	profileModel: ProfileModel.getInstance()	
				// @class Home.View.Context
				// @property {String} imageResizeId
			,	imageHomeSize: Utils.getViewportWidth() < 768 ? 'homeslider' : 'main'
				// @property {String} imageHomeSizeBottom
			,	imageHomeSizeBottom: Utils.getViewportWidth() < 768 ? 'homecell' : 'main'
				// @property {Array} carouselImages
			,	brandsPageUrl: '/Brands'			
			,	carouselImages: [
	    			{
		    		image: _.getAbsoluteUrl('img/sca-slide-1.jpg')
		    		, link: '#'
		    		, altText: 'Maddocks UK Tradesite: Everything for Commercial & Domestic Appliances'
	    			}
	            ,   {
	            	image: _.getAbsoluteUrl('img/sca-slide-2.jpg')
	            	, link: '/Maddocks-UK-Tradesite'
	            	, altText: 'Welcome to Maddocks UK Tradesite Version 18.0 - Discover the NEW features'
	            	}
	            ,   {
	            	image: _.getAbsoluteUrl('img/sca-slide-3.jpg')
	            	, link: '/Corporate-Video'
	            	, altText: 'Description'
	            }
    			]
    		,	carouselImagesOffline: [
	    			{
		    		image: _.getAbsoluteUrl('img/sca-slide-1.jpg')
		    		, link: '#'
		    		, altText: 'Maddocks UK Tradesite: Everything for Commercial & Domestic Appliances'
	    			}
	            ,   {
	            	image: _.getAbsoluteUrl('img/sca-slide-3.jpg')
	            	, link: '/Corporate-Video'
	            	, altText: 'Description'
	            }
    			]	
				// @property {Array} bottomBannerImages
    		,	bottomBannerImages: [
	    			{
		    		image: _.getAbsoluteUrl('img/new-products-home-banner.jpg')
		    		, link: _('/ProductRange/New-Product-Lines').translate()
		    		, title: _('New Product Lines').translate()
		    		, description: _('Latest arrivals of genuine original and compatible parts').translate()
		    		, btnText: _('Shop Now').translate()
	    			}
	            ,   {
	            	image: _.getAbsoluteUrl('img/special-offers-home-banner.jpg')
	            	, link: _('/ProductRange/Special-Offers-Promotions').translate()
	            	, title: _('Special Offers').translate()
		    		, description: _('New deals every month on genuine original and compatible parts').translate()
		    		, btnText: _('Shop Now').translate()
	            	}
	            ,   {
	            	image: _.getAbsoluteUrl('img/corporate-video-home-banner.jpg')
	            	, link: _('/Corporate-Video').translate()
	            	, title: _('Corporate Video').translate()
		    		, description: _('Explore what we can do for our customers and suppliers').translate()
		    		, btnText: _('Watch Now').translate()
	            }
    			]

    		,	bottomBannerImagesOffline: [
	    			{
		    		image: _.getAbsoluteUrl('img/overview-home-banner.jpg')
		    		, link: _('/Maddocks-Overview').translate()
		    		, title: _('Overview of Maddocks').translate()
		    		, description: _('UK\'s No.1 trade-only distributor for everything for commercial & domestic appliances').translate()
		    		, btnText: _('Learn More').translate()
	    			}
	            ,   {
	            	image: _.getAbsoluteUrl('img/products-services-home-banner.jpg')
	            	, link: _('/Products-Services').translate()
	            	, title: _('Products & Services').translate()
		    		, description: _('Full range of spares, accessories and consumables for all appliances').translate()
		    		, btnText: _('Learn More').translate()
	            	}
	            ,   {
	            	image: _.getAbsoluteUrl('img/corporate-video-home-banner.jpg')
	            	, link: _('/Corporate-Video').translate()
	            	, title: _('Corporate Video').translate()
		    		, description: _('Explore what we can do for our customers and suppliers').translate()
		    		, btnText: _('Watch Now').translate()
	            }
    			]

    		,	homeBrands: [
    				{
    				brandLogoUrl: _.getAbsoluteUrl('img/aeg-home-brand.jpg')
    				, brandName: 'AEG'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/ametek-home-brand.jpg')
    				, brandName: 'Ametek'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/beko-home-brand.jpg')
    				, brandName: 'Beko'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/bosch-home-brand.jpg')
    				, brandName: 'Bosch'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/candy-home-brand.jpg')
    				, brandName: 'Candy'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/electrolux-home-brand.jpg')
    				, brandName: 'Electrolux'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/flymo-home-brand.jpg')
    				, brandName: 'Flymo'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/haier-home-brand.jpg')
    				, brandName: 'Haier'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/hoover-home-brand.jpg')
    				, brandName: 'Hoover'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/hotpoint-home-brand.jpg')
    				, brandName: 'Hotpoint'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/indesit-home-brand.jpg')
    				, brandName: 'Indesit'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/karcher-home-brand.jpg')
    				, brandName: 'Karcher'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/nilfisk-home-brand.jpg')
    				, brandName: 'Nilfisk'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/numatic-home-brand.jpg')
    				, brandName: 'Numatic'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/rangemaster-home-brand.jpg')
    				, brandName: 'Rangemaster'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/tefal-home-brand.jpg')
    				, brandName: 'Tefal'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/vax-home-brand.jpg')
    				, brandName: 'Vax'
    				}
    			,	{
    				brandLogoUrl: _.getAbsoluteUrl('img/whirlpool-home-brand.jpg')
    				, brandName: 'Whirlpool'
    				}	

    		]
    			// @class Home.View
			};
		}

	});



});

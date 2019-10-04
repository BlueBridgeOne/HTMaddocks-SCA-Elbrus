{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.

	BB1 G Tuslove Jun 2017
}}

<div data-view="Global.BackToTop"></div>
<div class="footer-content">

<div class="footer-content-banner">
			{{translate 'EVERYTHING FOR <b>COMMERCIAL & DOMESTIC</b> APPLIANCES'}}
		</div>

	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer" data-cms-area-filters="global"></div>

	<div class="footer-content-column">
		<h5 class="footer-content-title" >{{translate 'Help & Info'}}</h5>

				{{#each footerNavigationLinks}}
				{{#if show}}
				{{#equals this.placement "Help & Info"}}
					<p>
						<a class="bluelink" {{objectToAtrributes item}}>
							{{translate text}}
						</a>
					</p>
					{{/equals}}
					{{/if}}
				{{/each}}
	</div>
	<div class="footer-content-column">
		<h5 class="footer-content-title" >{{translate 'Customer Support'}}</h5>
			{{#each footerNavigationLinks}}
			{{#if show}}
			{{#equals this.placement "Customer Support"}}
					<p>
						<a class="bluelink" {{objectToAtrributes item}}>
							{{translate text}}
						</a>
					</p>
					{{/equals}}
					{{/if}}
				{{/each}}
		
	</div>
	<div class="footer-content-column">
		<h5 class="footer-content-title" >{{translate 'Get in Touch'}}</h5>
			<p class="bluetext"><strong>Maddocks</strong><br />Unit E1-E6<br />Capital Point<br />Capital Business Park<br />Parkway<br />Cardiff<br />CF3 2PY<br />United Kingdom</p>

			<p class="bluetext"><i class="fa fa-envelope-o" aria-hidden="true"></i> <a class="bluelink" href="mailto:info@htmaddocks.co.uk"> <strong> info@htmaddocks.co.uk</strong></a></p>
			<p class="bluetext"><i class="fa fa-phone" aria-hidden="true"></i> <a class="bluelink" href="tel:+44 (0)29 2167 8888"> <strong> +44 (0)29 2167 8888</strong></a></p>
	</div>

	<div class="footer-content-column">
			<h5 class="footer-content-title" >{{translate 'Stay Connected'}}</h5>
			<p class="bluetext">{{translate 'Sign up for updates and exclusive offers'}}</p>
		<div data-view="FooterContent"></div>
		<p><a href="https://www.facebook.com/HTMaddocks" target="_new"><i class="facebook-icon"></i></a>
		<a href="https://twitter.com/HTMaddocks" target="_new"><i class="twitter-icon"></i></a>
		<a href="https://plus.google.com/114452913340107101478" target="_new"><i class="google-plus-icon"></i></a></p>
	</div>
	<div class="footer-content-payment">
			{{translate 'We accept the following methods of payment:'}}
			<p><img src="/store/img/payments.png" alt="VISA MasterCard Maestro PayPal" /></p>
		</div>
<div class="footer-content-company">
			{{translate 'Maddocks is the business trading name of H.T.Maddocks &amp; Son (Whitchurch) Ltd. established in 1957 under Company Registration Number 00595445'}}
		</div>
	<div class="footer-content-copyright">
			{{translate '&copy; H.T.Maddocks &amp; Son (Whitchurch) Ltd (2018) [Version 18.0]'}}
		</div>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}


<div class="latest-news-container">
	<h1>{{translate "Latest News"}}</h1>
	
	<div class="latest-news-panel-container">
	{{#each model}}
		<div class="latest-news-panel">
			<div class="latest-news-panel-heading">
				<div class="latest-news-panel-title"><i class="fa fa-newspaper-o" aria-hidden="true"></i> {{this.title}}</div>
				<div class="latest-news-panel-published-date">{{this.creationdate}}</div>
			</div>
			<div class="latest-news-panel-featured-image"><img src={{this.image}}></div>	
			<div class="latest-news-panel-content">{{{this.text}}}</div>
		</div>
	{{/each}}
	</div>
</div>
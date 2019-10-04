
<div class="cms-landing-page cms-content">
	<h1>{{translate "Appliance Error Codes"}}</h1>
	
	<div class="appliance-error-codes-information">
		{{translate "Before reading the information provided below, please understand that error codes are used as a guide. Error codes do not usually point to the precise component that is faulty. They give you an idea of where to start looking for the fault. Please read the information thoroughly as it is there to help you understand error codes and to keep you safe."}}
	</div>
	<div class="appliance-error-codes-information">
		{{translate "The information provided on this page is updated regularly. If you can't find what you're looking for, speak to one of our more technical members of staff by emailing"}} <a href="mailto:support@htmaddocks.co.uk">support@htmaddocks.co.uk</a>
	</div>

	<div class="appliance-error-codes-search-form">
		<input type="text" id="errorCodeSearch" onkeyup="errorCodeSearch()" placeholder="Search for error code..." class="appliance-error-codes-search-form-input">
	</div>
	<div class="appliance-error-codes-search-form-divider">{{translate "- OR -"}}</div>
	<div class="appliance-error-codes-search-form">
		<select id="brandSearch" onchange="brandSearch()" class="appliance-error-codes-search-form-select" placeholder="Please Select a Brand...">
	  		<option value="">Please Select a Brand...</option>
	  		{{#each errorBrands}}
	  		<option value="{{errorBrandName}}">{{errorBrandName}}</option>
	  		{{/each}}
		</select>
	</div>

	<div class="appliance-error-codes-container">
		<table id="errorCodeList" class="appliance-error-codes-table">
			<thead>
				<tr>
					<th>{{translate "Error Code"}}</th>
					<th>{{translate "Brand"}}</th>
					<th>{{translate "Appliance Type"}}</th>
					<th>{{translate "Description"}}</th>
				</tr>
			</thead>
			<tbody class="appliance-error-codes-tbody">
				{{#each model}}
				<tr>
					<td class="appliance-error-codes-error">{{this.applianceErrorCode}}</td>
					<td class="appliance-error-codes-brand">{{this.applianceBrand}}</td>
					<td class="appliance-error-codes-type">{{this.applianceType}}</td>
					<td class="appliance-error-codes-description">
					<span class="bold-label">{{translate "Error Description: "}}</span>
					<p>{{{this.errorDescription}}}</p>
					<span class="bold-label">{{translate "Error Solution: "}}</span>
					<p>{{{this.errorSolution}}}</p>
					</td>
				</tr>
				{{/each}}
			</tbody>
		</table>
	</div>
</div>

<div class="appliance-error-codes-scripts" data-cms-area="appliance-error-codes-scripts" data-cms-area-filters="path"></div>
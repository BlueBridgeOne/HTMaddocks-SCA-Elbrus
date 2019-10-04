{{#if model.item.custitem_substitute1}}
<div class="substitutes">
    <div class="substitutes-divider">
        <div class="substitutes-expander-head">
            <a class="substitutes-expander-head-toggle {{#unless showOpenedAccordion}}collapsed{{/unless}}" data-toggle="collapse" data-target="#sub-items" aria-expanded="true" aria-controls="sub-items"><i class="fa fa-exchange" aria-hidden="true"></i> {{translate 'Substitute Item(s) Available'}} <i class="substitutes-expander-toggle-icon"></i>
			</a>
		</div>
		<div class="substitutes-expander-body collapse {{#if showOpenedAccordion}}in{{/if}}" id="sub-items" data-target="#sub-items">
			<div class="substitutes-expander-container">
				<table class="substitutes-table">
                    <tbody>
                        <tr>
                            <td class="substitute_img">
                                <a href="/{{model.item.custitem_substitute1}}">
                                <img src="../assets/images/products/{{model.item.custitem_substitute1}}_main-01.jpg" width="60" height="60" alt=""></a>
                            </td>
                            <td class="substitute_number">
                                <a href="/{{model.item.custitem_substitute1}}">{{model.item.custitem_substitute1}}</a>
                            </td>
                        </tr>
                        {{#if model.item.custitem_substitute2}}
                        <tr>
				            <td class="substitute_img">
                                <a href="/{{model.item.custitem_substitute2}}">
                                <img src="../assets/images/products/{{model.item.custitem_substitute2}}_main-01.jpg" width="60" height="60" alt=""></a>
                            </td>
                            <td class="substitute_number">
                                <a href="/{{model.item.custitem_substitute2}}">{{model.item.custitem_substitute2}}</a>
                            </td>
                        </tr>
                        {{/if}}
                    </tbody>
                </table>
			</div>
		</div>
	</div>
</div>
{{/if}}
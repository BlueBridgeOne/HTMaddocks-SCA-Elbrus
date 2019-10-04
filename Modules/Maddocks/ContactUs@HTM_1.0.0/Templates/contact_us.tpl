<section class="contactus-container">
    <h1>{{translate 'Contact Us'}}</h1>
    <div class="row">
        <div class="col-md-6">
            <h5>{{translate 'Contact Form'}}</h5>
            <div class="contactus-text">{{translate 'If you have a question or query, you can contact us via the form below and we\'ll get back to you as soon as possible.'}}</div>

            <p class="contactus-required">{{translate 'Required'}}*</p>

            <form class="contactus-form">
                <fieldset>
                    <div class="contactus-firstname" data-input="firstname" data-validation="control-group">
                        <label for="firstname">{{translate 'First Name'}}<small class="contactus-required">*</small></label>
                        <span data-validation="control">
                            <input name="firstname" type="text" id="firstname">
                        </span>
                    </div>
                    <div class="contactus-lastname" data-input="lastname" data-validation="control-group">
                        <label for="lastname">{{translate 'Last Name'}}<small class="contactus-required">*</small></label>
                        <span data-validation="control">
                            <input name="lastname" type="text" id="lastname">
                        </span>
                    </div>
                    <div class="contactus-email" data-input="email" data-validation="control-group">
                        <label for="email">{{translate 'Email'}}<small class="contactus-required">*</small></label>
                        <span data-validation="control">
                            <input name="email" type="text" id="email">
                        </span>
                    </div>
                    <div class="contactus-subject" data-input="title" data-validation="control-group">
                        <label for="title">{{translate 'Subject'}}<small class="contactus-required">*</small></label>
                        <span data-validation="control">
                            <input name="title" type="text" id="title">
                        </span>
                    </div>
                    <div class="contactus-message" data-input="incomingmessage" data-validation="control-group">
                        <label for="incomingmessage">{{translate 'Message'}}<small class="contactus-required">*</small></label>
                        <span data-validation="control">
                            <textarea name="incomingmessage" type="text" id="incomingmessage"></textarea>
                        </span>
                    </div>
                </fieldset>

                <div class="contactus-button-container">
                    <button class="contactus-button-submit" type="submit">{{translate 'Submit'}}</button>
                </div>
            </form>
        </div>
        <div class="col-md-6">
            <h5>{{translate 'Contact Information'}}</h5>
            <div class="contactus-info">{{translate 'Telephone:'}} <a href="tel:02921678888">+44 (0)29 2167 8888</a></div>
            <div class="contactus-info">{{translate 'Email:'}} <a href="mailto:info@htmaddocks.co.uk">info@htmaddocks.co.uk</a></div>
            <div class="contactus-info">{{translate 'Web:'}} <a href="https://www.htmaddocks.co.uk">www.htmaddocks.co.uk</a></div>
            <div class="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.396148678553!2d-3.1144322298169107!3d51.500719994365404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d6ecf6318b3%3A0x1d45dcef5a7360bc!2sH.T.+Maddocks+%26+Son+(Whitchurch)+Ltd!5e1!3m2!1sen!2suk!4v1508161390594" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>            
        </div>
    </div>
</section>
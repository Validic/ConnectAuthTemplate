# ConnectAuthTemplate

Validic Connect Partner Authorization Page Frontend Template

This template is intended to serve as a guide for setting up the front-end of your Validic Connect Authorization page. Feel free to use it as-is or customize it to your brand -- we only ask that you follow a few best practices outlined in the Validic Connect documentation.

This template uses Twitter Bootstrap for basic styling and requires jQuery, both of which are included via CDN. If you want to use your own front-end framework, you can remove the links to the Bootstrap stylesheet and javascript.

If you want to use this template, there are a few items you'll need to customize:

1.  Set the title of the page to reflect your brand.
2.  Update the links to the stylesheet and javascript files if you move them.
3.  Update the customer logo image alt-text. The image tag is in auth_template.js because the image is set dynamically via a url encoded parameter that links to the customer logo.
4.  Update the partner logo image source and alt-text to fit your brand
5.  Update the form-signin-heading text with your name
6.  Update the 'Forgot Password' and 'Create an Account' links to point to the appropriate location for these actions.

Please keep the classes that begin with 'vc-' on the email, password, and submit button elements. These help with our automated testing of your integration.

Open an issue or contact product-support@validic.com with any questions about this template.

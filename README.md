# piq-display
A basic HTML page that shows quotes from playa-inspiration-quotes.net, namely meant as a stand alone display for projections.

_Note: setting up this display requires some basic skills with local web servers and web development._

## Setup

- Download this repository to your local computer.
- At present, this page can only run in a web server environment because of the AJAX call needed.  So it won't work if the index.html file is directly opened by the browser.  The localhost, 127.0.0.1, and piq-display.local domains are set up as whitelisted domains from the API.  You may use a web server app of your choice.
- Modify the provided HTML, CSS, and JavaScript as desired to get the display looking the way you wish.
- Enjoy!

### SSL

At present, playa-inspiration-quotes.net has an OpenSSL certificate installed because it is still a concept app under development and only covers API calls.  This kind of certificate will throw an error message in the browser window that cautions the user against proceeding.  It is recommended to just use the http connection if at all possible. If using SSL is a requirement, the URL on line 22 of piq-display.js can be changed to point to https://api.playa-inspiration-quotes.net/api/quotes/random/get.  It is strongly recommended that using an SSL connection is done for one-off development purposes by someone who knows what they're doing.  It will be necessary to ping the API directly first, which can be done by copying and pasting the URL from piq-display.js into the web browser.
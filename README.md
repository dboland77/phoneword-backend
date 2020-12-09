# Overview

This will be the backend for the t9 phoneword frontend.

The API implements a number to word converter in the style of an old T9 mobile phone.
For example given the input 23 the output will be ad,ae,af,bd,be,bf,cd,ce,cf.

# To run

1. Clone this repo
1. In the project folder run npm install to install the package dependencies. Please check peer dependencies
1. The code uses ECMAScript so please make sure that your node version is >= 14

# Testing

1. API endpoint was tested with various values of the input parameter
1. API endpoint tested directly in the URL bar
1. Also tested using Postman

# Stack

1.  Node.js
1.  Hapi.js
1.  qs.js

# Notes / Issues

1. On installing Hapi through npm I got 5 high severity vulnerabilities. I checked the links for more info and it say that all versions of hapi are vulnerable to DOS due to the CORS request handler having a vulnerability.

1. I removed this package and installed @hapi/hapi ... this is "hapi-er"

# Assumptions

1. That I have a word list available (for now I have hardcoded this)

# Limitations

1. Only one word will be interpreted. If you enter multiple words separated by spaces this will not work.

1. This is not production ready in any way shape or form. It is a skeleton prototype to prove it works.

1. Not so much as a 404 is provided if anything goes wrong

# Future improvement

1. The API could be extended to interpret full messages

1. The word list could be provided by API, or database rather than hardcoded
1. For deployment it would need: Authorisation, Testing, cahching, better error handling (Boom plugin) , validation, cookies, process monitoring (Good plugin)
1. The models folder should contain relevant schema (for database objects mapped to http GET/POST/PUT/DELETE)

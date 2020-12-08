## Overview
 This will be the backend for the t9 phoneword frontend


 ## Stack
 1. Node.js
 2. Hapi.js


# Notes / Issues
1. On installing Hapi through npm I got 5 high severity vulnerabilities. I checked the links for more info and it say that all versions of hapi are vulnerable to DOS due to the CORS request handler having a vulnerability.

2. I removed this package and installed @hapi/hapi ... this is "hapi-er"


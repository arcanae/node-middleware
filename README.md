## Middleware

We are going to submit a form to Node and parse the received data.
Help from Stackoverflow: https://stackoverflow.com/a/12008719
Doc from Express: http://expressjs.com/fr/4x/api.html#req.body

Instructions:

1. create a web server using Node
2. serve an index page with a form:
    - the form must POST data to the `/auth` URL
3. create an handler for `/auth` which display the data received

We are going to restrict access to `/private` using
`http-auth`: https://www.npmjs.com/package/http-auth

Instructions:

1. generate a password file:
    - install htpasswd: `sudo apt install apache2-utils`
    - add a new user: `htpasswd -c .htpasswd <username>`
    - add `.htpasswd` to `.gitignore`
2. install `http-auth` using npm
3. initialize the `http-auth` middleware
4. create a new handler for `/private` and register the middleware


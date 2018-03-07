<h1>Node js - express - mongodb</h1>

Hello I am Dionisis Efsthopoulos from Greece Athens.
This is my First attempt on node js - express -mongodb

links
<p>https://www.terlici.com/2014/08/25/best-practices-express-structure.html</p> 
<p>https://www.terlici.com/2014/09/29/express-router.html</p>
<p>https://www.codementor.io/codeforgeek/build-website-from-scratch-using-expressjs-and-bootstrap-du107sby7</p>
<p>https://techprd.com/how-to-develop-a-responsive-node-js-express-website-using-bootstrap/</p>
<p>https://scotch.io/tutorials/easy-node-authentication-setup-and-local</p>
<p>https://www.danielgynn.com/build-an-authentication-app-using-express-node-passport/</p>
<p>https://www.youtube.com/watch?v=07739ffJkbo</p>
<p>https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications</p>
<p>http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt</p>
<p>https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions</p>
<p>http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/</p>
<p>https://mostafa-samir.github.io/async-iterative-patterns-pt1/</p>
<p>https://stackoverflow.com/questions/4288759/asynchronous-for-cycle-in-javascript</p>
<p>https://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/</p>
<p>https://medium.com/google-cloud/node-to-google-cloud-compute-engine-in-25-minutes-7188830d884e</p>
<p>http://pm2.keymetrics.io/</p>
<p>https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps</p>
<p>https://github.com/chriso/validator.js#validators</p>
<p>https://www.digitalocean.com/community/tutorials/how-to-back-up-restore-and-migrate-a-mongodb-database-on-ubuntu-14-04</p>
<p>https://www.youtube.com/watch?v=7k03jobKGXM</p>
<p>https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md#transactional-templates</p>
<p>https://docs.mongodb.com/getting-started/shell/</p>

  <h1>Generate the certificate ssl</h1>

The certificate files are stored inside the ssl/ folder. You can generate new files with the following commands.

Create the private key :

openssl genrsa -out key.pem 1024
Create the "Certificate Signing Request" :

openssl req -new -key key.pem -out csr.pem
Create the self-signed certificate :

openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem
Alternatively you can send the CSR to a Certificate Authority for signing.
<p>https://slproweb.com/products/Win32OpenSSL.html download for windows</p>
<p>https://www.youtube.com/watch?v=H8GxM9ApkYc setup openssl for windows</p>

ssl nodejs express socket.io

var fs = require( 'fs' );
var app = require('express')();<br>
var https        = require('https');<br>
var server = https.createServer({<br>
    key: fs.readFileSync('./test_key.key'),<br>
    cert: fs.readFileSync('./test_cert.crt'),<br>
    ca: fs.readFileSync('./test_ca.crt'),<br>
    requestCert: false,<br>
    rejectUnauthorized: false<br>
},app);<br>
server.listen(8080);<br>

var io = require('socket.io').listen(server);<br>

io.sockets.on('connection',function (socket) {<br>
    ...<br>
});<br>

app.get("/", function(request, response){<br>
    ...
})


<h1>Configuring Nginx and SSL with Node.js</h1>
<p>https://www.sitepoint.com/configuring-nginx-ssl-node-js/</p>


    controllers/ – defines your app routes and their logic
    helpers/ – code and functionality to be shared by different parts of the project
    middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
    models/ – represents data, implements business logic and handles storage
    public/ – contains all static files like images, styles and javascript
    views/ – provides templates which are rendered and served by your routes
    tests/ – tests everything which is in the other folders
    app.js – initializes the app and glues everything together
    package.json – remembers all packages that your app depends on and their versions
    
  

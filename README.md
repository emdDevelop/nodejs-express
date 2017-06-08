<h1>Node js - express - mongodb</h1>

Hello I am Dionisis Efsthopoulos from Greece Athens.
This is my First attempt on node js - express -mongodb

links
<p>https://www.terlici.com/2014/08/25/best-practices-express-structure.html</p> 
<p>https://www.terlici.com/2014/09/29/express-router.html</p>
<p>https://www.codementor.io/codeforgeek/build-website-from-scratch-using-expressjs-and-bootstrap-du107sby7</p>
<p>https://techprd.com/how-to-develop-a-responsive-node-js-express-website-using-bootstrap/</p>
<p>https://scotch.io/tutorials/easy-node-authentication-setup-and-local</p>



    controllers/ – defines your app routes and their logic
    helpers/ – code and functionality to be shared by different parts of the project
    middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
    models/ – represents data, implements business logic and handles storage
    public/ – contains all static files like images, styles and javascript
    views/ – provides templates which are rendered and served by your routes
    tests/ – tests everything which is in the other folders
    app.js – initializes the app and glues everything together
    package.json – remembers all packages that your app depends on and their versions



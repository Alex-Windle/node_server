const express = require('express'); //CommonJS module
const app = express(); //Generates an Express application object.
//This object sets up the configuration that will listen for 
//incoming requests. It will route these requests on to the 
//appropriate route handlers. 

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});
//GET is a route handler (method on application object)
//The first argument '/' specifies the route (url)
//The second argument is a function 
//The function takes REQUEST and RESPONSE objects
//representing the incoming/outgoing objects

//Deploy application with Heroku 
//  Checklist: 
//  (1) Specify port 
//  (2) Specify mode environment 
//  (3) Start Script
//  (4) Gitignore file
//Heroku specifies the port
//Specify node version, start script (package.json)
//Create .gitignore file (do not commit dependencies,
//Heroku will install dependencies). Ignore node_modules folder.

const PORT = process.env.PORT || 5000;
//If there is an environment variable defined by Heroku,
//then use that port (prod). Or, use 5000 (dev). 

app.listen(PORT);
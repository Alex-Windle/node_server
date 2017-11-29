const express = require('express'); //CommonJS module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express(); //Generates an Express application object.
//This object sets up the configuration that will listen for 
//incoming requests. It will route these requests on to the 
//appropriate route handlers. 

//console.developers.google.com
passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret, 
	callbackURL: '/auth/google/callback'//sends response here
}, (accessToken, refreshToken, profile, done) => {
	console.log('access token', accessToken);
	console.log('refresh token', refreshToken);
	console.log('profile', profile);
})); //Creates a new instance 

app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google')); 

//Deploy application with Heroku 
//  Checklist: 
//  (1) Port (Heroku specifies)
//  (2) Specify mode environment (package.json)
//  (3) Start Script (package.json)
//  (4) Gitignore file (do not commit dependencies,
//  Heroku will install dependencies). Ignore node_modules folder.
//Deploy via CLI with "heroku login" and "heroku create" commands.
//The url and remote repository print: 
//https://peaceful-chamber-78967.herokuapp.com/ | https://git.heroku.com/peaceful-chamber-78967.git
//View deployed app with "heroku open" or point browser to url 
const PORT = process.env.PORT || 5000;
//If there is an environment variable defined by Heroku,
//then use that port (prod). Or, use 5000 (dev). 

//Google OAuth allows secure sign-in. 

app.listen(PORT);
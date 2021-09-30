//settin gup rroutes
const express = require('express');
const apiRoutes = require('public/routes/app-routes.js')
const htmlRoutes = require('public/routes/html.js')
const fs = require('fs');
const path = require('path');
//setting up app and port 
const app = express();
var port = PORT(process.env.PORT || '3001');

//Initalizing app uses the app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', html)
//where to set the port 
app.listen(3001, () => {
   // console.log(`API server on port 3001!`)
});


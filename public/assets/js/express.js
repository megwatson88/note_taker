//settin gup rroutes
const express = require('express');
const apiRoutes = require('public/routes/app-routes.js')
const htmlRoutes = require('public/routes/html.js')

const app = express();
const fs = require('fs');
const path = require('path');
//Initalizing app 

var port = PORT(process.env.PORT || '3001');
app.set('port', port);
app.listen(3001, () => {
    console.log(`API server on port 3001!`)
});


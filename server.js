//settin API rroutes
const express = require('express');
const apiRoutes = require('routes/apiRoutes.js');
const htmlRoutes = require('public/routes/html.js');


//setting up app and port 
const app = express();
const PORT = PORT(process.env.PORT || '3001');

//Initalizing app uses the app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

//setting up routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//where to set the port 
app.listen(3001, () => {
    console.log(`API server on port ${PORT} !`)
});



const express = require('express');
const app = express();
const morgan=require('morgan');
const { createRoles } = require('./libs/initialSetUp');
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
// createRoles()
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 
 
//Nuestro primer WS Get 
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

 

app.use('/products',require('./routes/routesTodo'))
app.use('/auth',require('./routes/authRoutes'))
module.exports = app;

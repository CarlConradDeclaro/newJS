const express = require('express');

var products = require('./routes/products')
var users = require('./routes/users')
const app  = express();

app.use('/products',products);
app.use('/uses',users);




const port =4000;

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});
 
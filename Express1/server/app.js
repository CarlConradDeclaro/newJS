const express = require('express');
 


const app =  express();
 
 
app.use(express.static('Public'));
app.set('view engine','ejs');



 
app.get('/',(req,res)=>{
     res.render('login')
})

app.get('/login',(req,res,next)=>{
    const name = req.query.userName; 
    
    if (name == 'dd') {
        next();
      } else {
        
        res.send('Invalid name');
      }
})
app.get('/login/',(req,res)=>{
    res.render('home');
})


app.get('/log-in',(req,res)=>{
    res.render('login');
})


app.get('/sign-Up',(req,res)=>{
    res.render('signUp');
})


app.listen(5000,()=>{
    console.log("Listening at port 5000");
})

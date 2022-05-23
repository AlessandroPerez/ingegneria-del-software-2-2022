var express = require("express");
var router = express.Router();

const  credential = {
    email : "forzaferrari@gmail.com",
    password : "a"
}

// login user
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        //res.end("Login Successful...!");
    }else{
        res.end("Invalid Username")
    }
});

// route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user : req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})

// route for vetrina
router.get('/vetrina', (req, res) => {
    if(req.session.user){
        res.render('vetrina', {user : req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})

// route for carrello
router.get('/carrello', (req, res) => {
    if(req.session.user){
        res.render('carrello', {user : req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})



// route for logout
router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout : "logout Successfully...!"})
        }
    })
})

module.exports = router;
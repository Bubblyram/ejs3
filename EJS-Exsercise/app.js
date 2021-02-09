var express=require('express');
var app=express();
var bodyParser=require('body-parser');


var connection=require('./model/database');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({exteded:false}));
app.use(express.static(__dirname));

app.use('/login',function(req,res){
    console.log('hi');
    res.render('login');
})

app.post('/displaymarks',function(req,res){
    connection.query('select country,high,low from Temperature',(err,results)=>{
        if (err) throw err;
        if(results)
        {
            res.render("temp",{userdata:results});
            console.log(results);
        }
    })
})

app.listen(1000,()=>{
    console.log("Server is running at the port 1000");
})
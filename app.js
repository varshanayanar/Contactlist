
/*var time=0;

var Timer=setInterval(function() {
  time++;
  console.log(+time+ 'seconds passed ');
  if(time>5)
  clearInterval(Timer);
},
1000);

var stuff=require('./stuff');
console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(2,3));
console.log(stuff.adder(stuff.pi,2));
*/

hgffgfgfgf
var express=require('express');

var app=express();

app.set('view engine','ejs');

app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
//console.log(req.query);
res.render('contact',{qs:req.query});

});

app.get('/profile/:name',function(req,res){
res.render('profile',{person:req.params.name});
});

app.listen(4000);

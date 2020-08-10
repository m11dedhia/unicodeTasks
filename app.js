var express = require('express');
var axios = require('axios');
var bodyParser=require('body-parser');
var app = express();
var exports=require('./logic');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

var localData=[];

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/resources', express.static('resources'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/covid1', function(req, res){
  res.render('covid1');
});

app.get('/covid2', function(req, res){
  res.render('covid2');
});

app.get('/student-form', function(req, res){
  res.render('student-form');
});

app.post('/student-form', function(req, res){
  const firstName=req.body.firstName;
  const lastName=req.body.lastName;
  const math=req.body.math;
  const english=req.body.english;

  var feedInput=firstName+' '+lastName+' '+math+' '+english;

  if(localStorage.getItem('student-form')===''){
    var data=[];
    data.push(feedInput);
    localStorage.setItem('student-form',JSON.stringify(data));
  } else{
    var data=JSON.parse(localStorage.getItem('student-form'));
    data.push(feedInput);
    data=exports.sorter(data);
    localStorage.setItem('student-form', JSON.stringify(data));
  }
  res.redirect('/student-form-display');
});

app.get('/student-form-display', function(req, res){
  res.render('student-form-display', {data:JSON.parse(localStorage.getItem('student-form'))});
});

app.get('/jokes', function(req, res){
  getJoke('/Any')
  .then(response=>{
    res.render('jokes');
  });
});

app.get('/jokes/:category', async function(req, res){
  console.log(req.params.category);
  getJoke(req.params.category)
  .then(response=>{
    console.log(response.data.type);
    if(response.data.type==='twopart'){
      res.render('jokes-page-double', {data:response.data});
    } else if(response.data.type==='single'){
      res.render('jokes-page-single', {data:response.data});
    } else{
      res.render('404');
    }
  });
});

function getJoke(url){
  return axios({
    method:'get',
    url:'https://sv443.net/jokeapi/v2/joke/'+url,
  })
  .then((response)=>{
    return response;
  })
}

app.listen(5501, '127.0.0.1');
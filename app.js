var express = require('express');
var axios = require('axios');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/resources', express.static('resources'));
// app.use('/scripts', express.static('script'));

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

app.get('/jokes', async function(req, res){
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
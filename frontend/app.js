
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) =>
    import('node-fetch').then(({default: fetch})=> fetch(...args))

app.get('/', async function(req, res) {
    const option = {
        method:'GET'
    };
    fetch(URL,option)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log('error :'+err))
    try{
        let response = await fetch(URL, option);
        console.log("Response Status:", response.status);
        response = await response.json();
        res.render('index',response)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:'Internal server error.'});
    }
})

app.listen(3000, function(){
    console.log('Ares listening on port 3000')
    console.log(URL)
});


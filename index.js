const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const mongoose = require('mongoose');
const ConnDB = require('./ConnDB.js');
const Security = require('./Security.js');
const cors = require('cors');
const index = express();

index.use(express.static(__dirname + '/public'));
index.use(bodyParser.urlencoded({extended:false}));
index.use(cors());
const conn = new ConnDB();
const sec = new Security();

index.get('/api/discover/movies/popularity', (req,res)=>{
    conn.getPopularMovies()
        .then(data=> res.send(data));
});

index.get('/api/discover/series/popularity', (req,res)=>{
    conn.getPopularSeries()
        .then(data=> res.send(data));
});

index.get('/api/discover/movies',(req,res)=>{
    if (!req.query.genre){
        conn.discoverMovies('', req.query.original_language, req.query.page)
            .then(data=> res.send(data));
    } else {
        conn.discoverMovies(req.query.genre, req.query.original_language, req.query.page)
            .then(data=> res.send(data));
    }
});

index.get('/api/discover/series',(req,res)=>{
    if (!req.query.genre){
        conn.discoverSeries('', req.query.original_language, req.query.page)
            .then(data=> res.send(data));
    } else {
        conn.discoverSeries(req.query.genre, req.query.original_language, req.query.page)
            .then(data => res.send(data));
    }
});

index.get('/api/search',(req,res)=>{
    if (!req.query.query){
        res.send({results:[], error:'You should search using query parameter'})
    } else {
        conn.search(req.query.query)
            .then(data => res.send(data));
    }
});

index.get('/api/movies/search',(req,res)=>{
    conn.searchMovies(req.query.query)
        .then(data => res.send(data));
});
index.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
index.get('/peliculas',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
index.get('/series',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
// Empieza la sección admin
index.get('/login', (req,res)=> res.render(''));

index.post('/login', (req,res)=> {
        sec.checkUser(req.body.password, req.body.mail, req.body.name)
            .then(()=> res.send('/'))
            .catch(()=> res.send('/login'))
    }
);

index.post('/login', (req,res)=> {

    }
);

index.post('/login', (req,res)=> {

    }
);
index.get('/alfonso', (req,res)=>{
    conn.getAllMovies().then(data=>res.send(data));
});

index.get('/user/fixtures', (req,res)=>{
    conn.addUsersFixtures(1).then(res.send('/'));
});
index.listen(3000);
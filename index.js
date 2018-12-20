const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const mongoose = require('mongoose');
const ConnDB = require('./ConnDB.js');
const index = express();

index.use(express.static(__dirname + '/public'));
index.use(bodyParser.urlencoded({extended:false}));
const conn = new ConnDB();

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
index.get('/',(req,res)=>{
    res.send('/');
});
// Empieza la sección admin
index.get('/login', (req,res)=> res.render(''));

index.post('/login', (req,res)=> {

    }
);

index.post('/login', (req,res)=> {

    }
);

index.post('/login', (req,res)=> {

    }
);

index.get('/user/fixtures', (req,res)=>{
    conn.addUsersFixtures(1).then(res.send('/'));
});
index.listen(3000);
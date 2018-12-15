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
index.get('/api/movies',(req,res)=>{
    conn.getMovies().then(data=> res.send({results: data}));
});
index.get('/api/series',(req,res)=>{
    conn.getSeries().then(data=> res.send({results: data}));
});
index.get('/api/movies/popularity', (req,res)=>{
    conn.getPopularMovies().then(data=> res.send({results: data}));
});
index.get('/api/series/popularity', (req,res)=>{
    conn.getPopularSeries().then(data=> res.send({results: data}));
});
index.get('/api/movies/jap', (req,res)=>{
    conn.getJapMovies().then(data=> res.send({results: data}));
});
index.get('/api/series/jap', (req,res)=>{
    conn.getJapSeries().then(data=> res.send({results: data}));
});

index.get('/',(req,res)=>{
    res.send('/');
});

index.listen(3000);
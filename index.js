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

index.get('/discover/movies/popularity', (req,res)=>{
    conn.getPopularMovies()
        .then(data=> res.send({
        page: req.query.page,
        results:data
    }));
});

index.get('/discover/series/popularity', (req,res)=>{
    conn.getPopularSeries()
        .then(data=> res.send({
        page: req.query.page,
        results:data
    }));
});

index.get('/discover/movies',(req,res)=>{
    if (!req.query.genre){
        conn.discoverMovies('',
            req.query.original_language,
            req.query.page)
            .then(data=> res.send({
                page: req.query.page,
                results:data
            }));
    } else {
        conn.discoverMovies(req.query.genre,
            req.query.original_language,
            req.query.page)
            .then(data=> res.send({
                page: req.query.page,
                results:data
            }));
    }
});

index.get('/discover/series',(req,res)=>{
    if (!req.query.genre){
        conn.discoverSeries('',
            req.query.original_language,
            req.query.page)
            .then(data=> res.send({
                page: req.query.page,
                results:data
            }));
    } else {
        conn.discoverSeries(req.query.genre,
            req.query.original_language,
            req.query.page)
            .then(data => res.send({
                page: req.query.page,
                results: data
            }));
    }
});

index.get('/search/movies',(req,res)=>{
    conn.searchMovies(req.query.query)
        .then(data=> res.send({
        page: req.query.page,
        results:data
    }));
});

index.get('/search/series',(req,res)=>{
    conn.searchSeries(req.query.query)
        .then(data=> res.send({
        page: req.query.page,
        results:data
    }));
});

index.get('/',(req,res)=>{
    res.send('/');
});

index.listen(3000);
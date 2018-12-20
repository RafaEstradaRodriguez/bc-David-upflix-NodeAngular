const mongoose = require('mongoose');
const request = require('request');
let data = [];
mongoose.connect('mongodb://localhost/Videoclub', {userUrlParser: true})
    .catch((e)=>console.log(e));
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{});
let movieSchema = new mongoose.Schema({
    name: String,
    id:Number,
    vote_count:Number,
    vote_average:Number,
    popularity:Number,
    poster_path:String,
    backdrop_path:String,
    original_language:String,
    original_name:String,
    genre_ids:Array,
    overview:String,
    first_air_date:String
});
this.movieCollection = mongoose.model('peliculas', movieSchema);

seriesSchema = new mongoose.Schema({
    name: String,
    id:Number,
    vote_count:Number,
    vote_average:Number,
    popularity:Number,
    poster_path:String,
    backdrop_path:String,
    original_language:String,
    original_name:String,
    genre_ids:Array,
    overview:String,
    first_air_date:String
});
this.seriesCollection = mongoose.model('series', seriesSchema);
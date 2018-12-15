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
let movies = mongoose.model('series', movieSchema);
function requestToAPI(i){
    request({
        url: `https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&page=${i}`,
        json: true
    }, (error, response, body)=> {
        data = body.results;
        addMovie(data,i);
    });
}

function addMovie(data,i){

    console.log(i);
    for (let movie of data) {
        let movieAdd = new movies({
            name: movie.name,
            id:movie.id,
            vote_count:movie.vote_count,
            vote_average:movie.vote_average,
            popularity:movie.popularity,
            poster_path:movie.poster_path,
            backdrop_path:movie.backdrop_path,
            original_language:movie.original_language,
            original_name:String,
            genre_ids:movie.genre_ids,
            overview:movie.overview,
            first_air_date:movie.release_date
        });

        movieAdd.save((err, movie) => {
            if (err) {
                console.log('Error en la insercion en mongo');
            }
        });
    }
    if (i<19619){
        requestToAPI(i+1);
    }
}
requestToAPI(1);
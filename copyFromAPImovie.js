const mongoose = require('mongoose');
const request = require('request');
let data = [];
mongoose.connect('mongodb://localhost/Videoclub', {userUrlParser: true})
    .catch((e)=>console.log(e));
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{});
let movieSchema = new mongoose.Schema({
    title: String,
    id: Number,
    vote_count: Number,
    vote_average: Number,
    popularity: Number,
    poster_path: String,
    backdrop_path: String,
    original_language: String,
    original_title: String,
    genre_ids: Array,
    overview: String,
    release_date: String,
    trailerKey: String
});
let movies = mongoose.model('peliculas', movieSchema);
let page = 1;
function requestToAPI(){
    request({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&page=${page}`,
        json: true
    }, (error, response, body)=> {
        data = body.results;
        console.log(page);
        if (response.statusCode==429){
            console.log('pagineo'+response.statusCode);
        }else{
            for (let movie of data) {
                request({
                    url: `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=8d1ff0fd31d021c4902d57908c87f3fc`,
                    json: true
                }, (error, response, body)=>{
                    if (response.statusCode==429){
                        console.log('video' + response.statusCode);
                    } else {
                        if (body.results && body.results[0] && movie.poster_path && movie.backdrop_path){
                            let movieAdd = new movies({
                                title: movie.title,
                                id: movie.id,
                                vote_count: movie.vote_count,
                                vote_average: movie.vote_average,
                                popularity: movie.popularity,
                                poster_path: movie.poster_path,
                                backdrop_path: movie.backdrop_path,
                                original_language: movie.original_language,
                                original_title: movie.original_title,
                                genre_ids: movie.genre_ids,
                                overview: movie.overview,
                                release_date: movie.release_date,
                                trailerKey: body.results[0].key
                            });
                            movieAdd.save((err, movie) => {
                                if (err) {
                                    console.log('Error en la insercion en mongo');
                                }
                            });
                        }
                    }
                });
            }
        }

    });
    page = page + 1;
}

setInterval(requestToAPI,11000);
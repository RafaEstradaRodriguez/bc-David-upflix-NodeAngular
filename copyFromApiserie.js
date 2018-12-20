const mongoose = require('mongoose');
const request = require('request');
let data = [];
mongoose.connect('mongodb://localhost/Videoclub', {userUrlParser: true})
    .catch((e)=>console.log(e));
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{});
let seriesSchema = new mongoose.Schema({
    name: String,
    id: Number,
    vote_count: Number,
    vote_average: Number,
    popularity: Number,
    poster_path: String,
    backdrop_path: String,
    original_language: String,
    original_name: String,
    genre_ids: Array,
    overview: String,
    first_air_date: String,
    trailerKey: String
});
let series = mongoose.model('series', seriesSchema);
let page = 637;
function requestToAPI(){
    request({
        url: `https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&page=${page}`,
        json: true
    }, (error, response, body)=> {
        data = body.results;
        console.log(page);
        if (response.statusCode==429){
            console.log('pagineo'+response.statusCode);
        }
        for (let serie of data) {
            request({
                url: `https://api.themoviedb.org/3/tv/${serie.id}/videos?api_key=8d1ff0fd31d021c4902d57908c87f3fc`,
                json: true
            }, (error, response, body)=>{
                if (response.statusCode==429){
                    console.log('video' + response.statusCode);
                }
                if (body.results && body.results[0] && serie.poster_path && serie.backdrop_path){
                    let serieAdd = new series({
                        name: serie.name,
                        id: serie.id,
                        vote_count: serie.vote_count,
                        vote_average: serie.vote_average,
                        popularity: serie.popularity,
                        poster_path: serie.poster_path,
                        backdrop_path: serie.backdrop_path,
                        original_language: serie.original_language,
                        original_name: serie.original_name,
                        genre_ids: serie.genre_ids,
                        overview: serie.overview,
                        first_air_date: serie.release_date,
                        trailerKey: body.results[0].key
                    });
                    serieAdd.save((err, movie) => {
                        if (err) {
                            console.log('Error en la insercion en mongo');
                        }
                    });
                }
            });
        }
    });
    page = page + 1;
}

setInterval(requestToAPI,11000);
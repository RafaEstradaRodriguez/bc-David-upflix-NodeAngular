const mongoose = require('mongoose');

class UpFlixDBConn {

    constructor(){
        /*if (RestDB){
            return RestDB;
        }*/
        mongoose.connect('mongodb://localhost/Videoclub', {userUrlParser: true})
            .catch((e)=>console.log(e));
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console,'connection error'));
        this.db.once('open', ()=>{});

        this.movieSchema = new mongoose.Schema({
            title: String,
            id:Number,
            description:String,
            vote_count:Number,
            vote_average:Number,
            popularity:Number,
            poster_path:String,
            backdrop_path:String,
            original_language:String,
            original_title:String,
            genre_ids:Array,
            adult:Boolean,
            overview:String,
            release_date:String
        });
        this.movieCollection = mongoose.model('peliculas', this.movieSchema);

        this.seriesSchema = new mongoose.Schema({
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
        this.seriesCollection = mongoose.model('series', this.seriesSchema);
        /*RestDB = this;*/
    }

    searchMovies(query){
        return this.movieCollection.find({title: new RegExp(query)}).exec();
    }

    searchSeries(query){
        return this.seriesCollection.find({title: new RegExp(query)}).exec();
    }

    discoverMovies(genre = '', original_language = '', page = 1){
        if (genre===''&&original_language===''){
            return this.movieCollection.find().skip(20*(page-1)).limit(20*page).exec();
        }
        if (genre==='') {
            return this.movieCollection.find({original_language:original_language}).skip(20*(page-1)).limit(20*page).exec();
        }
        if (original_language===''){
            return this.movieCollection.find({genre:genre}).skip(20*(page-1)).limit(20*page).exec();
        }
        return this.movieCollection.find({genre:genre,original_language:original_language}).skip(20*(page-1)).limit(20*page).exec();
    }

    discoverSeries(genre = '', original_language = '', page = 1){
        if (genre===''&&original_language===''){
            return this.seriesCollection.find().skip(20*(page-1)).limit(20*page).exec();
        }
        if (genre==='') {
            return this.seriesCollection.find({original_language:original_language}).skip(20*(page-1)).limit(20*page).exec();
        }
        if (original_language===''){
            return this.seriesCollection.find({genre:genre}).skip(20*(page-1)).limit(20*page).exec();
        }
        return this.seriesCollection.find({genre:genre,original_language:original_language}).skip(20*(page-1)).limit(20*page).exec();
    }

    getPopularSeries(page = 1){
        return this.seriesCollection.find().sort({popularity:1}).skip(20*(page-1)).limit(20*page).exec();
    };

    getPopularMovies(page = 1){
        return this.movieCollection.find().sort({popularity:1}).skip(20*(page-1)).limit(20*page).exec();
    };
}

module.exports = UpFlixDBConn;
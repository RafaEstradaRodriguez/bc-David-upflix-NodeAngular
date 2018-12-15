const mongoose = require('mongoose');
/*let UpFlixDB = {};*/
// Aplicamos el patrón de diseño singleton
class UpFlixDBConn {
    /*const db = null;
    movieSchema = null;
    movieCollection = null;
    seriesSchema = null;
    seriesCollection = null;*/
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

    /*addRestaurant(title, description, img_path, year) {
        let movieSchema = new mongoose.Schema({
            title: String,
            description:String,
            img_path:String,
            year:Number});

        let restaurantes = mongoose.model('Importada', movieSchema, 'Importada');

        let movie = new restaurantes({
            title: title,
            description:description,
            img_path: img_path,
            year: year
        });

        movie.save((err, movie)=>{
            if (err){
                console.log('Error en la insercion en mongo');
            }
            console.log(movie);
        })
    }*/

    getMovies(limit=20){
        return this.movieCollection.find().limit(limit).exec();
    }

    getPopularMovies(limit=20){
        return this.movieCollection.find().sort({popularity:1}).limit(limit).exec();
    };

    /*getSerieImgPath(id, type){
        id = parseInt(id);
        if (type==='backdrop_path'){
            return this.seriesCollection.find({id:id},{backdrop_path:1}).limit(limit).exec();
        }
        if (type==='poster_path'){
            return this.seriesCollection.find({id:id},{poster_path:1}).limit(limit).exec();
        }
        else{
            console.log('Mala elección de tipo de imagen');
        }
    }*/

    getSeries(limit=20){
        return this.seriesCollection.find().limit(limit).exec();
    }

    getPopularSeries(limit=20){
        return this.seriesCollection.find().sort({popularity:1}).limit(limit).exec();
    };

    getJapMovies(limit=20){
        return this.movieCollection.find({original_language:'ja'}).limit(limit).exec();
    }

    getJapSeries(limit=20){
        return this.seriesCollection.find({original_language:'ja'}).limit(limit).exec();
    }
}

module.exports = UpFlixDBConn;
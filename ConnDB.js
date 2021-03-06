const mongoose = require('mongoose');
class UpFlixDBConn {
    constructor(){
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

    }

    capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    async searchMovies(query){
        let results = {};
        await this.movieCollection
            .find({$or:[{title: new RegExp(query)},
                    {title: new RegExp(this.capitalizeFirstLetter(query))},
                    {overview: new RegExp(query)},
                    {overview: new RegExp(this.capitalizeFirstLetter(query))}]}).sort({popularity:-1}).exec()
            .then(data=> results = {results:data});
        return results;
    }

    async searchSeries(query){
        let results = {};
        await this.seriesCollection
            .find({$or:[{name: new RegExp(query)},
                    {name: new RegExp(this.capitalizeFirstLetter(query))},
                    {overview: new RegExp(query)},
                    {overview: new RegExp(this.capitalizeFirstLetter(query))}]}).sort({popularity:-1}).exec()
            .then(data=> results = {results:data});
        return results;
    }

    async search(query){
        let data = [];
        let data1 = await this.searchSeries(query);
        let data2 = await this.searchMovies(query);
        console.log(query);
        console.log(data1);
        console.log(data2);
        for (let elem in data1.results){
            data.push(data1.results[elem]);
            data.push(data2.results[elem]);
        }
        return {results:data};
    }

    async discoverMovies(genre = '', original_language = '', page = 1){
        let results = {};
        if (genre===''&&original_language===''){
            await this.movieCollection
            .find().skip(20*(page-1)).limit(20*page).exec()
            .then(data=> results = {page:page, results:data});
            return results;
        }
        if (genre==='') {
            await this.movieCollection
                .find({original_language:original_language}).skip(20*(page-1))
                .limit(20*page).exec()
                .then(data=> results = {page:page, results:data});
            return results;
        }
        if (original_language===''){
            await this.movieCollection
                .find({genre:genre}).skip(20*(page-1))
                .limit(20*page).exec()
                .then(data=> results = {page:page, results:data});
            return results;
        }
        await this.movieCollection
            .find({genre:genre,original_language:original_language}).skip(20*(page-1))
            .limit(20*page).exec()
            .then(data=> results = {page:page, results:data});
        return results;
    }

    async discoverSeries(genre = '', original_language = '', page = 1){
        let results = {};
        if (genre===''&&original_language===''){
            await this.seriesCollection
                .find().skip(20*(page-1)).limit(20*page).exec()
                .then(data=> results = {page:page, results:data});
            return results;
        }
        if (genre==='') {
            await this.seriesCollection
                .find({original_language:original_language}).skip(20*(page-1)).limit(20*page).exec()
                .then(data=> results = {page:page, results:data});
            return results;
        }
        if (original_language===''){
            await this.seriesCollection
                .find({genre:genre}).skip(20*(page-1)).limit(20*page).exec()
                .then(data=> results = {page:page, results:data});
            return results;
        }
        await this.seriesCollection
            .find({genre:genre,original_language:original_language}).skip(20*(page-1)).limit(20*page).exec()
            .then(data=> results = {page:page, results:data});
        return results;
    }

    async getPopularSeries(page = 1){
        let results = {};
        await this.seriesCollection
            .find().sort({popularity:-1}).skip(20*(page-1)).limit(20*page).exec()
            .then(data=> results = {page:page, results:data});

        return results;
    };

    async getPopularMovies(page = 1){
        let results = {};
        await this.movieCollection
            .find().sort({popularity:-1}).skip(20*(page-1)).limit(20*page).exec()
            .then(data=> results = {page:page, results:data});
        return results;
    };

    async getAllMovies(){
        let results = {};
        await this.movieCollection
            .find().exec()
            .then(data=> results = data);
        return results;
    }
}

module.exports = UpFlixDBConn;
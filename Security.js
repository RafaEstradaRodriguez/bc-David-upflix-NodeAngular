const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

class Security {
    constructor(){
        mongoose.connect('mongodb://localhost/Videoclub', {userUrlParser: true})
            .catch((e)=>console.log(e));
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console,'connection error'));
        this.db.once('open', ()=>{});
        this.userSchema = new mongoose.Schema({
            name: String,
            mail: String,
            password: String,
            permission: Array
        });
        this.usersCollection = mongoose.model('users', this.userSchema);

        this.permissions = [['ROLE_ADMIN', 'ROLE_USER'], ['ROLE_USER']]
    }
}
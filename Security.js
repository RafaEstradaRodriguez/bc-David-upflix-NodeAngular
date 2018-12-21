const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

    async addUsersFixtures(i) {
        if (i<10){
            let encryptedPwd = await bcrypt.hash('123', saltRounds);
            let user = new this.usersCollection({
                name: 'nombre' + i,
                password: encryptedPwd,
                mail: 'user' + i + '@mail.com',
                permission: this.permissions[i%2]
            });

            user.save((err, data)=>{
                if (err){
                    console.log('Error en la insercion del usuario');
                }
                this.addUsersFixtures(i+1);
            });
        }

    }

    async addUser(name, mail, password, permission = this.permissions[1]) {
        let encryptedPwd = await bcrypt.hash(password, saltRounds);
        let user = await new this.usersCollection({
            name: name,
            password: encryptedPwd,
            mail: mail,
            permission: permission
        });

        user.save((err, data)=>{
            if (err){
                console.log('Error en la insercion del usuario');
            }
        });
    }

    async checkUser(password, mail, name){

    }

    async editUser(id, name, oldPassword, newPassword, mail, permission) {
        let OldUser = {};
        await this.usersCollection.findOne({_id:id}).exec().then(data=> OldUser = data);
        // Tratamiento de contraseñas
        let encryptedNewPwd = await bcrypt.hash(newPassword, saltRounds);
        let validUser = await bcrypt.compare(oldPassword, OldUser.password);
        // Tratamiento de permisos
        if (permission==='ROLE_USER'){
            permission = ['ROLE_USER'];
        } else {
            permission = ['ROLE_ADMIN', 'ROLE_USER'];
        }
        // Si la contraseña es correcta, se procede a la actualizacion. Si no, se devuelve un error.
        if (validUser){
            let user = new this.usersCollection({
                name: name,
                password: encryptedNewPwd,
                mail: mail,
                permission: permission
            });

            user.save((err, data)=>{
                if (err){
                    console.log('Error en la insercion del usuario');
                }
            });
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Security;
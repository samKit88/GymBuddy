const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
});

// static signup method
userSchema.statics.signup = async function (email, password) {

    // validation
    if(!email || !password){
        throw Error('All fileds must be filed');
    };

    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not valid');
    }

    //check the database 
    const exist = await this.findOne({ email });

    if(exist) {
        throw Error('Email already in use');
    };

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});

    return user
};

// static signup method
userSchema.statics.login = async function (email, password) {

    // validation
    if(!email || !password){
        throw Error('All fileds must be filed');
    };
    
    //check the database 
    const user = await this.findOne({ email });

    if(!user) {
        throw Error('No user with this email');
    };

    const match = await bcrypt.compare(password, user.password);    

    if(!match) {
        throw Error('Your password is incorect');
    };

    return user
};



module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const {Schema} = mongoose;

// const UserSchema = new mongoose.Schema()
const UserSchema = new Schema({
    firstName:String,
    lastName:String,
    password:String,
    email:{type:String, unique:true},
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
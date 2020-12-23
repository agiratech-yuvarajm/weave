const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: {
       type: String,
       required: true
    },
    email: {
       type: String,
       required: true
    },
    phone: {
        type: String,
        required: true
     },
     name: {
        type: String,
        required: true
     },
     posts: {
        type: String,
        required: true
     },
    avatar: {
       type: String,
       required: true
    },
    parentLogin: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Users = mongoose.model('user', userSchema);
module.exports = {Users, userSchema};
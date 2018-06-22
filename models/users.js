const mongoose = require('../config/database');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 1
    },
    Age: {
        type: Number,
        required: true,
        minLength: 1
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users; 
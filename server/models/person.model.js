const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({

    first_name: {type: String, required: [true, 'firstname is required']},

    last_name: {type: String, required: [true, 'lastname is required']},

    age: {type: Number, required: [true, 'age is required']}
}, {timestamps: true})

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
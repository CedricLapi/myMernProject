const Person = require('../models/person.model');

module.exports.hello_world = (req, res) => {
    res.json({
        message: "This is a message from the server"
    })
}
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
    .then(newPerson => {
        res.json({person: newPerson})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    });
}
const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
    app.get('/api/person', PersonController.hello_world)
}
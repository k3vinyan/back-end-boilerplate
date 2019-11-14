const routeBuilder = require('../controllers/controller');

module.exports = app => {
    app
        .route('/routename')
        .get(routeBuilder.read_list_of_something)
        .post(routeBuilder.create_something);
    app
        .route('/routename/:id')
        .get(routeBuilder.read_something)
        .put(routeBuilder.update_something)
        .delete(routeBuilder.delete_something)
};
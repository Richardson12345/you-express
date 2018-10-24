const vehicleController = require('../controller/vehicleController');
const Router = require('express').Router();

Router.post('/', vehicleController.create);
Router.get('/', vehicleController.read);
Router.put('/:id', vehicleController.update);
Router.delete('/:id', vehicleController.delete);

module.exports = Router;
const vehicleModel = require('../model/vehicleModel')

class vehicleController {
    
    static create (req, res) {
        vehicleModel
            .create(req.body)
            .then((data => {
                res
                .status(201)
                .json(data)
            }))
            .catch((err => {
                res
                .status(400)
                .json(err)
            }))
    }

    static read (req, res) {
        vehicleModel
            .find({})
            .then((data => {
                res
                .status(200)
                .json(data)
            }))
            .catch((err => {
                res
                .status(400)
                .json(err)
            }))
    }

    static update (req, res) {
        let { id } = req.params
        vehicleModel
            .findByIdAndUpdate(id, req.body)
            .then((result => {
                res
                .status(201)
                .json(result)
            }))
            .catch((err => {
                res
                .status(400)
                .json(err)
            }))
    }

    static delete (req, res) {
        let { id } = req.params
        vehicleModel
            .findByIdAndRemove(id)
            .then((result => {
                res
                .status(201)
                .json(result)
            }))
            .catch((err => {
                res
                .status(400)
                .json(err)
            }))
    }

}

module.exports = vehicleController
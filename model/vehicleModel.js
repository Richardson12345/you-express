const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    tipe: {
        type: String,
        required: true
    },
    image_source: {
        type: String
    }, 
    weight: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        unique: true,
        required: true
    }
}, { timestamps: true });

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);

module.exports = vehicleModel;
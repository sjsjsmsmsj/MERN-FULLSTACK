let mongoose = require('mongoose');

let Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})

let enquiryModel = mongoose.model('enquiry', Schema);

module.exports = enquiryModel;
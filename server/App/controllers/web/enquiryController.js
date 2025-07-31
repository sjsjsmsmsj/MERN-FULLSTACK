let enquiryModel = require('../../models/enquiry.model');


let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    })
    enquiry.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}

let enquiryList = async (req, res) => {
    let enquiry = await enquiryModel.find();
    res.send(enquiry)
}

let enquiryDelete = async (req, res) => {
    let id = req.params.id;
    let enquiry = await enquiryModel.deleteOne({ _id: id });
    res.send(enquiry);
}

let enquirysingleRow = async (req, res) => {
    let id = req.params.id;
    let enquiry = await enquiryModel.findOne({ _id: id });
    res.send(enquiry);
}


let enquiryUpdate = async (req, res) => {
    let id = req.params.id;
    let { name, email, phone, message } = req.body;
    let updateObj = {
        name,
        email,
        phone,
        message

    }
    let enquiry = await enquiryModel.updateOne({ _id: id }, {
        $set: updateObj
    })
    res.send(enquiry);
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate, enquirysingleRow };
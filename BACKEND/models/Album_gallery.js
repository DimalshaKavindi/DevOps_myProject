const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const photogallerySchema = new Schema({
    Album_Category: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    images: [
        {
            filename: String, 
            path: String,     
        }
    ]
})

const Photograph = mongoose.model("Photographs", photogallerySchema);
module.exports = Photograph;

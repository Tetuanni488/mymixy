const mongoose = require("mongoose");
const {Schema} = mongoose;

const ImageSchema = new Schema({
    title:{tpye: String},
    description:{type: String},
    filename: {type: String},
    views:{type: Number, defaul:0},
    likes: {type: Number, defaul:0},
    timestamp:{type: Date,defaul: Date.now}
})

module.exports = mongoose.model("Image", ImageSchema)
const mongoose = require("mongoose");
const {Schema} = mongoose;
const path = require("path");

const ImageSchema = new Schema({
    // title:{tpye: String},
    description:{type: String},
    filename: {type: String},
    views:{type: Number, defaul:0},
    likes: {type: Number, defaul:0},
    timestamp:{type: Date,defaul: Date.now}
})

ImageSchema.virtual("uniqueId")
    .get(function(){
        return this.filename.replace(path.extname(this.filename),"")
    })

module.exports = mongoose.model("Image", ImageSchema)
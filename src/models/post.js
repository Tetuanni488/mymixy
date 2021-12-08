const mongoose = require("mongoose");
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const {Schema} = mongoose;
const {randomString} = require("../helpers/libs");
const path = require("path");

const PostSchema = new Schema({
    postId:{type: String},
    userId:{type: String},
    title:{type: String},
    author:{type: String},
    description:{type: String},
    media: {type: Array},
    views:{type: Number, default:0},
    likes: {type: Number, default:0},
    timestamp:{type: Date,default: Date.now}
})

PostSchema.virtual("uniqueId")
    .get(function(){
        return this.postId
        
    })

PostSchema.plugin(mongooseLeanVirtuals);

module.exports = mongoose.model("Post", PostSchema)
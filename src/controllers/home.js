const controller = {};
const {Post} =  require("../models");

controller.index =  async(req, res) => {
    const posts = await Post.find().sort({timestamp:-1}).lean({ virtuals: true }); 
    res.render('index',{posts})
}

module.exports = controller;
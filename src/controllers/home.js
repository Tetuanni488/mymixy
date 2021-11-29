const controller = {};
const {Image} =  require("../models");

controller.index =  async(req, res) => {
    const images = await Image.find().sort({timestamp:-1}).lean({ virtuals: true }); 
    res.render('index',{images})
}
controller.profile =  (req, res) => { 
    res.render('layouts/profile')
}

module.exports = controller;
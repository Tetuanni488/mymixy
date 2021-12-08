const controller = {};

controller.index =  async(req, res) => {
    // const images = await Image.find().sort({timestamp:-1}).lean({ virtuals: true }); 
    res.render('profile')
}

module.exports = controller;
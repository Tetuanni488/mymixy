const controller = {};

controller.index =  (req, res) => { 
    res.render('index')
}
controller.profile =  (req, res) => { 
    res.render('layouts/profile')
}

module.exports = controller;
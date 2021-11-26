const path = require('path')
const {randomString} = require("../helpers/libs");
const fsExtra = require('fs-extra')

const controller = {};

controller.index  = (req,res) =>{

};

controller.create  = async (req,res) =>{
    const url = randomString()
    const tempPath = req.file.path
    const ext = path.extname(req.file.originalname).toLowerCase()
    const targetPath = path.resolve(`src/public/upload/${url}${ext}`)

    if(ext ==='.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif'){
        await fsExtra.rename(tempPath,targetPath);
        res.send("recibido "+url)
    }
};

controller.like  = (req,res) =>{

};

controller.comment  = (req,res) =>{

};

controller.remove  = (req,res) =>{

};

module.exports = controller;
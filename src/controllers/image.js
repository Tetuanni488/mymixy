const path = require('path')
const {randomString} = require("../helpers/libs");
const {getClientIp} = require("../helpers/libs");
const fsExtra = require('fs-extra')

const {Image} = require("../models/index");

const controller = {};

controller.index  = (req,res) =>{
    res.render("image");
};

controller.create  = (req,res) =>{
    const saveImage = async () => {
        const url = randomString()
        const images = await Image.find({filename: url});
        if (images.length > 0){
            saveImage()
        } else{
            const tempPath = req.file.path
            const ext = path.extname(req.file.originalname).toLowerCase()
            const targetPath = path.resolve(`src/public/upload/${url}${ext}`)

            if(ext ==='.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif'){
                await fsExtra.rename(tempPath,targetPath);
                const newImg = new Image({
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    filename: url+ext,
                })
                const imageSaved = await newImg.save();
                res.redirect("/images");
            } else {
                await fs.unlink(tempPath);
                res.status(500).json({error: 'Only image formats are allowed'})
            }
        }
    }
    saveImage()
};

controller.like  = (req,res) =>{

};

controller.comment  = (req,res) =>{

};

controller.remove  = (req,res) =>{

};

module.exports = controller;
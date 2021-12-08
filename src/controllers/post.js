const path = require('path')
const {randomString} = require("../helpers/libs");
const {mediaArray} = require("../helpers/libs");
const fsExtra = require('fs-extra')

const {Post} = require("../models/index");
const { json } = require('express');

const controller = {};

controller.index  = async (req,res) =>{
    const post = await Post.findOne({postId:{$regex: req.params.post_id}}).lean({ virtuals: true });
    res.renderPjax("post",{post});
};

controller.create  = (req,res) =>{
    const uploadPost = async () => {
        const postId = randomString(7);
        const posts = await Post.find({filename: postId});
        if (posts.length > 0){
            uploadPost()
        } else{
            let media = mediaArray(req.files);

            if(Array.isArray(media)){
                let mediaLite = []
                media.forEach(async (element)=> {
                    mediaLite.push({
                        filename: element.filename,
                        type:element.type,
                        ext: element.ext
                    })
                    await fsExtra.rename(element.temp,element.target);
                });

                const newPost = new Post({
                    postId: postId,
                    title: req.body.title,
                    author: req.body.author,
                    description: req.body.description,
                    media: mediaLite
                })

                const postsaved = await newPost.save();
                res.redirect(`/posts/${postId}`);
            } else {
                media.forEach( async(element) => {
                    await fs.unlink(element.temp);
                });
                res.status(500).json({error: 'Only png, jpg, jpeg, gif and mp4 formats are allowed'})
            }
        }
    }
    uploadPost()
};

controller.like  =  async(req,res) =>{
    const post = await Post.findOne({postId:{$regex: req.params.post_id}});
    if (post){
        post.likes += 1;
        await post.save()
    }
    res.json(post.likes)
};

controller.comment  = (req,res) =>{ 

};

controller.remove  = (req,res) =>{

};

controller.media = async (req,res) =>{
    const post = await Post.findOne({postId:{$regex: req.params.post_id}}).lean({ virtuals: true });
    const media_index = req.params.media_id;
    const focusfilename = post.media[media_index].filename
    res.json(focusfilename);

}

module.exports = controller;

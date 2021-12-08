const express = require('express');
const router = express.Router();
const home  = require('../controllers/home');
const post = require('../controllers/post');
const profile = require('../controllers/profile');

module.exports = app =>{

    router.get('/', home.index)
    router.get('/profile', profile.index)
    router.get('/posts/:post_id', post.index)
    router.post('/posts', post.create)
    router.post('/posts/:post_id/like', post.like)
    router.post('/posts/:post_id/comment', post.comment)
    router.get('/posts/:post_id/:media_id', post.media)
    router.delete('/posts/:post_id', post.remove)

    app.use(router);
}
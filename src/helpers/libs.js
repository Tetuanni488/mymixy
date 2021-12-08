const path = require('path')
const fsExtra = require('fs-extra')

const helpers = {}


helpers.randomString = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let ranString = 0
    for(let i = 0; i < len; i++){
        ranString += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return ranString
}
helpers.mediaArray =  (media) =>{
    let newArray = []
    media.forEach(element => {
        const url = helpers.randomString(6);
        const tempPath = element.path;
        const ext = path.extname(element.originalname).toLowerCase();
        if(ext ==='.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif' || ext === '.mp4'){
            if(ext === '.mp4'){
                const targetPath = path.resolve(`src/public/upload/media/videos/${url}${ext}`);
                newArray.push({
                    filename:url+ext,
                    url: url,
                    ext: ext,
                    type:"video",
                    temp: tempPath,
                    target: targetPath,
                })
            }else{
                const targetPath = path.resolve(`src/public/upload/media/images/${url}${ext}`);
                newArray.push({
                    filename:url+ext,
                    url: url,
                    ext: ext,
                    type:"image",
                    temp: tempPath,
                    target: targetPath,
                })
            }
            
        }else{
            return false;
        }
    });
    return newArray
}

module.exports = helpers
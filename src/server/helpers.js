const moment = require("moment");
const helpers = {};

helpers.iftype = function(type, optns){
    if(type === "image"){
        return optns.fn(this)
    }else{
        return optns.inverse(this)
    }
}
helpers.timeago = timestamp =>{
    return moment(timestamp).startOf("minute").fromNow();
}
helpers.expandMedia = function(focusfilename,optns){
    if(typeof(focusfilename) === "string"){
        return optns.fn(this)
    }else{
        return optns.inverse(this)
    }
}

module.exports = helpers;
const helpers = {}
helpers.style = {}

helpers.randomString = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let ranString = 0
    for(let i = 0; i < 7; i++){
        ranString += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return ranString
}
helpers.style.autoGrow = (element) =>{
    element.style.height = "50px"
    element.style.height = `${element.scrollHeight}px`
}

module.exports = helpers
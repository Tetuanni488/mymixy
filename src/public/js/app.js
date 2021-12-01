let isImageExpanded = false;

function autoGrow(element){
    element.style.height = "50px"
    element.style.height = `${element.scrollHeight}px`
}
function epxandImg(fliename){
    if(!isImageExpanded){
        console.log(fliename)
        document.getElementsByClassName("wrapper").innerHTML += '<img src="/public/upload/'+fliename+'" alt="" style="width: 90%; position:fixed; top:50%; left:50%; transform: translate(-50%,-50%);" class="br-10">'
    }else{
        console.log(fliename)
    }
}
//Grow the text description box automaticliy.
//Post form
let isImageExpanded = false;
function autoGrow(element){
    element.style.height = "50px"
    element.style.height = `${element.scrollHeight}px`
}

//jQUery\\

//Post form
// Check the files before upload.

$(document).ready(function(){
    $("#addMedia").change(function(e){
        let flies = e.target.files;
        if(flies && flies.length > 0){
            let isComp = false
            for(let i = 0; i<flies.length; i++){
                const filetype = flies[i].type;
                let try1 = filetype.substr(filetype.length-3, filetype.lenght);
                let try2 = filetype.substr(filetype.length-4, filetype.lenght);

                isComp = false
                if(try1 === "png" || try1 === "jpg" || try1 === "gif" || try1 === "mp4"){
                    isComp = true
                }else if (try2 === "jpeg"){
                    isComp = true
                }
                if (!isComp){
                    e.target.value = null
                    break
                }
            }
        }
    })

    //Post view
    
    //Open post
    $('.post--hover').click(function(){
        const postId = $(this).data("id");
        window.location = ('/posts/'+postId) 
    })

    //Open image modal
    $('.post__media-thumbnail-container').click(function (event) {
        event.stopPropagation()
        const filename = $(this).attr("value");
        $(".modal__media").show();
        $(".modal__media").find("img").attr("src", "/public/upload/media/images/" + filename);
    });

    //Close modal
    $('.modal__button-cross').click(function () {
        const modal = $(this).attr("value");
        $(modal).hide();
    });
})
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
    
    $(".post__media-wrapper").each(function () {
        let subwrarpper1 = [];
        let subwrarpper2 = [];
        let length = $(this).data("lentgh")
        $(this).find(".post__media-thumbnail-container").each(function (index) {                       
            if(length <=2){
                if (index === 0){
                    subwrarpper1.push({
                        filename: $(this).attr("value"),
                        type: $(this).data("type"),
                        pId: $(this).data("ajax")
                    })
                }else{
                    subwrarpper2.push({
                        filename: $(this).attr("value"),
                        type: $(this).data("type"),
                        pId: $(this).data("ajax")
                    })
                }
            }else if(length >2){
                if (index <=1){
                    subwrarpper1.push({
                        filename: $(this).attr("value"),
                        type: $(this).data("type"),
                        pId: $(this).data("ajax")
                    })
                }else{
                    subwrarpper2.push({
                        filename: $(this).attr("value"),
                        type: $(this).data("type"),
                        pId: $(this).data("ajax")
                    })
                }
            }
        });
        $(this).html("")
        if (subwrarpper1.length >0){
            $(this).append('<div class="post__media-subwrapper" id="subwrarpper1"></div>');
            subwrarpper1.forEach(element => {
                if(element.type === "image"){
                    $(this).find("#subwrarpper1").append('\
                    <div class="post__media-thumbnail-container" data-ajax="'+element.pId+'" value="'+element.filename+'">\
                        <img src="/public/upload/media/images/'+element.filename+'" alt="" class="post__media-image">\
                    </div>\
                    ')
                }else{
                    $(this).find("#subwrarpper1").append('\
                    <div class="post__media-thumbnail-container" data-ajax="'+element.pId+'" value="'+element.filename+'">\
                        <video class="post__media-video" controls>\
                            <source class="post__media-image" src="/public/upload/media/videos/'+element.filename+'" type="video/mp4">\
                        </video>\
                    </div>\
                    ')
                }
            });
            if(subwrarpper2.length ===0){
                $(this).find("#subwrarpper1").addClass("post__media--fullsize")
                $(this).find("#subwrarpper1").find(".post__media-thumbnail-container").addClass("post__media--fullsize")
            }
        }
        if (subwrarpper2.length >0){
            $(this).append('<div class="post__media-subwrapper" id="subwrarpper2"></div>');
            subwrarpper2.forEach(element => {
                if(element.type === "image"){
                    $(this).find("#subwrarpper2").append('\
                    <div class="post__media-thumbnail-container" data-ajax="'+element.pId+'" value="'+element.filename+'">\
                        <img src="/public/upload/media/images/'+element.filename+'" alt="" class="post__media-image">\
                    </div>\
                    ')
                }else{
                    $(this).find("#subwrarpper2").append('\
                    <div class="post__media-thumbnail-container" data-ajax="'+element.pId+'" value="'+element.filename+'">\
                        <video class="post__media-video" controls>\
                            <source class="post__media-image" src="/public/upload/media/videos/'+element.filename+'" type="video/mp4">\
                        </video>\
                    </div>\
                    ')
                }
            });
        }
    });

    //Open image modal
    $('.post__media-thumbnail-container').click(function (event) {
        event.stopPropagation()
        const filename = $(this).attr("value");
        $(".modal__media").show();
        if(filename.substr(filename.length-3,filename.length)!=="mp4"){
            $(".modal__media-thumbnail").html('\
            <img src="/public/upload/media/images/'+filename+'" alt="" class="modal__media-image">\
            ')
        }else{
            $(".modal__media-thumbnail").html('\
            <video controls>\
                <source src="/public/upload/media/videos/'+filename+'" type="video/mp4">\
            </video>\
            ')
        }
    });

    //Close modal
    $('.modal__button-cross').click(function () {
        const modal = $(this).attr("value");
        $(modal).hide();
    });

    $('.modal__media').click(function (event) {
        const modal = $(this).attr("value");
        $(".modal__media").hide();
    });
})
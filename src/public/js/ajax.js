$(function () {
    // $("#expandImage").on("click",function(){
    //     const postId = $(this).data("ajax");
    //     const mediaIndex = $(this).attr("value");
    //     $.ajax({
    //         url: "/posts/"+postId+"/"+mediaIndex,
    //         success: function(filename){
    //             console.log(mediaIndex)
    //             const wrapperImage = $("#wrapperImage")
    //             wrapperImage.show();
    //             wrapperImage.find("img").attr("src", "/public/upload/media/images/"+filename);
    //         }
    //     })
    // })
    $('a[data-pjax]').pjax()
    $('.liekPost').click(function (event) {
        event.stopPropagation();
        const element =  $(this)
        const postId = $(this).data("ajax");
        $.post("/posts/" + postId + "/like").then(function (value) {
            console.log(value)
            element.html('<i class="far fa-heart"></i> '+ value);
        });
    });
})

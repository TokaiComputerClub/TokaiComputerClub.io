$(document).ready(function(){

    //スライダー
    $("#Slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:true,
        // centerPadding:50px,
        pauseOnFocus:false,
        pauseOnHover:false,
        speed:300,
    });

    //動画ブロック
    $("#see_video").on("click",() => {
        $("#block_video").css({"display":"none"});
    });

    //質問ボタン
    $("#question_button").on("click",() => {
        $("#form_body").css({"display":"flex"})
    })
    //キャンセルボタン
    $("#cancel").on("click",() => {
        $("#form_body").css({"display":"none"})
    })
});



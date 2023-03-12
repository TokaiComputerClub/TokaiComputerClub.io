$(document).ready(function(){

    //スライダー
    $("#Slider").slick({
        autoplay:true
    });

    //動画ブロック
    $("#see_video").on("click",() => {
        $("#block_video").css({"display":"none"});
    });
});



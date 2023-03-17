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

    //フォーム送信
    $("#question_form").on("submit",() => {
        const SERVICE_ID = "service_xx4tqrl"
        const TEMPLATE_ID = "template_qd7651v"
        const MESSAGE = {
            student_number : $("student_number").text
        }

        emailjs.send(SERVICE_ID,TEMPLATE_ID,MESSAGE)
        .then(function(response) {
            alert('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('FAILED...', error);
        });
    })
});



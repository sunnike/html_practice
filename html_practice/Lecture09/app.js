/*　原生語法 Native Style */
/*function sayHello() {
    var color_array = ["#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa", "#bbbbbb", ];
    var username = document.getElementById("username").value;
    for (var i = 0; i < 10; i++) {
        document.getElementById("message").style.color = color_array[i];
        document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + "Hellow" + username + "<br>";
    }
}*/

/* jQuery */
$(function () {
    /*$("#btn1").click(function () {
        var username = $("#username").val();
        var htmlContent = `Hellow ${username}`;
        $("#message").html(htmlContent);
    });*/

    $("#username").keyup(function () {
        var username = $("#username").val();
        var htmlContent = `Hellow ${username}`;
        $("#message").html(htmlContent);
    });

    $("#btn2").click(function () {
        //$("#message").css("color", "green"); 後端不好修改
        //$("#message").addClass("red");
        //$("#message").toggleClass("red");
        $("#message").toggleClass("animated bounceIn");
    });

    $("#message").mouseenter(function () {
        //$("#message").css("color", "green"); 後端不好修改
        //$("#message").addClass("red");
        //$("#message").toggleClass("red");
        $("#message").toggleClass("animated swing");
        $("#message2").toggleClass("none");
        // $("#message2").slideToggle();
    });
});
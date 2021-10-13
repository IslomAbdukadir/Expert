let span = document.querySelectorAll(".desc__span");
let form = document.querySelectorAll(".desc__form");

$(".desc__form").hide()

$(".desc__span").hover(function () {
        // over
        $(".desc__form").show()
        span.style.margin="100px"
    }, function () {
        // out
        $(".desc__form").hide()
    }
);
$(".desc__form").hover(function () {
        // over
        $(".desc__form").show()
    }, function () {
        // out
        $(".desc__form").hide()
    }
);
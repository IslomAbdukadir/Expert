let span = document.querySelectorAll(".desc__span");
let form = document.querySelectorAll(".desc__form");

$(".desc__form").hide()

$(".desc__span").hover(function () {
    // over
    $(".desc__form").show()
    span.style.margin = "100px"
}, function () {
    // out
    $(".desc__form").hide()
});
$(".desc__form").hover(function () {
    // over
    $(".desc__form").show()
}, function () {
    // out
    $(".desc__form").hide()
});

// 

$(".productInfo-delivery").hide()
$(".productInfo-guarantee").hide()
$(".productInfo-back").hide()

$(".boxInfo-delivery").click(function () {
    $(".productInfo__box").hide()
    $(".productInfo-delivery").show()
    $(".productInfo__link").removeClass("active");
    $(".boxInfo-delivery").addClass("active");
});
$(".boxInfo-desc").click(function () {
    $(".productInfo__box").hide();
    $(".productInfo-desc").show();
    $(".productInfo__link").removeClass("active");
    $(".boxInfo-desc").addClass("active");
});
$(".boxInfo-guarantee").click(function () {
    $(".productInfo__box").hide();
    $(".productInfo-guarantee").show();
    $(".productInfo__link").removeClass("active");
    $(".boxInfo-guarantee").addClass("active");
});
$(".boxInfo-back").click(function () {
    $(".productInfo__box").hide();
    $(".productInfo-back").show();
    $(".productInfo__link").removeClass("active");
    $(".boxInfo-back").addClass("active");
});

// 

let buyBtn = document.querySelector(".buy__btn");
let buyMenu = document.querySelector(".buy");
let body = document.querySelector("body");
let contactBtn = document.querySelector(".contact__button");

contactBtn.addEventListener('click', function () {
    contactBtn.style.background = "green";
    contactBtn.style.transition = ".4s";
})

buyBtn.addEventListener('click', function () {
    buyMenu.style.display = "flex";
    body.style.overflow = "hidden";
});
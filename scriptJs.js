

var dark = document.querySelector(".fa-moon");
var main = document.querySelector(".main-container");
var body = document.querySelector("body");
var sub = document.querySelector(".sub-order");
var bell = document.querySelector(".fa-bell");
var bars = document.querySelector(".fa-bars");
var nav = document.querySelector(".nav-bar")
var flag = 0;
var check = 0;
var navCheck = 0;
dark.addEventListener("click", function () {
    if (flag === 0) {
        body.style.backgroundColor = "white";
        main.style.backgroundColor = "white";
        sub.style.backgroundColor = "white"
        dark.style.color = "black";
        flag = 1;
    } else {
        body.style.backgroundColor = "#1f2937";
        main.style.backgroundColor = "#111827";
        sub.style.backgroundColor = "#1f2937";
        dark.style.color = "#0d9e6e";
        flag = 0;
    }
});
bell.addEventListener("click", function () {
    if (check === 0) {
        bell.style.color = "white"
        check = 1;
    } else {
        bell.style.color = "#059669"
        check = 0;
    }
});
bars.addEventListener("click", function () {
    if (navCheck === 0) {
        nav.style.display = "none"
        navCheck = 1;
    } else {
        nav.style.display = "block"
        navCheck = 0;

    }
})



var dark = document.querySelector(".fa-moon") ;
    var main = document.querySelector(".main-container") ;
    var body = document.querySelector("body") ;
    var sub = document.querySelector(".sub-order");
    var bell = document.querySelector(".fa-bell");
    var flag = 0;
    var check = 0;
    dark.addEventListener("click",function(){
        if(flag === 0){
            body.style.backgroundColor = "white";
            main.style.backgroundColor = "white";
            sub.style.backgroundColor = "white"
            flag = 1;
        }else{
            body.style.backgroundColor = "#1f2937";
            main.style.backgroundColor = "#111827";
            sub.style.backgroundColor = "#1f2937";
            flag = 0;
        }
    });
    bell.addEventListener("click",function(){
        if(check === 0)
        {
            bell.style.color = "white"
            check = 1;
        }else{
            bell.style.color = "#059669"
            check = 0;
        }
    });

"use strict";
// =============== 課程 ======================

// 綁定圖片連結
let link_bt = document.getElementsByClassName("linkbt");
// 綁定包含黑色區塊的燈箱表單
let fade_in = document.getElementsByClassName("black");
// 綁定關閉按鈕
let close_bt = document.getElementsByClassName("closebt");
// 綁定除了黑色區塊外的燈箱
let hand = document.getElementsByClassName("hand-merit-fade");


for (let i = 0; i < 3; i++) {
    // 綁定事件：點擊圖片連結時，燈箱出現
    link_bt[i].addEventListener("click", function () {
        fade_in[i].style.display = 'block';
    });

    // 綁定事件：點擊關閉按鈕時，燈箱消失
    close_bt[i].addEventListener("click", function () {
        fade_in[i].style.display = 'none';
    });

    // 綁定事件：如果點擊目標事件 = fade_in時，燈箱消失
    // 點擊燈箱之外的區域，燈箱消失
    //寫法1
    fade_in[i].addEventListener("click", function (event) {
        if (event.target == fade_in[i]) {
            fade_in[i].style.display = 'none';
        }
    });

    //寫法2
    // fade_in[i].addEventListener("click",function(e){
    //     e.stopPropagation();
    //     fade_in[i].style.display = 'none';
    // });
    // hand[i].addEventListener("click",function(e){
    //     e.stopPropagation();
    //     fade_in[i].style.display = 'block';
    // });
}


// 判斷是否滑動到線上預約
$(document).ready(function () {
    var a, b, c;
    a = $(window).height();    //瀏覽器視窗高度  
    $(window).scroll(function () {
        b = $(this).scrollTop();   //頁面滾動的高度  
        c = $(".course-container").offset().top;    //元素距離文件(document)頂部的高度  
        // console.log(a);  
        // console.log(b);  
        // console.log(c);  
        if ( b > 350) {
            $(".nav-reserve"). addClass("-on")
            $(".nav-course"). removeClass("-on")
        }if (b <= 350){
            $(".nav-reserve"). removeClass("-on")
            $(".nav-course"). addClass("-on")
        }
    });  
});











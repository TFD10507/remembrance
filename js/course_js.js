"use strict";
// =============== 課程 ======================

// 綁定圖片連結
let link_bt = document.getElementsByClassName("linkbt");
// 綁定燈箱表單
let fade_in = document.getElementsByClassName('black');
// 綁定關閉按鈕
let close_bt = document.getElementsByClassName("closebt");


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
    fade_in[i].addEventListener("click", function (event) {
        if(event.target == fade_in[i]){
            fade_in[i].style.display = 'none';
        }
    });
}






// let link_bt = document.getElementsByClassName("linkbt")[0];
// let fade_in = document.getElementsByClassName('hand-merit-fade')[0];
// let close_bt = document.getElementsByClassName("closebt")[0];

// link_bt.onclick = function() {
//     fade_in.style.display = 'block';
// }
// close_bt.onclick = function() {
//     fade_in.style.display = 'none';
// }


// let link_bt_1 = document.getElementsByClassName("linkbt")[1];
// let fade_in_1 = document.getElementsByClassName('hand-merit-fade')[1];
// let close_bt_1 = document.getElementsByClassName("closebt")[1];

// link_bt_1.onclick = function() {
//     fade_in_1.style.display = 'block';
// }
// close_bt_1.onclick = function() {
//     fade_in_1.style.display = 'none';
// }



// let link_bt_2 = document.getElementsByClassName("linkbt")[2];
// let fade_in_2 = document.getElementsByClassName('hand-merit-fade')[2];
// let close_bt_2 = document.getElementsByClassName("closebt")[2];

// link_bt_2.onclick = function() {
//     fade_in_2.style.display = 'block';
// }
// close_bt_2.onclick = function() {
//     fade_in_2.style.display = 'none';
// }
"use strict";
// =================== 數量加減 ======================

let num_jia = document.getElementsByClassName("num-jia")[0];
let num_jian = document.getElementsByClassName("num-jian")[0];
let input_num = document.getElementsByClassName("input-num")[0];
num_jia.addEventListener("click", function () {
    input_num.value = parseInt(input_num.value) + 1;
});

num_jian.addEventListener("click", function () {
    if (input_num.value <= 1) {
        input_num.value = 1;
    } else {

        input_num.value = parseInt(input_num.value) - 1;
    }
});

let num_jia_1 = document.getElementsByClassName("num-jia")[1];
let num_jian_1 = document.getElementsByClassName("num-jian")[1];
let input_num_1 = document.getElementsByClassName("input-num")[1];

num_jia_1.addEventListener("click", function () {
    input_num_1.value = parseInt(input_num_1.value) + 1;
});

num_jian_1.addEventListener("click", function () {
    if (input_num_1.value <= 1) {
        input_num_1.value = 1;
    } else {
        input_num_1.value = parseInt(input_num_1.value) - 1;
    }
});



// ==================== 刪除 =========================

let del = document.getElementsByClassName("del");

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
        let closest_ul = this.closest("ul");
        console.log(closest_ul);
        closest_ul.remove();
    });
}
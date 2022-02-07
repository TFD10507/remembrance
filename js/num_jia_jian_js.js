"use strict";
// ===============================================
var num_jia = document.getElementsByClassName("num-jia")[0];
        var num_jian = document.getElementsByClassName("num-jian")[0];
        var input_num = document.getElementsByClassName("input-num")[0];

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

        var num_jia_1 = document.getElementsByClassName("num-jia")[1];
        var num_jian_1 = document.getElementsByClassName("num-jian")[1];
        var input_num_1 = document.getElementsByClassName("input-num")[1];

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


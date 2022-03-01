"use strict";
var add_cart_btn = document.getElementsByClassName("prd-btn")[0];
var prd_wrp = document.getElementsByClassName("top")[0];
if (add_cart_btn != null && prd_wrp != null) {
    add_cart_btn.addEventListener("click", function (e) {
        e.preventDefault();

        //判斷商品數量
        var count_nub = document.getElementsByClassName("prd_nub")[0];
        let prd_name = document.getElementsByTagName("h2")[0];
        let prd_id = prd_name.getAttribute("prd_id");
        // console.log(prd_id);
        // console.log(prd_name.innerText)
        let prd_conut = document.querySelectorAll(".num option")[0];
        let price = document.getElementsByClassName("price")[0];
        // let prd_price = price.querySelector(".prd_price");
        // console.log(prd_price);
        // 存入localStorage
        let task = {
            "prd_id": prd_id,
            "prd_name": prd_name.innerText,
            "prd_price": price.innerText,
            "prd_count": prd_conut.value,
            "prd_text": ''
        };

        let carts = JSON.parse(localStorage.getItem("carts"));
        if (prd_conut.value !== 0 || prd_conut.value !== "") {
            // console.log(carts);
            // console.log(prd_conut.value);
            if (carts) { // 若存在
                carts.unshift(task); // [{}, {}]
            } else { // 若不存在
                carts = [task];
            }
            localStorage.setItem("carts", JSON.stringify(carts));
            alert("已加入購物車！");
            cart_count_renew();
        };
    });
 
};
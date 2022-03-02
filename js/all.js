function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderItems = document.querySelectorAll('.slide-in');
// console.log(sliderImages);

function checkSlide() {
    sliderItems.forEach(sliderItem => {
        // 取得圖片1/2高度的定位點（卷軸垂直位移量＋視窗高度）- 1/2圖片高度
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderItem.offsetHeight / 100);
        // console.log(slideInAt);
        // 取得圖片底部定位點（利用圖片頂部定位點+圖片高度取得）
        const imageBottom = sliderItem.offsetTop + sliderItem.offsetHeight;
        // console.log(imageBottom);
        // 判斷視窗是否已經超過圖片高度一半
        const isHalfShown = slideInAt > sliderItem.offsetTop;
        // 判斷滾動範圍是否已經超過圖片底部（卷軸垂直位移量）
        const isNotScrolledPast = window.scrollY < imageBottom;
        // 判斷是否超過圖片一半高，且視窗尚未超過圖片底部來增加或移除css效果
        if (isHalfShown && isNotScrolledPast) {
            sliderItem.classList.add('active');
        } else {
            sliderItem.classList.remove('active');
        }
    });
}

window.addEventListener('load', debounce(checkSlide));
window.addEventListener('scroll', debounce(checkSlide));



// go to top
document.addEventListener('DOMContentLoaded', function () {
    $(function () {
        var $win = $(window);
        var $backToTop = $('.js-back-to-top');

        // 當user滾動到離頂部300像素時，展示回到頂部按鈕
        $win.scroll(function () {
            if ($win.scrollTop() > 300) {
                $backToTop.show();
            }else if ($win.scrollTop() == 0) {
                let slide_in_rwds = document.querySelectorAll('.slide-in-rwd');
                slide_in_rwds.forEach(slide_in_rwd => {
                    slide_in_rwd.classList.add('active');
                });
            }else {
                $backToTop.hide();
            }
        });

        // 當user點擊按鈕時，通過動畫效果返回頭部
        $backToTop.click(function () {
            $('html, body').animate({ scrollTop: 0 }, 700);
        });

    });
});
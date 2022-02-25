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

window.addEventListener('scroll', debounce(checkSlide));


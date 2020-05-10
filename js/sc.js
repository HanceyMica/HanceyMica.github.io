document.addEventListener("touchmove", function (e) {
    // console . log("正常滑动! ");|
    e . preventDefault();
    e. stopPropagation();
}, false);
setTimeout(function () {
var startY = 0;
var startX = 0;
var b = document.body;
b.addEventListener('touchstart', function (event) {
    parent.window.scrollTo(0, 1);
    startY = event.targetTouches[0].pageY;
    startX = event.targetTouches[0].pageX;
});
b.addEventListener('touchmove', function (event) {
    event.preventDefault();
    var posy = event.targetTouches[0].pageY;
    var h = parent.document.getElementById("scroller");
    var sty = h.scrollTop;

    var posx = event.targetTouches[0].pageX;
    var stx = h.scrollLeft;
    h.scrollTop = sty - (posy - startY);
    h.scrollLeft = stx - (posx - startX);
    startY = posy;
    startX = posx;
});
}, 1000);
document.addEventListener("DOMContentLoaded", function () {
    var content = document.getElementById('content');
    var contentheight = content.offsetTop;
    window.onscroll = function () {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > contentheight || document.documentElement.scrollTop > contentheight) {
            document.getElementById("scrollnav").style.display = "block";
        } else {
            document.getElementById("scrollnav").style.display = "none";
        }
    }


});
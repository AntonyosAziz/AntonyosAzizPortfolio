var audio = document.getElementById("myAudio");
var hasScrolled = false;

window.addEventListener("scroll", function() {
    if (!hasScrolled) {
        hasScrolled = true;
        audio.addEventListener("canplay", function() {
            audio.currentTime = 15;
            audio.play();
        });
    }
});
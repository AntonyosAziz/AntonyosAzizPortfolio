/*"document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    var hasScrolled = false;

    if (audio) {
        window.addEventListener('scroll', function() {
            if (!hasScrolled) {
                hasScrolled = true;
                audio.addEventListener('canplay', function() {
                    audio.currentTime = 15;
                    audio.play();
                });
            }
        });
    }
});*/

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    var hasScrolled = false;

    if (audio) {
        // Setze die Startzeit
        audio.currentTime = 15;

        // Starte die Wiedergabe beim ersten Scrollen
        window.addEventListener('scroll', function() {
            if (!hasScrolled) {
                hasScrolled = true;
                audio.play();
            }
        });
    }
});

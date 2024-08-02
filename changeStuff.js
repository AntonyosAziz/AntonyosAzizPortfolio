@font-face {
    font-family: "Typewriter";
    src: local('Mom´sTypewriter');
    src: url('Moms_typewriter-webfont.eot');
    src: url('Moms_typewriter-webfont.eot?#iefix') format('embedded-opentype'),
         url('Moms_typewriter-webfont.woff2') format('woff2'),
         url('Moms_typewriter-webfont.woff') format('woff'),
         url('Moms_typewriter-webfont.ttf') format('truetype'),
         url('Moms_typewriter-webfont.svg#momstypewriterregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
// Array mit ausgewählten Fonts
const fonts = ['Edit Points Filled', 'The Centurion', 'Typewriter', 'Logotype'];
const imagelist = ['adam.png', 'stepDom.png', 'pyr.png', 'chromeDino.png']; // Liste der Bildpfade
// Funktion, um den Font zufällig zu ändern
// Funktion, um jeden Buchstaben in einem <p> Element unterschiedlich zu ändern
function changeStuff() {
const paragraphs = document.getElementsByTagName('p');
var image = document.getElementById('sneakpeak');

    setInterval(() => {
        let randomnumb =Math.floor(Math.random() * fonts.length)
        const randomFont = fonts[randomnumb];

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontFamily = randomFont;
            image.src = imagelist[randomnumb];

        }
    }, 1000);} // Change font every 10 seconds (10000 milliseconds)

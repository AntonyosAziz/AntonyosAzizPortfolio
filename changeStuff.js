// Array mit ausgewählten Fonts
const fonts = ['Edit Points Filled', 'The Centurion', 'Mom´sTypewriter', 'Logotype'];
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

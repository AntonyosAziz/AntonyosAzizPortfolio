// Erstelle ein neues style-Element
var style = document.createElement('style');

// Definiere die @font-face-Regel für die benutzerdefinierte Schriftart
var fontFace = `
    @font-face {
        font-family: "Logotype";
        src: local(Logotype-Regular);
             url('LogoType.ttf') format('truetype')
    }
`;

// Füge die @font-face-Regel dem style-Element hinzu
style.appendChild(document.createTextNode(fontFace));

// Füge das style-Element dem head-Bereich des Dokuments hinzu
document.head.appendChild(style);

// Verwende die benutzerdefinierte Schriftart in deinem CSS
document.body.style.fontFamily = 'Logotype, sans-serif';
// Erstelle ein neues style-Element
var style = document.createElement('style');

// Definiere die @font-face-Regel für die benutzerdefinierte Schriftart
var fontFace = `
    @font-face {
        font-family: "EditPointsFilled";
        src: local(EditPointsFilled);
             url('EditPointsFilled.ttf') format('truetype')
    }
`;

// Füge die @font-face-Regel dem style-Element hinzu
style.appendChild(document.createTextNode(fontFace));

// Füge das style-Element dem head-Bereich des Dokuments hinzu
document.head.appendChild(style);

// Verwende die benutzerdefinierte Schriftart in deinem CSS
document.body.style.fontFamily = 'EditPointsFilled, sans-serif';
// Erstelle ein neues style-Element
var style = document.createElement('style');

// Definiere die @font-face-Regel für die benutzerdefinierte Schriftart
var fontFace = `
    @font-face {
        font-family: "MomsTypewriter";
        src: local(Moms_typewriter-webfont);
             url('Moms_typewriter-webfont.ttf') format('truetype')
    }
`;

// Füge die @font-face-Regel dem style-Element hinzu
style.appendChild(document.createTextNode(fontFace));

// Füge das style-Element dem head-Bereich des Dokuments hinzu
document.head.appendChild(style);

// Verwende die benutzerdefinierte Schriftart in deinem CSS
document.body.style.fontFamily = 'MomsTypewriter, sans-serif';
// Erstelle ein neues style-Element
var style = document.createElement('style');

// Definiere die @font-face-Regel für die benutzerdefinierte Schriftart
var fontFace = `
    @font-face {
        font-family: "TheCenturion";
        src: local(The Centurion);
             url('The Centurion .ttf') format('truetype')
    }
`;

// Füge die @font-face-Regel dem style-Element hinzu
style.appendChild(document.createTextNode(fontFace));

// Füge das style-Element dem head-Bereich des Dokuments hinzu
document.head.appendChild(style);

// Verwende die benutzerdefinierte Schriftart in deinem CSS
document.body.style.fontFamily = 'TheCenturion, sans-serif';

// Array mit ausgewählten Fonts
const fonts = ['EditPointsFilled', 'TheCenturion', 'Typewriter', 'Logotype'];
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

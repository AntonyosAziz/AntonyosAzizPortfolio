// Erstelle ein neues style-Element
var style = document.createElement('style');

// Definiere die @font-face-Regel für die benutzerdefinierte Schriftart
var fontFace = `
    @font-face {
        font-family: "Logotype";
        src: local(Logotype);
        src: url('Logotype.ttf') format('truetype')
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
        src: url('EditPointsFilled.ttf') format('truetype')
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
        src: url('Moms_typewriter-webfont.ttf') format('truetype')
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
        src:  url('The Centurion .ttf') format('truetype')
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

let isBlack = false;

function changeBackgroundColorOnScroll() {
    const hyroDiv = document.getElementById('oldEgy');
    const textOben = hyroDiv.querySelector('.hyrotextup');
    const textUnten = hyroDiv.querySelector('.hyrotextdown');

    window.addEventListener('scroll', function() {
        if (!isBlack && isElementInViewport(hyroDiv)) {
            gradualBackgroundColorChange();
            isBlack = true;
            setTimeout(() => {
                moveTextFromTopToBottom();
                setTimeout(()=>{
                    moveTextFromTopToBottom2();
                },2000);
            }, 2000);
        }
    });
}
function gradualBackgroundColorChange() {
    let currentColor = [233,212,142]; // Anfangsfarbe (Weiß)
    let targetColor = [0, 0, 0]; // Ziel-Farbe (Schwarz)
    let steps = 100; // Anzahl der Schritte für die Farbänderung

    let step = [
        (targetColor[0] - currentColor[0]) / steps,
        (targetColor[1] - currentColor[1]) / steps,
        (targetColor[2] - currentColor[2]) / steps
    ];

    let i = 0;
    let timer = setInterval(() => {
        currentColor[0] += step[0];
        currentColor[1] += step[1];
        currentColor[2] += step[2];

        document.body.style.backgroundColor = `rgb(${Math.round(currentColor[0])}, ${Math.round(currentColor[1])}, ${Math.round(currentColor[2])})`;

        i++;
        if (i >= steps) {
            clearInterval(timer);
        }
    }, 20); // Zeitintervall für jeden Schritt (hier: 20 Millisekunden)
}

function moveTextFromTopToBottom() {
    const textUnten = document.querySelectorAll('.hyrotextdown');

    textUnten.forEach(text => {
        text.style.transition = 'transform 2s ease'; // Übergangszeit für die Animation
        text.style.transform = `translateY(100px)`; // Bewegt den Text nach unten (100px), ändere den Wert nach Bedarf
    });
}
function moveTextFromTopToBottom2() {
    const textUnten = document.querySelectorAll('.hyrotextdown2');

    textUnten.forEach(text => {
        text.style.transition = 'transform 2s ease'; // Übergangszeit für die Animation
        text.style.transform = `translateY(100px)`; // Bewegt den Text nach unten (100px), ändere den Wert nach Bedarf
    });
}

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


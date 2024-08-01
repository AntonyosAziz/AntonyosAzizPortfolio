const square = document.getElementById('square');
let position = 0;
let speed = 2;

function moveSquare() {
    position += speed;
    square.style.left = position + 'px';

    if (position > window.innerWidth) {
        position = -50;
    }

    requestAnimationFrame(moveSquare);
}

moveSquare();
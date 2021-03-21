/* Met de import statement importeer je data uit een andere file, in de andere file moet ook met export aangegeven worden wat precies
geëxporteerd moet worden. */

import { draw as drawSnake, update as updateSnake, SNAKE_SPEED} from './snake.js'

let lastRenderTime = 0;

/* Creeër een game loop met de main functie door hierin de currentTime in te passen,
De currentTime begint te tellen wanneer deze gecalled wordt, de browser update het scherm
constant met de window.requestAnimationFrame functie.

secondsSinceLastRender = currentTime(dit is de tijd dat het spel actief is) - lastRenderTime(dit is currentTime - 1 seconde / SNAKE_SPEED),
het if statement block checked constant of weer een frame processed moet worden; hoe hoger de SNAKE_SPEED hoe meer frames processed worden
per seconde. */
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    console.log("render");

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function draw() {
    drawSnake();
}
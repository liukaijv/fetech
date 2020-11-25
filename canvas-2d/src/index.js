import Image from "./image";
import Sprite from "./sprite";
import Text from "./text";
import Render from "./render";

let stage;
let initialized = false;

function init(canvas, width, height, bg = "#000") {
    if (initialized) {
        console.log("has initialized");
        return;
    }
    initialized = true;
    stage = new Sprite();
    stage.width = width;
    stage.height = height;

    let ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.style.backgroundColor = bg;

    new Render(ctx, stage);
}


export {
    Image,
    Sprite,
    Text,
    Render,
    init,
    stage,
}


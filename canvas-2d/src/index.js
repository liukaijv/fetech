import Image from "./image";
import Sprite from "./sprite";
import Text from "./text";
import Button from "./button";
import Render from "./render";

// 全局stage
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

    // 设置画面大小用的是canvas.width，canvas.height而不是canvas.style.width，canvas.style.height
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = bg;

    new Render(ctx, stage);
}


export {
    Image,
    Sprite,
    Text,
    Button,
    Render,
    init,
    stage,
}


import Sprite from "./sprite";

export default class Image extends Sprite {
    constructor() {
        super();
        this._img = null;
    }

    draw(ctx) {
        if (this._img) {
            // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage
            ctx.drawImage(this._img,
                0, 0, this.width, this.height,
            );
        }
    }

    load(url) {
        let img = new window.Image();
        img.src = url;
        img.onload = () => {
            this._onLoaded(img);
        };
    }

    _onLoaded(img) {
        this._img = img;
        this.width = this.width || img.width;
        this.height = this.height || img.height;
    }
}
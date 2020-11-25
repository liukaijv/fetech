import Sprite from "./sprite";
import Rectangle from "./rectangle";

export default class Image extends Sprite {
    constructor() {
        super();
        this._img = null;
        this.bounds = new Rectangle();
        this.frame = new Rectangle();
    }

    draw(ctx) {
        if (this._img) {
            ctx.drawImage(this._img,
                this.frame.x, this.frame.y, this.frame.w, this.frame.h,
                this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h
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
        this.bounds.w = img.width;
        this.bounds.h = img.height;
        this.frame.w = img.width;
        this.frame.h = img.height;
    }
}
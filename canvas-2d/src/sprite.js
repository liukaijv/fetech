import Matrix from "./matrix";

export default class Sprite {

    constructor() {

        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.alpha = 1;
        this.rotate = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.skewX = 0;
        this.skewY = 0;
        this.transform = new Matrix();
        this.children = [];
        this.parent = null;

    }

    addChild(sprite) {
        if (sprite.parent === this) {
            this.removeChild(sprite);
            this.children.push(sprite);
        } else {
            sprite.removeSelf();
            this.children.push(sprite);
            sprite.parent = this;
        }
    }

    removeChild(sprite) {
        let index = this.children.findIndex(sprite);
        if (index > -1) {
            this.children.splice(index, 1);
            sprite.parent = null;
        }
    }

    removeSelf() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }


    removeChildren() {
        for (let child of this.children) {
            child.parent = null;
        }
        this.children = [];
    }

    draw(ctx) {
    }

    render(ctx) {

        // 变形处理
        this.transform.reset();
        this.transform.rotate(this.rotate * Math.PI / 180);
        this.transform.scale(this.scaleX, this.scaleY);
        this.transform.skew(this.skewX, this.skewY);
        this.transform.translate(this.x, this.y);

        let alpha = this.alpha;
        if (this.parent != null) {
            alpha *= this.parent.alpha;
            this.transform.mul(this.parent.transform);
        }

        ctx.globalAlpha = alpha;

        let {a, b, c, d, e, f} = this.transform;
        ctx.setTransform(a, b, c, d, e, f);

        if (this.draw) {
            this.draw(ctx);
        }

        for (let child of this.children) {
            child.render(ctx);
        }
    }
}
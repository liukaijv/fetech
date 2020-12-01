import Sprite from "./sprite";

export default class Text extends Sprite {

    constructor(value = 'value') {
        super();
        this.fontSize = 16;
        this.fontfamily = 'Arial';
        this.fontWeight = 'normal';
        this.color = '#000000';
        this.baseline = 'top';
        this.align = 'left';
        this.lineHeight = undefined;
        this._lines = [];
        this._text = value;
        this._checkMultiline();
    }

    get text() {
        return this._text;
    }

    set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._checkMultiline();
        }
    }

    _checkMultiline() {
        this._lines = this._text.split('\n');
        this._multiline = this._lines.length > 0;
    }

    draw(ctx) {

        ctx.font = `${this.fontWeight} ${this.fontSize}pt ${this.fontfamily}`;
        ctx.textBaseline = this.baseline;
        ctx.textAlign = this.align;
        ctx.fillStyle = this.color;

        if (this._multiline) {
            for (let i = 0, l = this._lines.length; i < l; i++) {
                let lineHeight = this.lineHeight ? this.lineHeight : this.fontSize * 1.5;
                ctx.fillText(this._lines[i], this.x, this.y + i * lineHeight);
            }
        } else {
            ctx.fillText(this._text, this.x, this.y);
        }

    }
}
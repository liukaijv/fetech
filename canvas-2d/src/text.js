import Sprite from "./sprite";

export default class Text extends Sprite {

    constructor(value = 'value') {
        super();
        this.fontSize = 20;
        this.fontfamily = 'Arial';
        this.fontweight = 'normal';
        this.color = '#000000';
        this.baseline = 'top';
        this.align = 'left';
        this.lineSpace = undefined;
        this._text = value;
        this._lines = [];
    }

    get text() {
        return this._text;
    }

    set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._lines = this._text.split('\n');
            this._multiline = this._lines.length > 0;
        }
    }

    draw(ctx) {

        ctx.font = `${this.fontweight} ${this.fontSize}pt ${this.fontfamily}`;
        ctx.textBaseline = this.baseline;
        ctx.textAlign = this.align;
        ctx.fillStyle = this.color;

        if (this._multiline) {
            for (let i = 0, l = this._lines.length; i < l; i++) {
                let sp = this.lineSpace !== undefined ? this.lineSpace : this.size + 8;
                ctx.fillText(this._lines[i], 0, i * sp);
            }
        } else {
            ctx.fillText(this._text, 0, 0);
        }

    }
}
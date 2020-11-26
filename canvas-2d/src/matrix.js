/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/transform
 *  a    c    e
 * [b    d    f]
 *  0    0    1
 */
export default class Matrix {

    /**
     * @param a 缩放或旋转时影响像素沿x轴定位
     * @param b 缩放或旋转时影响像素沿y轴定位
     * @param c 倾斜或旋转时影响像素沿x轴定位
     * @param d 倾斜或旋转时影响像素沿y轴定位
     * @param e 沿x轴平移距离
     * @param f 沿y轴平移距离
     */
    constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }

    translate(x, y) {
        this.e += x;
        this.f += y;
        return this;
    }

    scale(x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.e *= x;
        this.f *= y;
        return this;
    }

    rotate(deg) {
        const {a, b, c, d, e, f} = this;
        const sin = Math.sin(deg);
        const cos = Math.cos(deg);

        this.a = a * cos + b * sin;
        this.b = -a * sin + b * cos;
        this.c = c * cos + d * sin;
        this.d = -c * sin + cos * d;
        this.e = cos * e + sin * f;
        this.f = cos * f - sin * e;

        return this;
    }

    skew(x, y) {
        const tanX = Math.tan(x);
        const tanY = Math.tan(y);
        const {a, b, c, d} = this;

        this.a += tanY * c;
        this.b += tanY * d;
        this.c += tanX * a;
        this.d += tanX * b;

        return this;
    }

    mul(m1) {
        const {a, b, c, d, e, f} = this;
        const a1 = m1.a;
        const b1 = m1.b;
        const c1 = m1.c;
        const d1 = m1.d;
        const e1 = m1.e;
        const f1 = m1.f;

        this.a = a * a1 + c * b1;
        this.b = b * a1 + d * b1;
        this.c = a * c1 + c * d1;
        this.d = b * c1 + d * d1;
        this.e = a * e1 + c * f1 + e;
        this.f = b * e1 + d * f1 + f;

        return this;
    }

    reset() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
    }
}
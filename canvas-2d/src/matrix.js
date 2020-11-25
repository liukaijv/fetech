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
        let cos = Math.cos(deg);
        let sin = Math.sin(deg);
        let a1 = this.a;
        let c1 = this.c;
        let e1 = this.e;

        this.a = a1 * cos - this.b * sin;
        this.b = a1 * sin + this.b * cos;
        this.c = c1 * cos - this.d * sin;
        this.d = c1 * sin + this.d * cos;
        this.tx = e1 * cos - this.ty * sin;
        this.ty = e1 * sin + this.ty * cos;

        return this;
    }

    skew(x, y) {
        let tanX = Math.tan(x);
        let tanY = Math.tan(y);
        let a1 = this.a;
        let b1 = this.b;
        this.a += tanY * this.c;
        this.b += tanY * this.d;
        this.c += tanX * a1;
        this.d += tanX * b1;
        return this;
    }

    mul(m2) {
        let aa = this.a, ab = this.b, ac = this.c, ad = this.d, ae = this.e, af = this.f;
        let ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, be = m2.e, bf = m2.f;
        if (bb !== 0 || bc !== 0) {
            this.a = aa * ba + ab * bc;
            this.b = aa * bb + ab * bd;
            this.c = ac * ba + ad * bc;
            this.d = ac * bb + ad * bd;
            this.e = ba * ae + bc * af + be;
            this.f = bb * ae + bd * af + bf;
        } else {
            this.a = aa * ba;
            this.b = ab * bd;
            this.c = ac * ba;
            this.d = ad * bd;
            this.e = ba * ae + be;
            this.f = bd * af + bf;
        }
    }
}
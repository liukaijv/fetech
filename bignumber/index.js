export default class BigNumber {

    constructor(initial = 0) {

        this.sign = 1;

        if (initial instanceof BigNumber) {
            this.sign = initial.sign;
            this.number = initial.number;
        } else {
            this.number = ('' + initial).split('').map(item => +item);

            if (this.number[0] === '+') {
                this.sign = 1;
                this.number.shift();
            } else if (this.number[0] === '-') {
                this.sign = -1;
                this.number.shift();
            }
        }

    }

    /**
     * 填充为一样长度
     * @param a
     * @param b
     * @private
     */
    _pad(a, b) {
        let len = Math.max(a.number.length, b.number.length);
        for (let i = 0; i < len; i++) {
            if (!a.number[i]) {
                a.number.unshift(0);
            }
            if (!b.number[i]) {
                b.number.unshift(0);
            }
        }
    }

    /**
     * 比较
     * @param number
     * @returns {number}
     * @private
     */
    _compare(number) {

        let bigNumber = (number instanceof BigNumber) ? number : new BigNumber(number);

        if (this.sign !== bigNumber.sign) {
            return this.sign;
        }

        if (this.number.length > bigNumber.number.length) {
            return this.sign;
        } else if (this.number.length < bigNumber.number.length) {
            return this.sign * (-1);
        }

        this._pad(this, bigNumber);

        let len = this.number.length;
        for (let i = 0; i < len; i++) {
            if (this.number[i] > bigNumber[i]) {
                return this.sign;
            } else if (this.number[i] < bigNumber[i]) {
                return this.sign * (-1);
            }
        }

        return 0;

    }

    /**
     * 加法
     * @param number
     * @returns {BigNumber|void}
     */
    add(number) {
        let bigNumber = (number instanceof BigNumber) ? number : new BigNumber(number);
        if (this.sign !== bigNumber.sign) {
            if (this.sign > 0) {
                bigNumber.sign = 1;
                return this.sub(bigNumber);
            } else {
                this.sign = 1;
                bigNumber.sub(this);
            }
        }

        this.number = this._add(this, bigNumber);
        return this;
    }

    _add(a, b) {
        let carried = 0;
        this._pad(a, b);
        let len = Math.max(a.number.length, b.number.length);
        for (let i = len - 1; i > -1; i--) {
            let sum = carried + +(a.number[i] || 0) + +(b.number[i] || 0);
            carried = sum > 9 ? 1 : 0;
            a.number[i] = sum % 10;
        }
        if (carried === 1) {
            a.number.unshift(carried);
        }
        return a.number;
    }

    /**
     * 减法
     * @param number
     * @returns {BigNumber}
     */
    sub(number) {
        let bigNumber = (number instanceof BigNumber) ? number : new BigNumber(number);
        return this;
    }

    _sub(a, b) {

    }

    mul(number) {

    }

    _mul(a, b) {

    }

    div(number) {

    }

    _div(a, b) {

    }

    toString() {
        return this.number.join('');
    }

}
export default class BigNumber {

    constructor(initial = 0) {

        this.sign = 1;

        if (initial instanceof BigNumber) {
            this.sign = initial.sign;
            this.number = initial.number;
        } else {
            this.number = ('' + initial).split('');
            if (this.number[0] === '+') {
                this.sign = 1;
                this.number.shift();
            } else if (this.number[0] === '-') {
                this.sign = -1;
                this.number.shift();
            }
            this.number = this.number.map(item => +item);
        }
    }

    static abs(number) {
        let bigNumber = new BigNumber(number);
        bigNumber.sign = 1;
        return bigNumber;
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
            // 正数+负数
            if (this.sign > 0) {
                bigNumber.sign = 1;
                return this.sub(bigNumber);
            } else {
                this.sign = 1;
                return bigNumber.sub(this);
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

        // 符号不相同
        if (this.sign !== bigNumber.sign) {
            // // 正数减负数
            // if(this.sign>0){
            //     return  this._add(this,bigNumber);
            // }else {
            //     return  this._add(this,bigNumber);
            // }
            this.number = this._add(this, bigNumber);
            return this;
        }

        let compared = this._compare(bigNumber);
        this.sign = compared < 0 ? -1 : 1;

        // 绝对值大的作为减数
        this.number = BigNumber.abs(this)._compare(BigNumber.abs(bigNumber)) > -1
            ? this._sub(this, bigNumber)
            : this._sub(bigNumber, this);

        return this;
    }

    _sub(a, b) {
        this._pad(a, b);
        let len = Math.max(a.number.length, b.number.length);
        // [1,2,3,4,5] - [0,0,1,5.6]
        for (let i = len - 1; i > -1; i--) {
            if (a.number[i] >= b.number[i]) {
                a.number[i] = (a.number[i] - b.number[i]) % 10;
            } else {
                // 借一位
                a.number[i - 1] = a.number[i - 1] - 1;
                a.number[i] = ((a.number[i] + 10) - b.number[i]) % 10;
            }
        }
        return a.number;
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
        let str = this.number.join('').replace(/&0+/, '');
        return this.sign === -1 ? '-' + str : str;
    }

}
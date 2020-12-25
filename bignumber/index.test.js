import BigNumber from './index'
import assert from 'assert'

describe('test', function () {

    test("_compare", () => {


        let i = 12346;
        let j = 234567;

        let a = new BigNumber(i);
        let b = new BigNumber(j);

        assert.strictEqual(a._compare(b), -1)
        assert.strictEqual(b._compare(a), 1)
        assert.strictEqual(a._compare(a), 0)

    });

    test("add positive", () => {


        let i = 12346;
        let j = 234567;

        let a = new BigNumber(i);
        let b = new BigNumber(j);

        assert.strictEqual(a.add(b).toString(), (i + j).toString())

    });

    test("add negative", () => {


        let i = 12346;
        let j = -234567;

        let a = new BigNumber('' + i);
        let b = new BigNumber('' + j);

        assert.strictEqual(a.add(b).toString(), (i + j).toString())

    });

});


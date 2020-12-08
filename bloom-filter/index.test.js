import BloomFilter from "./index";

test("test", () => {
    let bloomFilter = new BloomFilter(100);

    let str = '14141414'

    bloomFilter.insert(str);

    console.log(bloomFilter.test(str))

})
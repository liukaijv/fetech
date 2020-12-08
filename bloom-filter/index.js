export default class BloomFilter {

    constructor(size = 100) {
        this.size = size;
        this.initStorage(size);
    }

    initStorage(size) {
        this.storage = new Array(size);
        this.storage.fill(false, 0, size - 1);
    }

    insert(item) {
        const hashValues = this.getHashValues(item);
        hashValues.forEach(value => this.storage[value] = true);
    }

    test(item) {
        const hashValues = this.getHashValues(item);
        return hashValues.every(value => this.storage[value] === true);
    }

    hash1(item) {
        let hash = 0;
        for (let charIndex = 0; charIndex < item.length; charIndex++) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) + hash + char;
            hash &= hash;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    hash2(item) {
        let hash = 0;
        for (let charIndex = 0; charIndex < item.length; charIndex++) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) + hash + char;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    hash3(item) {
        let hash = 0;
        for (let charIndex = 0; charIndex < item.length; charIndex++) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) - hash;
            hash += char;
            hash &= hash;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    getHashValues(item) {
        return [
            this.hash1(item),
            this.hash2(item),
            this.hash3(item),
        ]
    }

}
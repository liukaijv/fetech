export default class Rectangle {

    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    right() {
        return this.x + this.width;
    }

    bottom() {
        return this.y + this.height;
    }

}
import Mobile from "./Mobile";
import SaucerSrc from "./assets/images/flyingSaucer-petit.png";

export default class Saucer extends Mobile{

    #falling = false;
    constructor (x, y){
        super(SaucerSrc, x, y, -3, 0);
    }

    move() {
        if (this.x - this.deltaX <= 0) {
            return true;
        }
        this.x += this.deltaX;
        this.y += this.deltaY;
        return false;
    }

    setFall() {
        this.#falling= true;
        this.deltaX = 0;
        this.deltaY = 3;
    }

    get falling() {
        return this.#falling;
    }
}
import Mobile from './Mobile.js';
import shipSrc from "./assets/images/vaisseau-ballon-petit.png"

export default class Starship extends Mobile {
    #moving;

    constructor(x,y){
        super(shipSrc,x,y,0,8);
    }

    get up() {
        return this.#moving == 1;
    }

    get down() {
        return this.#moving == -1;
    }

    moveUp() {
        this.y -= this.deltaY;
    }

    moveDown() {
        this.y += this.deltaY;
    }

    move(canvas) {
        if ( this.up && (this.y - this.deltaY >= 0) ) {
            this.moveUp();
        }
        else if ((this.down && this.y + this.deltaY <= canvas.height - 39)) {
            this.moveDown();
        }
    }

    handleMoveKeys(keyManager,canvas) {
        this.#moving = 0;

        if (keyManager.up) {
            this.#moving = 1;
        }
        if (keyManager.down) {
            this.#moving = -1;
        }
        
        this.move(canvas);
    }
}
export default class Mobile{

    #x;
    #y;
    #image;
    #deltaX;
    #deltaY;

    constructor (image, x, y, deltaX = 0, deltaY = 0){
        this.#image = this.#createImage(image);
        this.#x = x;
        this.#y = y;
        this.#deltaX = deltaX;
        this.deltaY = deltaY;
    }

    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    draw (context){
        context.drawImage(this.#image,this.#x,this.#y);
    }

    move(canvas) {
        this.#x += this.#deltaX;
        this.#y += this.#deltaY
    
        if (this.#x >= canvas.width || this.#x <= 0) {
          this.#deltaX = 0;
        }
        if (this.#y >= canvas.height || this.#y <= 0) {
          this.#deltaY = 0;
        }
      }
    
    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }

    get deltaY() {
        return this.#deltaY;
    }

    set deltaY(y) {
        this.#deltaY = y;
    }

    get x() {
        return this.#x;
    }

    set x(x) {
        this.#x = x;
    }

    get deltaX() {
        return this.#deltaX;
    }

    set deltaX(x) {
        this.#deltaX = x;
    }

}
import Ship from './starship.js';
import KeyManager from './keyManager.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';

export default class Game {

   #canvas;
   #context;
   #ship;
   #saucers;
   #score = null;
   #req = null;
   keyManager;
   #shoots;
   #pause = 0;
   #interval = null;

   constructor(canvas,score) {
      this.#canvas = canvas;
      this.#context = this.#canvas.getContext('2d');
      this.#ship = new Ship(40,this.#canvas.height/2);
      this.#saucers = [];
      this.#shoots = [];
      this.keyManager = new KeyManager();
      this.#score = score;
  }

   /** donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this.#canvas;
   }

   get context() {
      return this.#context;
   }

   get ship() {
      return this.#ship;
   }

   get saucers() {
      return this.#saucers;
   }

   get score() {
      return this.#score;
   }

   animate() {
      this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

      this.#ship.draw(this.#context);
      this.#ship.handleMoveKeys(this.keyManager,this.#canvas);

      this.#saucers.forEach(elt => elt.draw(this.#context));
      let temp = this.#saucers.length;
      this.#saucers = this.#saucers.filter(elt => elt.x > 0);
      temp -= this.#saucers.length;
      this.#saucers.forEach(elt => elt.move());

      if (temp > 0) {
         this.changeScore(-temp*1000);
         temp = 0;
      }

      let saucer = [];
      this.#shoots = this.#shoots.filter(elt => (saucer = elt.collisionSaucers(this.#saucers)).length == 0); 
      saucer.forEach(elt => elt.setFall());

      temp = this.#saucers.length;
      this.#saucers = this.#saucers.filter(elt => elt.y <= this.#canvas.height);
      temp -= this.#saucers.length;

      if (temp > 0) {
         this.changeScore(temp*200);
      }

      this.#shoots.forEach(elt => elt.draw(this.#context));
      this.#shoots = this.#shoots.filter(elt => elt.x < this.#canvas.width);
      this.#shoots.forEach(elt => elt.move(this.#canvas));
      this.#pause -= 1;

      this.#req = window.requestAnimationFrame(this.animate.bind(this));
   }

   addSaucer() {
      this.#saucers.push(new Saucer(this.#canvas.width,36+this.alea(this.#canvas.height-72)));
   }

   addSaucerRepeat() {
      if (this.#interval){
         clearInterval(this.#interval);
         this.#interval = null;
      }
      else{
         this.#interval = setInterval(this.addSaucerRandom.bind(this), 750);
      }    
   }

   addSaucerRandom() {
      if (this.alea(2) == 1){
         this.addSaucer();
      }
   }

   alea(n) {
      return Math.floor(Math.random()*n);
   }

   changeScore(n) {
      this.#score.textContent =  parseInt(this.#score.textContent) + n;
   }

   createShoot() {
      if (this.#pause <= 0) {
         this.#shoots.push(new Shoot(this.#ship.x + 48 , this.#ship.y + 12));
         this.#pause = 10;
      }
   }

   keyDownActionHandler(event) {
      switch (event.key) {
          case " ":
              this.createShoot();
              break;
          case "ArrowUp":
          case "Up":
              this.keyManager.upPressed();
              break;
          case "ArrowDown":
          case "Down":
              this.keyManager.downPressed();
              break;
          default: return;
      }
      event.preventDefault();
   }
  
   keyUpActionHandler(event) {
      switch (event.key) {
          case "ArrowUp":
          case "Up":
              this.keyManager.upReleased();
              break;
          case "ArrowDown":
          case "Down":
              this.keyManager.downReleased();
              break;
         default: return;
      }
      event.preventDefault();
   }

}




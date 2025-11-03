import Mobile from "./Mobile";
import ShootSrc from "./assets/images/tir.png";

export default class Shoot extends Mobile {

    constructor (x, y){
        super(ShootSrc, x, y, 8, 0);
    }

    collision (object){
        if (object.falling) {
            return false;
        }

        let P1 = [Math.max(this.x,object.x),Math.max(this.y,object.y)];
        let P2 = [Math.min(this.x+32,object.x+48),Math.min(this.y+8,object.y+36)];

        return (P1[0] < P2[0] && P1[1] < P2[1]);
  }

  collisionSaucers(saucers){
    let saucer = saucers.filter(elt => this.collision(elt));
    saucer.forEach(elt => elt.setFall());
    return saucer;
  }

}
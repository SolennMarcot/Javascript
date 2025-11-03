
// importation de la classe Game.js
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("stars");
   const nouvelleSoucoupe = document.getElementById("nouvelleSoucoupe");
   const flotteSoucoupes = document.getElementById("flotteSoucoupes");
   const score = document.getElementById("score");
   const game = new Game(canvas,score);
   nouvelleSoucoupe.addEventListener('click', game.addSaucer.bind(game));
   flotteSoucoupes.addEventListener('click', game.addSaucerRepeat.bind(game));
   window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
   window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
   game.animate();
}


window.addEventListener("load", init);

//
console.log('le bundle a été généré');

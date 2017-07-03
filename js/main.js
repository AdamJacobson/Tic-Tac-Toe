const Game = require("./game.js");
const View = require("./ttt-view.js");

$( () => {
  // <figure class="ttt"></figure>
  const $container = $('figure.ttt');
  let game = new Game();
  let view = new View(game, $container);
  view.setupBoard();
});

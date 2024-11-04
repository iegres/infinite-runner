import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
  width: 600,
  height: 300,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      // debug: true,
    },
  },
  scene: Game,
};

const game = new Phaser.Game(config);

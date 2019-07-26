import Phaser from 'phaser';
import { SimpleScene } from './scenes/simple-scene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: SimpleScene
};

new Phaser.Game(config);

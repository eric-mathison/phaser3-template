import Phaser from 'phaser';
import { SceneLoader } from './scenes/SceneLoader';
import { SceneMain } from './scenes/SceneMain';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        SceneLoader,
        SceneMain
    ],
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: 'phaser-app'
};

const game = new Phaser.Game(config);

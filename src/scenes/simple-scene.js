export class SimpleScene extends Phaser.Scene {
    preload() {
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
        this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
        const logo = this.add.image(400, 350, 'logo');

        this.tweens.add({
            targets: logo,
            y: 250,
            duration: 1000,
            ease: "Power1",
            yoyo: true,
            loop: -1
          });
    }
}

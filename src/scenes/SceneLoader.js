export class SceneLoader extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneLoader',
        });
    }
    preload() {
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        const loadingText = this.make.text({
            x: this.width / 2,
            y: this.height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff',
            },
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: this.width / 2,
            y: this.height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff',
            },
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.image('logo', 'assets/logo.png');
        for (var i = 0; i < 500; i++) {
            this.load.image('logo' + i, 'assets/logo.png');
        }

        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }

    create() {
        this.cameras.main.backgroundColor.setTo(255, 255, 255);
        const logo = this.add.image(this.width / 2, this.height / 2, 'logo');

        this.time.delayedCall(
            1000,
            function() {
                this.tweens.add({
                    targets: logo,
                    duration: 2000,
                    alpha: 0,
                    onComplete: onCompleteHandler,
                });
            },
            [],
            this
        );

        const onCompleteHandler = () => {
            logo.destroy();
            this.scene.start('SceneMain');
        };
    }
}

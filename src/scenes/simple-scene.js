export class SimpleScene extends Phaser.Scene {
    preload() {
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff',
            },
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
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
        const logo = this.add.image(400, 350, 'logo');

        this.time.delayedCall(
            1000,
            function() {
                this.tweens.add({
                    targets: logo,
                    duration: 1000,
                    alpha: 0,
                });
            },
            [],
            this
        );

        this.time.delayedCall(
            2500,
            function() {
                logo.destroy();
                this.add.text(100, 100, 'Hello Phaser!', {
                    fill: '#000000',
                    fontFamily: '"Roboto Condensed"',
                });
            },
            [],
            this
        );
    }
}

import Phaser from 'phaser';
import getRandomInt from '../functions/getRandomInt';
import config from '../config';
import state from '../states/state';
//const gameData = $('body').data();

export default class CloseupAsset extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset);
        this.anchor.setTo(0, 0);
        this.enableBody = true;
        this.game.physics.arcade.enable(this);
        this.body.immovable = true;
        //this.speed = state.speed;
    }

    update() {
        //this.speed = $('body').data('speed');
        this.position.x -= 0.5 + state.speed;
        //this.position.x -= 1.54;

        if (this.position.x < -1200) {
            this.position.x = 1500;
            //this.kill();
        }
    }
}

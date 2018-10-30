import 'phaser';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UI', active: true});
    
  }

  init(){
    this.coinsCollected = 0;
  }

  create(){
    //score text
    this.scoreText = this.add.text(12,12,`Score: ${this.coinsCollected}`, {fontSize: '32px', fill: '#fff'});
    //get a ref to the gamescene and listen for events
    this.gameScene = this.scene.get('Game');
    this.gameScene.events.on('coinCollected', () => {
      this.coinsCollected++;
      this.scoreText.setText(`Score: ${this.coinsCollected}`);
    })
  }
  
}
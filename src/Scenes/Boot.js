import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    this.levels = {
      1: 'level1',
      2: 'level2'
    };
    // load in the tilemap
    this.load.tilemapTiledJSON('level1', '../../assets/level1.json');
    this.load.tilemapTiledJSON('level2', '../../assets/level2.json');
    // load in the spritesheet
    this.load.spritesheet('RPGpack_sheet', '../../assets/RPGpack_sheet.png', { frameWidth: 64, frameHeight: 64 });
    // load in our character spritesheet
    this.load.spritesheet('characters', '../../assets/roguelikeChar_transparent.png', { frameWidth: 17, frameHeight: 17 });
    // load our portal sprite
    this.load.image('portal', '../../assets/raft.png');
    // load in our coin sprite
    this.load.image('coin', '../../assets/coin_01.png');
  }

  create () {
    this.scene.start('Game', { level: 1, newGame: true, levels: this.levels });
  }
};

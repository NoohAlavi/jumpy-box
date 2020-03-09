let gameState = {};
let time = 0;

import Player from './player.js';

export default class PlayScene extends Phaser.Scene {
  constructor () {
    super('PlayScene');
  }
  
  init(level) {
    this.levelData = level;
  }
  
  preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('platform2', 'assets/platform2.png');
    this.load.image('portal', 'assets/portal.png');
    this.load.image('spike', 'assets/spike.png');
  }
  
  create() {
    
    gameState.cursors = this.input.keyboard.createCursorKeys();
    this.timer();
    
    let playerOptions = {
      scene: this,
      x: 64,
      y: 400,
      jumpForce: 320,
      key: 'player',
      input: gameState.cursors
    };
    
    gameState.player = new Player(playerOptions);
    gameState.player.setBounce(0.2);
    
    
    this.generateLevel();
    
    gameState.time = this.add.text(40, 40, time, {
      color: '#000000',
      fontSize: 32
    });
    
    this.input.on('pointerdown', function() {
      gameState.player.jump(); //jump on click
    });
  }
  
  update() {
    let platforms = gameState.platforms.children.entries;
    for (let i = 0; i < platforms.length; i++) {
      if (platforms[i].body.x < -16 && platforms[i].x < -16) {
        platforms[i].destroy();
      }
    }
  
    if (gameState.player.update() == 'isDead') { //check if player fell off screen
      time = 0;
      this.scene.restart();
    }
  
    gameState.time.setText(time); //update timer
  }
  
  timer() {
    this.scene.systems.time.delayedCall(1000, function() {
      time++;
      this.timer();
    }, [], this);
  }
  
  generateLevel () {
    gameState.platforms = this.physics.add.group();
    gameState.spikes = this.physics.add.group();
    gameState.portals = this.physics.add.group();
    
    let speed = 160;
    
    for (let y = 0; y < this.levelData.length; y++) {
      for (let x = 0; x < this.levelData[y].length; x++) {
        switch(this.levelData[y][x]) {
          case 0:
            break;
          case 1:
            gameState.platforms.create(x * 32, y * 32, 'platform');
            break;
          case 2:
            gameState.spikes.create(x * 32, y * 32, 'spike');
            break;
          case 3:
            gameState.portals.create(x*32, y*32, 'portal');
            break;
          default:
            console.error("Invalid level data!");
            debugger;
        }
      }
    }
    
    let platforms = gameState.platforms.children.entries;
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].body.allowGravity = false;
      platforms[i].body.immovable = true;
      platforms[i].body.setVelocityX(-speed);
      platforms[i].setDebugBodyColor(0x0000FF);
    }
    
    let spikes = gameState.spikes.children.entries;
    for (let i = 0; i < spikes.length; i++) {
      spikes[i].body.allowGravity = false;
      spikes[i].body.immovable = true;
      spikes[i].body.setVelocityX(-speed);
      spikes[i].setDebugBodyColor(0xFF0000);
    }
    
    let portals = gameState.portals.children.entries;
    for (let i = 0; i < portals.length; i++) {
      portals[i].body.allowGravity = false;
      portals[i].body.immovable = true;
      portals[i].body.setVelocityX(-speed);
      portals[i].setDebugBodyColor(0x00FFFF);
    }
    
    this.physics.add.collider(gameState.player, gameState.platforms, null, null, this);
    
    this.physics.add.overlap(gameState.player, gameState.portals, function() {
      this.scene.systems.time.delayedCall(50, function() {
        time = 0;
        this.scene.start("WinScene");
      }, [], this);
    }, null, this);
    
    this.physics.add.overlap(gameState.player, gameState.spikes, function() {
      gameState.player.jumpForce = 0;
      gameState.player.tint = 0xFF0000;
      this.scene.systems.time.delayedCall(100, function() {
        this.scene.restart();
      }, [], this);
    }, null, this);
  }
}
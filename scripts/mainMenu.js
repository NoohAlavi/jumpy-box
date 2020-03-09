let icon;

export default class MainMenu extends Phaser.Scene {
  constructor () {
    super("MainMenu");
  }
  
  preload() {
    this.load.image('icon', 'assets/player.png');
  }
  
  create() {
    
    let font = {
      fontSize: 24,
      color: "#000000"
    };
    
    let otherFont = {
      fontSize: 16,
      color: '#000000'
    };
    
    
    icon = this.physics.add.sprite(250, 0, 'icon');
    icon.setCollideWorldBounds(true);
    icon.setBounce(0.9);
    icon.setInteractive();
    icon.on('pointerup', function() {
      icon.y = 0;
      icon.setBounce(0.9);
    });
    
    this.add.text(335, 100, 'JUMPY BOX', font);
    this.add.text(288, 124, 'Programmed by Nooh Alavi', otherFont);
    this.add.text(338, 552, 'Version 1.0.0', otherFont);
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.playButton = this.add.text(375, 300, 'PLAY', font);
    this.playButton.setInteractive();
    this.playButton.on('pointerup', function() {
      this.scene.scene.start('LevelSelect');
    }, null, this);
    
    this.playButton = this.add.text(375, 350, 'QUIT', font);
    this.playButton.setInteractive();
    this.playButton.on('pointerup', function() {
      if (window.confirm("Are you sure you want to quit?")) {
        window.close();
      }
    }, null, this);
  }
  
  update() {
    if (this.cursors.right.isDown) {
      icon.x++;
    } else if (this.cursors.left.isDown) {
      icon.x--;
    }
  }
}
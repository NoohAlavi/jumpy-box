let skin = 'assets/player.png';

class SkinSelect extends Phaser.Scene {
  constructor() {
    super('SkinSelect');
  }
  create() {
    
    let font = {
      fontSize: 24,
      color: '#000000'
    };
    
    let back = this.add.text(50, 50, '<---', font);
    back.setInteractive();
    back.on('pointerup', function() {
      this.scene.scene.start('MainMenu');
    });
    
    let skin1 = this.add.text(350, 150, 'Normal', font);
    skin1.setInteractive();
    skin1.on('pointerup', function() {
      skin = 'assets/player.png';
    });
    
    if (Number(localStorage.getItem('level')) > 2) {
      let skin2 = this.add.text(350, 300, 'Tomato', font);
      skin2.setInteractive();
      skin2.on('pointerup', function() {
        skin = 'assets/tomatoSkin.png';
      });
    }
    
    if (Number(localStorage.getItem('level') > 6)) {
      let skin3 = this.add.text(350, 450, 'Zombie', font);
      skin3.setInteractive();
      skin3.on('pointerup', function() {
        skin = 'assets/zombieSkin.png';
      });
    }
  }
}

export {skin, SkinSelect};

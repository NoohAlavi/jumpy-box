export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('CreditsScene');
  }
  create() {
    
    let font = {
      color: '#000000'
    };
    
    let back = this.add.text(50, 50, '<---', font);
    back.setInteractive();
    back.on('pointerup', function() {
      this.scene.scene.start('MainMenu');
    });
    
    this.add.text(200, 50, 'Programmed by Nooh Alavi', font);
    this.add.text(200, 100, 'Designed by Nooh Alavi', font);
    this.add.text(200, 150, 'Artwork by Nooh Alavi', font);
    this.add.text(200, 200, 'Additional Art by Hamza Hoosain', font);
    this.add.text(200, 250, 'Music by Rimaz Farook', font);
    this.add.text(200, 300, 'Sounds by Yahya Patel', font);
    this.add.text(200, 350, 'Levels Designed by Nooh Alavi, Brett Lawrence, \n Hamza Hoosain, Rimaz Farook', font);
    this.add.text(200, 400, 'Tested by Tejas Sodhi, Abdur-Raheem Mohamed', font);
  }
}

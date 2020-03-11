import {levelData} from './levelData.js';

let level, icon;

export default class LevelSelect extends Phaser.Scene {
  constructor () {
    super("LevelSelect");
  }
  create() {
    
    level = 0;
    
    let font = {
      color: "#000000",
      fontSize: 24
    };
    
    let buttonFont = {
      color: '#800000',
      fontSize: 24
    };
    
    icon = this.physics.add.sprite(80, 0, 'icon');
    icon.setCollideWorldBounds(true);
    icon.setBounce(0.9);
    icon.setInteractive();
    icon.on('pointerup', function() {
      icon.y = 0;
      icon.setBounce(0.9);
    });
    
    this.add.text(300, 10, 'Level Select', font);
    this.back = this.add.text(20, 20, '<--', font);
    
    
    this.cursors = this.input.keyboard.createCursorKeys();
   
    this.back.setInteractive();
    this.back.on('pointerup', function() {
      this.scene.scene.start("MainMenu");
    });
    
    //increase yPos of each button by 48
    
    let savedLevel = Number(localStorage.getItem('level'));
    
    if (savedLevel === NaN || savedLevel === 0 || savedLevel > 0) {
      this.level1 = this.add.text(100, 80, '[1]', buttonFont);
      this.level1.setInteractive();
      this.level1.on('pointerup', function() {
        level = 1;
      }, null, this);
    }
    
    if (savedLevel > 0) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);*/
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);
    }
    
    if (savedLevel > 1) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);*/
      
        this.level3 = this.add.text(100, 176, '[3]', buttonFont);
        this.level3.setInteractive();
        this.level3.on('pointerup', function() {
          level = 3;
        }, null, this);
    }
    
    if (savedLevel > 2) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);
      
        this.level3 = this.add.text(100, 176, '[3]', buttonFont);
        this.level3.setInteractive();
        this.level3.on('pointerup', function() {
          level = 3;
        }, null, this);
      */
        this.level4 = this.add.text(100, 224, '[4]', buttonFont);
        this.level4.setInteractive();
        this.level4.on('pointerup', function() {
          level = 4;
        }, null, this);
    }
    
    if (savedLevel > 3) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);
      
        this.level3 = this.add.text(100, 176, '[3]', buttonFont);
        this.level3.setInteractive();
        this.level3.on('pointerup', function() {
          level = 3;
        }, null, this);
        
        this.level4 = this.add.text(100, 224, '[4]', buttonFont);
        this.level4.setInteractive();
        this.level4.on('pointerup', function() {
          level = 4;
        }, null, this);*/
        
        this.level5 = this.add.text(100, 272, '[5]', buttonFont);
        this.level5.setInteractive();
        this.level5.on('pointerup', function() {
          level = 5;
        }, null, this);
    }
    
    if (savedLevel > 4) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);
      
        this.level3 = this.add.text(100, 176, '[3]', buttonFont);
        this.level3.setInteractive();
        this.level3.on('pointerup', function() {
          level = 3;
        }, null, this);
        
        this.level4 = this.add.text(100, 224, '[4]', buttonFont);
        this.level4.setInteractive();
        this.level4.on('pointerup', function() {
          level = 4;
        }, null, this);
        
        this.level5 = this.add.text(100, 272, '[5]', buttonFont);
        this.level5.setInteractive();
        this.level5.on('pointerup', function() {
          level = 5;
        }, null, this);*/
        
        this.level6 = this.add.text(100, 320, '[6]', buttonFont);
        this.level6.setInteractive();
        this.level6.on('pointerup', function() {
          level = 6;
        }, null, this);
    }
    
    if (savedLevel > 5) {
        /*this.level1 = this.add.text(100, 80, '[1]', buttonFont);
        this.level1.setInteractive();
        this.level1.on('pointerup', function() {
          level = 1;
        }, null, this);
        
        this.level2 = this.add.text(100, 128, '[2]', buttonFont);
        this.level2.setInteractive();
        this.level2.on('pointerup', function() {
          level = 2;
        }, null, this);
      
        this.level3 = this.add.text(100, 176, '[3]', buttonFont);
        this.level3.setInteractive();
        this.level3.on('pointerup', function() {
          level = 3;
        }, null, this);
        
        this.level4 = this.add.text(100, 224, '[4]', buttonFont);
        this.level4.setInteractive();
        this.level4.on('pointerup', function() {
          level = 4;
        }, null, this);
        
        this.level5 = this.add.text(100, 272, '[5]', buttonFont);
        this.level5.setInteractive();
        this.level5.on('pointerup', function() {
          level = 5;
        }, null, this);
        
        this.level6 = this.add.text(100, 320, '[6]', buttonFont);
        this.level6.setInteractive();
        this.level6.on('pointerup', function() {
          level = 6;
        }, null, this);*/
        
        this.level7 = this.add.text(100, 368, '[7]', buttonFont);
        this.level7.setInteractive();
        this.level7.on('pointerup', function() {
          level = 7;
        }, null, this);
    }
  }
  
  update() {
    if (level > 0) {
      this.scene.start("PlayScene", {level: levelData[level.toString()], levelNum: level});
    }
    if (this.cursors.right.isDown) {
      icon.x++;
    } else if (this.cursors.left.isDown) {
      icon.x--;
    }
  }
}

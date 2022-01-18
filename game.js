const gameState = {
  offWhite: 0xEEEEEE,
  lightTeal: 0xAAD8D3,
  teal: 0x00ADB5,
  slate: 0x393E46
};


function create() {
  let heights = [];
  for (let i = 0; i < 10; i++) {
    heights.push(Math.floor(Math.random() * 100));
}

  Math.floor(Math.random() * 10);
  gameState.r1 = this.add.rectangle(65,300,40,heights[0],gameState.lightTeal).setInteractive();
  gameState.r1.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r1.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r2 = this.add.rectangle(125,300,40,heights[1],gameState.lightTeal).setInteractive();
  gameState.r2.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r2.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r3 = this.add.rectangle(185,300,40,heights[2],gameState.lightTeal).setInteractive();
  gameState.r3.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r3.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r4 = this.add.rectangle(245,300,40,heights[3],gameState.lightTeal).setInteractive();
  gameState.r4.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r4.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r5 = this.add.rectangle(305,300,40,heights[4],gameState.lightTeal).setInteractive();
  gameState.r5.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r5.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r6 = this.add.rectangle(365,300,40,heights[5],gameState.lightTeal).setInteractive();
  gameState.r6.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r6.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r7 = this.add.rectangle(425,300,40,heights[6],gameState.lightTeal).setInteractive();
  gameState.r7.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r7.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r8 = this.add.rectangle(485,300,40,heights[7],gameState.lightTeal).setInteractive();
  gameState.r8.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r8.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r9 = this.add.rectangle(545,300,40,heights[8],gameState.lightTeal).setInteractive();
  gameState.r9.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r9.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
  gameState.r10 = this.add.rectangle(605,300,40,heights[9],gameState.lightTeal).setInteractive();
  gameState.r10.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r10.on('pointerout', function(){this.fillColor = gameState.lightTeal;});
}


function update() {
  gameState.r1.on('pointerdown', function(){this.y += this.getDistanceY();});
}
const config = {
  width: 700,
  height: 600,
  backgroundColor: gameState.slate,
  scene: { create}
}

const game = new Phaser.Game(config)

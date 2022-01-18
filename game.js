const gameState = {
  offWhite: 0xEEEEEE,
  lightTeal: 0xAAD8D3,
  teal: 0x00ADB5,
  slate: 0x393E46
};

function create() {
  gameState.r1 = this.add.rectangle(65,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r2 = this.add.rectangle(125,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r3 = this.add.rectangle(185,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r4 = this.add.rectangle(245,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r5 = this.add.rectangle(305,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r6 = this.add.rectangle(365,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r7 = this.add.rectangle(425,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r8 = this.add.rectangle(485,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r9 = this.add.rectangle(545,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r10 = this.add.rectangle(605,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r11 = this.add.rectangle(665,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r12 = this.add.rectangle(725,300,40,100,gameState.lightTeal).setInteractive();
  gameState.r1.on('pointerover', function(){this.fillColor = gameState.teal;});
  gameState.r1.on('pointerout', function(){this.fillColor = gameState.lightTeal;});

}

const config = {
  width: 800,
  height: 600,
  backgroundColor: gameState.slate,
  scene: { create}
}

const game = new Phaser.Game(config)

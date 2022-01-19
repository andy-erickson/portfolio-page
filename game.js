let gameState = {
  offWhite: 0xEEEEEE,
  lightTeal: 0xAAD8D3,
  teal: 0x00ADB5,
  slate: 0x393E46,
  heights: [],
  rects: []
  };


function create() {
  let xPosition = 65;
  bubbleButton = this.add.rectangle(100,70,150,50,gameState.teal).setInteractive();
  for (let i = 0; i < 10; i++) {
    gameState.rects.push(this.add.rectangle(xPosition,300,40,250,gameState.lightTeal).setInteractive());
    gameState.heights.push(Math.ceil(Math.random() * 200));
    //gameState.rects = [];
    gameState.rects[i].height = gameState.heights[i];
    //gameState.rects.push(this.add.rectangle(xPosition,300,40,gameState.heights[i],gameState.lightTeal).setInteractive());
    this.input.setDraggable(gameState.rects[i])
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        //gameObject.y = dragY;
        //if(gameObject.height == gameState.heights[i]){
        if(gameObject === gameState.rects[i]){
        gameState.heights[i] = dragY;
        console.log(gameState.heights[i]);
      }
        //gameObject.height = dragY;

      });
    xPosition += 60;

    }
  }


function update() {
  for (let i = 0; i < 10; i++) {
    gameState.rects[i].height = gameState.heights[i];
    gameState.rects[i].y =  300 - (0.5 * gameState.rects[i].height);
    gameState.rects[i].on('pointerover', function(){this.fillColor = gameState.teal;});
    gameState.rects[i].on('pointerout', function(){this.fillColor = gameState.lightTeal;});

    }
  }
/*
  function swap(xp, yp){
    var temp = gameState.heights[xp];
    //var temp2 = gameState.rects[xp].height;
    gameState.heights[xp] = gameState.heights[yp];
    //gameState.rects[xp].height = gameState.rects[yp].height;
    gameState.heights[yp] = temp;
    //gameState.rects[yp].height = temp2;
  }

// An optimized version of Bubble Sort
/*
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {

        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);

        }
    }

}
}
*/
//}
const config = {
  width: 700,
  height: 600,
  backgroundColor: gameState.slate,
  scene: { create, update

           }
}

const game = new Phaser.Game(config)

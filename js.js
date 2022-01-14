
window.onload = function (){
var canvasBG = document.getElementById("canvasBackGround"),
    c_bg = canvasBG.getContext("2d");

   canvasBG.width = window.innerWidth;
canvasBG.height = window.innerHeight;
/*canvasBG.width = document.body.clientWidth; //document.width is obsolete
canvasBG.height = document.body.clientHeight; //document.height is obsolete*/
var background = new Image();
background.src = './Sprites/background.png';

background.onload = function(){
  c_bg.drawImage(background,0,0, canvasBG.width, canvasBG.height);   
}
}



function startGame(){
    gameArea.start();
    piece = new component(30, 30, "red", 10, 110);
}
var gameArea = {
    canvas : document.getElementById('canvas1'),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.ctx = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function(){
        ctx = gameArea.ctx;
        ctx.fillStyle = color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
    this.newPosition = function(){
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
        console.log(this.gravitySpeed)
        this.hitBottom();
    }
    this.hitBottom = function(){
        var bottom = gameArea.canvas.height - this.height;
        if (this.y > bottom){
            this.y = bottom;
        }
    }
   

}

const sprite_image = new Image();
sprite_image.src = './Sprites/sprites_1.png'
let sprite_array_still = [];
const sprite_image_Idle1 = new Image();
sprite_image_Idle1.src = './Sprites/freeknight/png/Idle (1).png'
const sprite_image_Idle2 = new Image();
sprite_image_Idle2.src= './Sprites/freeknight/png/Idle (2).png'
const sprite_image_Idle3 = new Image();
sprite_image_Idle3.src = './Sprites/freeknight/png/Idle (3).png'
const sprite_image_Idle4=new Image();
sprite_image_Idle4.src='./Sprites/freeknight/png/Idle (4).png'
const sprite_image_Idle5=new Image();
sprite_image_Idle5.src='./Sprites/freeknight/png/Idle (5).png'
const sprite_image_Idle6=new Image();
sprite_image_Idle6.src='./Sprites/freeknight/png/Idle (6).png'
const sprite_image_Idle7=new Image();
sprite_image_Idle7.src='./Sprites/freeknight/png/Idle (7).png'
const sprite_image_Idle8=new Image();
sprite_image_Idle8.src='./Sprites/freeknight/png/Idle (8).png'
const sprite_image_Idle9=new Image();
sprite_image_Idle9.src='./Sprites/freeknight/png/Idle (9).png'
const sprite_image_Idle10=new Image();
sprite_image_Idle10.src='./Sprites/freeknight/png/Idle (10).png'

sprite_array_still.push(sprite_image_Idle1)
sprite_array_still.push(sprite_image_Idle2)
sprite_array_still.push(sprite_image_Idle3)
sprite_array_still.push(sprite_image_Idle4)
sprite_array_still.push(sprite_image_Idle5)
sprite_array_still.push(sprite_image_Idle6)
sprite_array_still.push(sprite_image_Idle7)
sprite_array_still.push(sprite_image_Idle8)
sprite_array_still.push(sprite_image_Idle9)
sprite_array_still.push(sprite_image_Idle10)

let i=0;
let gameFrame=0;
const staggerFrame= 5

console.log(sprite_array_still)
sprite = function(dx,dy,d_width, d_height){
  ctx=gameArea.ctx;

  gameFrame++;
  if (gameFrame % staggerFrame == 0){
  
  i++
  }
  if(i>9){
    i=0;
  }
  ctx.drawImage(sprite_array_still[i], 0,0 ,587,707, dx, dy, d_width, d_height)
  
  /*for(let i=0 ; i < sprite_array_still.length;i++){
  
  }*/
}
function updateGameArea(){
    gameArea.clear();
    
    piece.newPosition();
    sprite(piece.x, piece.y, piece.width, piece.height );
    piece.update();
    
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown": 
        piece.y +=5;
        break;
      case "ArrowUp":
        piece.y -=5;
        break;
      case "ArrowLeft":
        piece.x -=5;
        break;
      case "ArrowRight":
        piece.x +=5;
        break;
        case " " : 
        piece.gravitySpeed = -2;
        break;
        
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window



startGame();

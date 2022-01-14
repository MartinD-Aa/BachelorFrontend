
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
    piece = new component(15, 15, "red", 10, 480);
}
var gameArea = {
    canvas : document.getElementById('canvas1'),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.ctx = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);

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
  this.gravity = 0.1;
  this.gravitySpeed = 0;
  this.moveAcceleration = 0.4;
  this.moveDeceleration = -0.4;
  this.moveSpeed = 0;
  let keys = [];
  this.update = function () {
    ctx = gameArea.ctx;
    ctx.fillStyle = color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPosition = function () {
    document.onkeydown = function (e){
      if(!keys[e.code]){
        keys[e.code] = true;
      }
        console.log(keys);
    };
    document.onkeyup = function (e){
      keys[e.code] = false;
      console.log(keys);
    }
    if(keys["ArrowLeft"]){
      piece.negativMovement();
    }
    if(keys["ArrowRight"]){
      piece.positivMovement();
    }
    if(keys["ArrowDown"]){
      piece.y += 5;
    }
    if(keys["ArrowUp"]){
      piece.jump();
    }
    if(keys["Space"]){
      piece.jump();
    }
    this.gravitySpeed += this.gravity;
    this.y += this.gravitySpeed;
    this.friction();
    this.x += this.moveSpeed;
    this.hitBottom();
  }
  this.hitBottom = function () {
    var bottom = gameArea.canvas.height - this.height;
    if (this.y > bottom) {
      this.y = bottom;
      this.gravitySpeed = 0;
    }
  }
  this.positivMovement = function () {
    this.moveSpeed += this.moveAcceleration;
    if (this.moveSpeed > 6) {
      moveSpeed = 6;
      this.x += this.moveSpeed;
    }else{
      this.x += this.moveSpeed;
    }
  }
  this.negativMovement = function () {
    this.moveSpeed += this.moveDeceleration;
    if (this.moveSpeed < -6) {
      moveSpeed = -6;
      this.x += this.moveSpeed;
    }else{
      this.x += this.moveSpeed;
    }
  }
  this.jump = function () {
    if (this.gravitySpeed === 0 || this.gravitySpeed === 0.1){
      piece.gravitySpeed = -3;
    }
  }
  this.friction = function (){
    if(this.moveSpeed >= 0.2){
      this.moveSpeed += -0.2;
    }else if(this.moveSpeed <= -0.2){
      this.moveSpeed += 0.2;
    }else{
      this.moveSpeed = 0.0;
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


/*
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    //if()
    console.log(event.key);
    switch (event.key) {
      case "ArrowDown": 
        piece.y +=5;
        break;
      case "ArrowUp":
        piece.gravitySpeed = -3;
        break;
      case "ArrowLeft":
        piece.negativMovement();
        break;
      case "ArrowRight":
        piece.positivMovement();
        break;
      case " " : 
        piece.gravitySpeed = -3;
        break;
      case " "&&"ArrowLeft"||"ArrowUp"&&"ArrowLeft":
        piece.negativMovement();
        piece.gravitySpeed = -3;
        break;
      case " "&&"ArrowRight" || "ArrowUp"&&"ArrowRight":
        piece.positivMovement();
        piece.gravitySpeed = -3;
        break;
        
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window

*/
startGame();

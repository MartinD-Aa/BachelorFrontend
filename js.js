
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
        /*console.log(this.gravitySpeed)*/
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

let sprite_array_right = [];
const sprite_image_Walk1 = new Image();
sprite_image_Walk1.src = './Sprites/freeknight/png/Walk (1).png'
const sprite_image_Walk2 = new Image();
sprite_image_Walk2.src= './Sprites/freeknight/png/Walk (2).png'
const sprite_image_Walk3 = new Image();
sprite_image_Walk3.src = './Sprites/freeknight/png/Walk (3).png'
const sprite_image_Walk4=new Image();
sprite_image_Walk4.src='./Sprites/freeknight/png/Walk (4).png'
const sprite_image_Walk5=new Image();
sprite_image_Walk5.src='./Sprites/freeknight/png/Walk (5).png'
const sprite_image_Walk6=new Image();
sprite_image_Walk6.src='./Sprites/freeknight/png/Walk (6).png'
const sprite_image_Walk7=new Image();
sprite_image_Walk7.src='./Sprites/freeknight/png/Walk (7).png'
const sprite_image_Walk8=new Image();
sprite_image_Walk8.src='./Sprites/freeknight/png/Walk (8).png'
const sprite_image_Walk9=new Image();
sprite_image_Walk9.src='./Sprites/freeknight/png/Walk (9).png'
const sprite_image_Walk10=new Image();
sprite_image_Walk10.src='./Sprites/freeknight/png/Walk (10).png'

sprite_array_right.push(sprite_image_Walk1)
sprite_array_right.push(sprite_image_Walk2)
sprite_array_right.push(sprite_image_Walk3)
sprite_array_right.push(sprite_image_Walk4)
sprite_array_right.push(sprite_image_Walk5)
sprite_array_right.push(sprite_image_Walk6)
sprite_array_right.push(sprite_image_Walk7)
sprite_array_right.push(sprite_image_Walk8)
sprite_array_right.push(sprite_image_Walk9)
sprite_array_right.push(sprite_image_Walk10)

let sprite_array_left = [];
const sprite_image_rev_Walk1 = new Image();
sprite_image_rev_Walk1.src = './Sprites/freeknight/png/Mirrored/rev_Walk (1).png'
const sprite_image_rev_Walk2 = new Image();
sprite_image_rev_Walk2.src= './Sprites/freeknight/png/Mirrored/rev_Walk (2).png'
const sprite_image_rev_Walk3 = new Image();
sprite_image_rev_Walk3.src = './Sprites/freeknight/png/Mirrored/rev_Walk (3).png'
const sprite_image_rev_Walk4=new Image();
sprite_image_rev_Walk4.src='./Sprites/freeknight/png/Mirrored/rev_Walk (4).png'
const sprite_image_rev_Walk5=new Image();
sprite_image_rev_Walk5.src='./Sprites/freeknight/png/Mirrored/rev_Walk (5).png'
const sprite_image_rev_Walk6=new Image();
sprite_image_rev_Walk6.src='./Sprites/freeknight/png/Mirrored/rev_Walk (6).png'
const sprite_image_rev_Walk7=new Image();
sprite_image_rev_Walk7.src='./Sprites/freeknight/png/Mirrored/rev_Walk (7).png'
const sprite_image_rev_Walk8=new Image();
sprite_image_rev_Walk8.src='./Sprites/freeknight/png/Mirrored/rev_Walk (8).png'
const sprite_image_rev_Walk9=new Image();
sprite_image_rev_Walk9.src='./Sprites/freeknight/png/Mirrored/rev_Walk (9).png'
const sprite_image_rev_Walk10=new Image();
sprite_image_rev_Walk10.src='./Sprites/freeknight/png/Mirrored/rev_Walk (10).png'

sprite_array_left.push(sprite_image_rev_Walk1)
sprite_array_left.push(sprite_image_rev_Walk2)
sprite_array_left.push(sprite_image_rev_Walk3)
sprite_array_left.push(sprite_image_rev_Walk4)
sprite_array_left.push(sprite_image_rev_Walk5)
sprite_array_left.push(sprite_image_rev_Walk6)
sprite_array_left.push(sprite_image_rev_Walk7)
sprite_array_left.push(sprite_image_rev_Walk8)
sprite_array_left.push(sprite_image_rev_Walk9)
sprite_array_left.push(sprite_image_rev_Walk10)


let sprite_array_jump = [];
const sprite_image_Jump1 = new Image();
sprite_image_Jump1.src = './Sprites/freeknight/png/Jump (1).png'
const sprite_image_Jump2 = new Image();
sprite_image_Jump2.src = './Sprites/freeknight/png/Jump (2).png'
const sprite_image_Jump3 = new Image();
sprite_image_Jump3.src = './Sprites/freeknight/png/Jump (3).png'
const sprite_image_Jump4 = new Image();
sprite_image_Jump4.src = './Sprites/freeknight/png/Jump (4).png'
const sprite_image_Jump5 = new Image();
sprite_image_Jump5.src = './Sprites/freeknight/png/Jump (5).png'
const sprite_image_Jump6 = new Image();
sprite_image_Jump6.src = './Sprites/freeknight/png/Jump (6).png'
const sprite_image_Jump7 = new Image();
sprite_image_Jump7.src = './Sprites/freeknight/png/Jump (7).png'
const sprite_image_Jump8 = new Image();
sprite_image_Jump8.src = './Sprites/freeknight/png/Jump (8).png'
const sprite_image_Jump9 = new Image();
sprite_image_Jump9.src = './Sprites/freeknight/png/Jump (9).png'
const sprite_image_Jump10 = new Image();
sprite_image_Jump10.src = './Sprites/freeknight/png/Jump (10).png'

sprite_array_jump.push(sprite_image_Jump1)
sprite_array_jump.push(sprite_image_Jump2)
sprite_array_jump.push(sprite_image_Jump3)
sprite_array_jump.push(sprite_image_Jump4)
sprite_array_jump.push(sprite_image_Jump5)
sprite_array_jump.push(sprite_image_Jump6)
sprite_array_jump.push(sprite_image_Jump7)
sprite_array_jump.push(sprite_image_Jump8)
sprite_array_jump.push(sprite_image_Jump9)
sprite_array_jump.push(sprite_image_Jump10)


let i=0;
let gameFrame=0;
const staggerFrame= 5
let state= "idle";

console.log(sprite_array_still)
sprite = function(dx,dy,d_width, d_height){
  ctx=gameArea.ctx;

  gameFrame++;
  if (gameFrame % staggerFrame == 0){
  
  i++
  }
  if(state=="idle" || "right" || "left"){
  if(i>9){
    i=0;
  }
  }
if(state =="left"){
  ctx.drawImage(sprite_array_left[i], 0,0 ,587,707, dx, dy, d_width, d_height)
}
  if(state=="right"){
    ctx.drawImage(sprite_array_right[i], 0,0 ,587,707, dx, dy, d_width, d_height)
  }
  
  if(state=="idle"){
  ctx.drawImage(sprite_array_still[i], 0,0 ,587,707, dx, dy, d_width, d_height)
  }
  if(state=="jump"){
    ctx.drawImage(sprite_array_jump[i], 0,0 ,587,707, dx, dy, d_width, d_height)
  }
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
        state="left"
        break;
      case "ArrowRight":
        piece.x +=5;
        state="right"
        break;
        case " " : 
        piece.gravitySpeed = -2;
        state="jump";
        break;
      case "KeyUp": {
        state="test";
        log(state)
      }
        
      default:
        return; // Quit when this doesn't handle the key event.
    }
    
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window


  window.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    // do something
    if(state!="jump"){
    state="idle";
    console.log(state);
    }
  });

  /*
  const Action = {
    up()  { piece.y -=5; },
    down() { piece.y +=5;; },
    right()  { piece.x +=5; state="right"; },
    left() { piece.x -=5;state="left";  },
    space()     {  piece.gravitySpeed = -2; state="jump";;     },
    idle(){state="idle"}
  };
  
  const keyAction = {
    w: { keydown: Action.up,  keyup: Action.idle },
    s: { keydown: Action.down,  keyup: Action.idle },
    a: { keydown: Action.left,  keyup: Action.idle },
    d: { keydown: Action.right,  keyup: Action.idle },
    " ": { keydown: Action.space, keyup: Action.idle }
  };
  
  const keyHandler = (ev) => {
    if (ev.repeat) return;                             
    if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
    keyAction[ev.key][ev.type]();
  };
  
  ['keydown', 'keyup'].forEach((evType) => {
    
    document.body.addEventListener(evType, keyHandler);
    
  });
*/

startGame();

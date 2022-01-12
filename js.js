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
  this.update = function () {
    ctx = gameArea.ctx;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPosition = function () {
    this.gravitySpeed += this.gravity;
    this.y += this.gravitySpeed;
    this.friction();
    this.x += this.moveSpeed;
    this.hitBottom();
    console.log(this.moveSpeed);
    
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

function updateGameArea(){
    gameArea.clear();
    piece.newPosition();
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
        
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window


startGame();

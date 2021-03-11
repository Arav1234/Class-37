var database;
var gameState = 0;
var playerCount;
var form , game, player;
var players
var distance = 0

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game();
  game.getstate();
  game.start();


  
}

function draw(){
  

  if(playerCount===4){
    game.update(1)
  }

  if(gameState===1){
    clear();
    game.play();
  }


  
 
}


var gameState = 0 ; 
var playerCount ;
var database ;
var form , player , game ;
var allPlayers ;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game() ;
    game.start();
  
}

function draw(){
    if(playerCount=== 4) {
gameState = 1 ;
    }
    
    if (gameState===1) {
  game.play() ;

    }
}


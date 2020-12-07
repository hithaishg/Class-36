class Form{
constructor() {
this.title = createElement("h1") ;
this.input = createInput("name") ;
this.button = createButton("play");
this.greeting = createElement("h2") ;



}
display() {
    this.title.html("Car Racing Game") ;
this.title.position(130 , 0) ;
this.button.position(250 , 200);
this.input.position(130 , 160);
 this.button.mousePressed(()=>{
this.input.hide() ;
this.button.hide() ;
player.name = this.input.value() ;
this.greeting.html("Hello "+ player.name)
this.greeting.position(130 , 100) ;
playerCount = playerCount + 1 ;
player.index = playerCount ;
player.update() ;
player.updateCount(playerCount) ;

 })



}




}
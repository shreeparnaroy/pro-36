class Food{

constructor(x,y){

this.image=loadImage("Milk.png")

foodstock=createSprite(200,200)
}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

//writing(update) the playerCount to database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

//updating the name and distance of player
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }


display(){

var x=80,y=100;

imageMode(CENTRE)
image (this.image,720,220,70,70)


if(this.foodstock!=0){

for(var i=0;i<this.foodstock;i++){
if(i%10==0){
x=80
y=y=50
}
image (this.image,x,y,50,50)
x=x+30

}
}
}





}
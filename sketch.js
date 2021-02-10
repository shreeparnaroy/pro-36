var dog,sadDog,happyDog;
var button
var foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
feed=createButton("feed the dog")
feed.positon(700,95)
feed.mousepressed(feedDog)

//function to add food in stock
addFood=createButton("Add food")
addFood.positon(800,95)
addFood.mousepressed(allFoods)


function feedDog(){
dog.addImage(happydog)

if(foodObj.getFoodStock()<=0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0)


}else{
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
    
}
}


}


function addFood(){

FoodS++
database.ref('/').update({

Food:foodS

})

}







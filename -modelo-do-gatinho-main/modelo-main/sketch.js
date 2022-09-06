var point;
var trofeu;
var group_coffee;
var group_obstaculo1;
var group_obstaculo2;
var group_moedas;
var fundo,fundoimage;
var obstaculo1,obstaculo1image;
var obstaculo2,obstaculo2image;
var moeda,moedaimage;
var cat,catimage;
var coffee,coffeeimage;

function preload(){
  catimage = loadImage("pintado.png");
  fundoimage = loadImage("w.png")
  moedaimage = loadAnimation("(10).png,(11).png")
  coffeeimage = loadAnimation ("4.png,5.png,6.png,7.png")


}
function setup() {
  createCanvas(1000, 1000);
 

 group_moedas=new Group;
 group_coffee = new Group;

 cat = createSprite(200, 200);
 cat.debug = true
 
 cat.addImage("oi",catimage) 
 cat.scale = 2

 point = 0;
 trofeu = 0
 
}
function draw() {
  background(fundoimage)
  //obst();
 moedas(); 
 coffes();
 
 
 drawSprites()
 textSize(40);
 fill("black");
 text("pontos = "+ point , 10, 40);
  
 textSize(40);
 fill("black");
 text("trofeu = "+ trofeu , 10, 90);
  
 
}
// function obst(){
// if (frameCount % 90 === 0){
//   obstaculo1 = createSprite(96,60,10,200);
//   obstaculo1image = loadAnimation(".png,1.png,2.png,3.png");
//   obstaculo1.x =  Math.round(randomNumber(10, 390))
//   obstaculo1.addAnimation(obstaculo1image);
  
  
//   obstaculo2 = createSprite(280,60,20,200);
//   obstaculo2image.loadAnimation("d(1).png,d(2).png,d(3).png,d(4).png,d(5).png,d.png");
//   obstaculo2.x =  Math.round(randomNumber(10, 390))
//   obstaculo2.addAnimation(obstaculo2image);
  
//   obstaculo1.scale=0.5;
//   obstaculo2.scale=0.5;
 
  
//   obstaculo1.velocityY = 2;
//   obstaculo2.velocityY = 2;

//   group_obstaculo1.add(obstaculo1)
//   group_obstaculo2.add(obstaculo2)
 
  


// }
//if (cat.isTouching(group_obstaculo1||
//                   group_obstaculo2)) {
 // trofeu = trofeu + 1;
 //group_obstaculo1.destroyEach();
 //group_obstaculo2.destroyEach();
 // } 
 
//}  



function moedas (){
if (frameCount % 180 === 0) {
  moeda = createSprite(100,50,20,20);
 
  moeda.x =  Math.round(randomNumber(10, 390))
  moeda.addAnimation("oie",moedaimage);
  
  moeda.velocityX = 0;
  moeda.velocityY = 2;
  
if (group_moedas.isTouching(cat)) {
  point = point + 1;
  group_moedas.destroyEach();
}   
  group_moedas.add(moeda);
}
}
function coffes () {
if(frameCount % 400 === 0 ) {
  coffee = createSprite(100,50,12,12);
  
  coffee.x =  Math.round(randomNumber(100, 300))
  coffee.addAnimation("oe",coffeeimage);
  
  coffee.scale = 0.2
  coffee.velocityY=2
   
if (cat.isTouching(group_coffee)) {
  trofeu = trofeu + 1;
  group_coffee.destroyEach();
  } 
  group_coffee.add(coffee);
}  
}







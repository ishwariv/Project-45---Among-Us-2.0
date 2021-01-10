var table, player, redEye, crew1,crew2,crew3,crew4,crew5,crew6;
var tableImg,playerImg,redEyeImg,crew1Img,crew2Img,crew3Img;
var crew4Img,crew5Img,crew6Img;
var logo;
var energy;

function preload(){
  tableImg=loadImage("images/table.png");
  playerImg=loadImage("images/purple.png");
  redEyeImg=loadImage("images/red.png");
  crew1Img=loadImage("images/orange.png");
  crew2Img=loadImage("images/blue.png");
  crew3Img=loadImage("images/yellow.png");
  crew4Img=loadImage("images/cyan.png");
  crew5Img=loadImage("images/brown.png");
  crew6Img=loadImage("images/black.png");
}
function setup() {
  //canvas
 createCanvas(800,800);

 //table
 table=createSprite(400,320,100,100);
 table.addImage(tableImg);
 table.scale=1.15;
 table.setCollider("circle",-3,2.5,60);

 //Player (Purple)
 player=createSprite(280,300,10,10);
 player.addImage(playerImg);
 player.scale=0.03;
 player.setCollider("rectangle",0,0,85,223);

 //RedEye (Impostor)
 redEye=createSprite(520,300,10,10);
 redEye.addImage(redEyeImg);
 redEye.scale=0.3;
 redEye.setCollider("rectangle",0,0,85,223);

 //Crew1(Orange)
 crew1=createSprite(400,200,10,10);
 crew1.addImage(crew1Img);
 crew1.scale=0.4; 
 crew1.setCollider("rectangle",0,0,85,223);

 //Crew2 (Blue)
 crew2=createSprite(400,430,10,10);
 crew2.addImage(crew2Img);
 crew2.scale=0.35;
 crew2.setCollider("rectangle",0,0,85,223);

 //Crew3 (Yellow)
 crew3=createSprite(320,400,10,10);
 crew3.addImage(crew3Img);
 crew3.scale=0.35;
 crew3.setCollider("rectangle",0,0,85,223);

 //Crew4 (Cyan)
 crew4=createSprite(320,230,10,10);
 crew4.addImage(crew4Img);
 crew4.scale=0.35;
 crew4.setCollider("rectangle",0,0,85,223);

 //Crew5 (Brown)
 crew5=createSprite(480,400,10,10);
 crew5.addImage(crew5Img);
 crew5.scale=0.35;
 crew5.setCollider("rectangle",0,0,85,223);

 //Crew6 (Black)
 crew6=createSprite(480,230,10,10);
 crew6.addImage(crew6Img);
 crew6.scale=0.35;
 crew5.setCollider("rectangle",0,0,85,223);


}

function draw() {
  background(0);  
  drawSprites();
}
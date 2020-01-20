var gravity;
var fire=[];
var can;
function setup(){
  colorMode(HSB);
  can=createCanvas(windowWidth,windowHeight);
  gravity=createVector(0,0.2);
  createP('May the joy, cheer, mirth and merriment of this divine festival surround you forever.'+ 
  'May the happiness, that this season brings… Festive occasions fill our lives with a new charm and happiness.'+ 
  'May this Diwali prove to the beginning of something great in your life').position(3*width/6,3*height/6);
  background(0);
}
function draw(){
  colorMode(RGB);
 background(0,0,0,25);
  if(random(1)<0.1){
     fire.push(new Firework());
   }
   for(let i= fire.length-1 ; i>=0; i--){
     fire[i].update();
     fire[i].show();
     if(fire[i].finished()){
       fire.splice(i,1);
     }
   }
   textSize(100);
   textAlign(CENTER);
   textFont(NORMAL);
   text("Happy Diwali!!!",width/3,100);
   for(let i=fire.length-1;i>=0;i--){
    fill(255,fire[i].hu,255);
    textFont('Satisfy');
    text("",width/2,250);
   }
}
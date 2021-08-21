var hasDocked=false
function preload(){
   bg= loadImage("spacebg.jpg");
   issimg = loadImage("iss.png");
   scimg = loadImage("spacecraft1.png");
   scimg1 = loadImage("spacecraft2.png");
   scimg2= loadImage("spacecraft3.png");
   scimg3= loadImage("spacecraft4.png"); }

   function setup() {
    createCanvas(1200, 800);
    spacecraft = createSprite(530,550);
    spacecraft.addImage(scimg); 
    spacecraft.scale = 0.4; 
    iss = createSprite(500,250); 
    iss.addImage(issimg); 
    iss.scale = 1.5;
  }

function draw() {
  background(255,255,255);  

  background(bg);
  spacecraft.addImage(scimg); 
  if(!hasDocked){ 
    spacecraft.x = spacecraft.x + random(-1,1); 
    if(keyDown("UP_ARROW")){
       spacecraft.y = spacecraft.y -2; }
        if(keyDown("LEFT_ARROW")){
           spacecraft.addImage(scimg3); spacecraft.x = spacecraft.x - 1; } 
           if(keyDown("RIGHT_ARROW")){
              spacecraft.addImage(scimg2); spacecraft.x = spacecraft.x + 1; } 
                if(keyDown("DOWN_ARROW")){ spacecraft.addImage(scimg1); } } 
                  if(spacecraft.y <= (iss.y+120) && spacecraft.x <= (iss.x+50)){
                    hasDocked = true;
                      textSize(25);
                        fill("white") 
                         text("Docking Successful!", 300, 600); } 
  drawSprites();
}
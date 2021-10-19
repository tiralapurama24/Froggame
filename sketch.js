
var player;
var score=0;
var wormGroup;

function preload () {
  swampImage = loadImage ("images/swampImg.png") 
  frogImage = loadImage ("images/frog.png")
  wormImage = loadImage ("images/worm.png")
}

function setup() {
createCanvas(600,600);
swamp = createSprite(300,300)
swamp.scale = 2.5
swamp.addImage (swampImage)
frog = createSprite(40,515,30,30)
frog.scale = 0.4
frog.addImage (frogImage)
wormGroup = new Group()

}

function draw() {
background("black");  
stroke("red")
noFill();

frog.x = mouseX
frog.y = mouseY

generateWorms();
for(var i = 0; i<(wormGroup).length; i++ ) {
var temp = (wormGroup).get(i);
if(frog.isTouching(temp))
{ 
  score++
  temp.destroy()
  temp = null
}
}
drawSprites();
textSize(20)
text("worms destroyed: " + score, 350, 50)

}

function generateWorms() {
  if(frameCount % 30 === 0) {
    var worm = createSprite (random(40,380), random (290,380), 40, 5)
    worm.scale = random(0.1, 0.3)
    worm.addImage(wormImage)
   
    wormGroup.add(worm worm.velocityX = random(-6,6)
    worm.velocityY = random(-6,6))
  }
  
}


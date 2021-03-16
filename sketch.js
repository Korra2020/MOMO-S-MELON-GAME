var man;
let img;
let fruit;
let fruits=[];
var mode;
let lounge;

function preload(){
  
  soundFormats('mp3', 'ogg')
lounge = loadSound('lounge.mp3');
  
}

function setup() {
  mode=0;
  createCanvas(400, 400);
  
  lounge.play();
  img =loadImage('Momo.jpg')
  man = new Person(img);
  bgrnd= loadImage("forest.png")
 img2 = loadImage('Watermelon.jpeg')
  // a = createButton("next mode");
  // a.position(10, 10);
  // a.mousePressed(updatemode);
  // fruit = new Melon(img2,random (5));
  
  // have 15 melons and teacher has 20 algorithmic change
  for(let i = 0; i < 15; i++) {
    fruits[i] = new Melon(img2,random (5));
  }
}



function keyPressed() {
  if (key ==' ') {
    let force = createVector(0, -16);
    man.applyForce(force);
  }
  if(keyCode ===ENTER){
    mode=1;
  }
}

function draw() {
  clear();
 
  if (mode == 0) {
    // This is opening screen
    textSize(25)
    text("Welcome to" + "\n" + "MOMO'S MELON GAME", 70,70)
    textSize(15)
    text("\n"+"Click game screen then press enter to start", 70,100)
  }
  if (mode ==1) {
    // The game has started
    if (man.pos.x < 1000) {
      game();
    } else {
      gameOver();
    }
  }
// if (mode == 1) {
    // r = random(255);
    // background(r, 255, 255);
  // }
  // if (mode == 2) {
    // background(150, 0, 0);
    // fill(0);
    // rect(50, 50, 100+random(10), 100+random(10));
  // }
}

function updatemode() {
  mode = mode + 1;
}
// textSize Algorithmic change
function gameOver() {
  background(30, 40, 70);
  textSize(30);
  text("The Game is Over!" + '\nScore: ' + man.score + "\n" + "Thank You for playing", 100, 200);
  // text("Your Score is " + man.score, 100, 300)
}

function game() {
  background(bgrnd);

  //traslate +100 not + 50 Algorithmic change
  translate(-man.pos.x   + 100, 0);
  
  var gravity = createVector(0, 1);
  man.applyForce(gravity);

  
  //if (mouseIsPressed)
  // let force = createVector(-0.01, 0)
  // man.applyForce(force)
  
  //Makes the man apear and work
  man.update();
  man.display();
  man.edges();
  
  //Makes the baddy apear and work
  // fruit.update();
  // fruit.display();
  // fruit.edges();
  // man.hits(fruit)
  
  for (let i = 0; i < 15; i++) {
    fruits[i].update();
    fruits[i].display();
    fruits[i].edges();
    man.hits(fruits[i]);
  }
       
  //baddy black box 
  // fill(10);
  // rect(250, 350, 100, 100);
}

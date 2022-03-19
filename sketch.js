var score =0;
var sp_ship, en_ship, en_ship2, en_ship3, en_ship4, en_ship5, bg, bullet, bg2

var enemy;

var invisibleWall;

var sp_1, sp_2, meteor, enemy_img, crystal, bulletImg, bg2_img, en_img, en2_img, en3_img, en4_img, en5_img

var enemySpaceGroup, meteorGroup, bulletGroup
var enemy1,enemy2,enemy3,enemy4;

var life =3;
var score=0;
var gameState = 1, gameState = 2

function preload(){

 en_img = loadImage("spaceShip1.png")
 en3_img = loadImage("spaceShip3.png")
 en4_img = loadImage("spaceShip4.png")
 bg2_img = loadImage("bg2.jpeg")
 sp_1 = loadImage("L6.png")
 sp_2 = loadImage("L7.png")
 meteor = loadImage("L4.png")
 enemy_img = loadImage("spaceShip2.png")
 crystal = loadImage("L1.png")
 bulletImg = loadImage("L2.png")
}
function setup() {
  createCanvas(800, 800);

  
  sp_ship= createSprite(100, height/2, 50,50);
  sp_ship.addImage(sp_1)
  sp_ship.setCollider("circle",0,0,350)
  sp_ship.scale=0.2
  
  enemySpaceGroup1 = new Group();   
  enemySpaceGroup2 = new Group();   
  enemySpaceGroup3 = new Group();   
  enemySpaceGroup4 = new Group(); 
  enemySpaceGroup5 = new Group();

  meteorGroup = new Group();   
  bulletGroup = new Group();
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background(bg2_img);
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

 
    sp_ship.y=mouseY  


    if(keyDown("space")){
      shootBullet();
    }

    spawnEnemyShips1();
    spawnEnemyShips2();
    spawnEnemyShips3();
    spawnEnemyShips4();
    spawnEnemyShips5();
    
    if (bulletGroup.collide( enemySpaceGroup1)){
     handleCollision(enemySpaceGroup1);
    }

    if (bulletGroup.collide( enemySpaceGroup2)){
      handleCollision(enemySpaceGroup2);
     }
    
     if (bulletGroup.collide( enemySpaceGroup3)){
      handleCollision(enemySpaceGroup3);
     }

     if (bulletGroup.collide( enemySpaceGroup4)){
      handleCollision(enemySpaceGroup4);
     }

     if (bulletGroup.collide( enemySpaceGroup5)){
      handleCollision(enemySpaceGroup5);
     }

     if (enemySpaceGroup1.collide(sp_ship)){
       handleSpaceShipCollision(sp_ship)
     }

     if (enemySpaceGroup2.collide(sp_ship)){
      handleSpaceShipCollision(sp_ship)
    }

    if (enemySpaceGroup3.collide(sp_ship)){
      handleSpaceShipCollision(sp_ship)
    }

    if (enemySpaceGroup4.collide(sp_ship)){
      handleSpaceShipCollision(sp_ship)
    }

    if (enemySpaceGroup5.collide(sp_ship)){
      handleSpaceShipCollision(sp_ship)
    }

    drawSprites();
 }
    
  


function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= sp_ship.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleCollision(enemyGroup){
    if (life > 0) {
       score=score+1;
    }

   
    bulletGroup.destroyEach()
    enemyGroup.destroyEach()
  }


 function handleSpaceShipCollision(sp_ship){
    if(life < 0){
       life = life - 1
       gameState = 1
    }
 } 


 function spawnEnemyShips1(){
   if(frameCount % 60 === 0){
     var y= Math.round(random(30,750))
     var enemy1 = createSprite(700,y,10,40)
     enemy1.addImage(en3_img)
     
     enemy1.velocity.x = -10;

     
    
     enemy1.scale = 0.2;
     enemy1.lifetime = 800;
     enemySpaceGroup1.add(enemy1);

   }
 }

 function spawnEnemyShips2(){
  if(frameCount % 80 === 0){
    var y= Math.round(random(40,700))
    var enemy2 = createSprite(700,y,10,40)
    enemy2.addImage(en_img)
    
    enemy2.velocity.x = -10;

    
   
    enemy2.scale = 0.2;
    enemy2.lifetime = 800;
    enemySpaceGroup2.add(enemy2);

  }
}

function spawnEnemyShips3(){
  if(frameCount % 100 === 0){
    var y= Math.round(random(50,650))
    var enemy3 = createSprite(700,y,10,40)
    enemy3.addImage(enemy_img)
    
    enemy3.velocity.x = -10;

    
   
    enemy3.scale = 0.2;
    enemy3.lifetime = 800;
    enemySpaceGroup3.add(enemy3);

  }
}

function spawnEnemyShips4(){
  if(frameCount % 120 === 0){
    var y= Math.round(random(60,600))
    var enemy4 = createSprite(700,y,10,40)
    enemy4.addImage(en4_img)
    
    enemy4.velocity.x = -10;

    
   
    enemy4.scale = 0.2;
    enemy4.lifetime = 800;
    enemySpaceGroup2.add(enemy4);

  }
}

function spawnEnemyShips5(){
  if(frameCount % 140 === 0){
    var y= Math.round(random(70,550))
    var enemy5 = createSprite(700,y,10,40)
    enemy5.addImage(sp_2)
    
    enemy5.velocity.x = -10;

    
   
    enemy5.scale = 0.2;
    enemy5.lifetime = 800;
    enemySpaceGroup2.add(enemy5);

  }
}



 //(function handleGameover(bubbleGroup){
  
  //  life=life-1;
  //  bubbleGroup.destroyEach();
    

 //   if (life === 0) {
  //    gameState=2
      
  //    swal({
  //      title: `Game Over`,
  //      text: "Oops you lost the game....!!!",
   //     text: "Your Score is " + score,
    //    imageUrl:
    //      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
   //     imageSize: "100x100",
   //     confirmButtonText: "Thanks For Playing"
  //    });
  //  }
//}
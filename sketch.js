var bg, bgImage;
var game;
var gunMan,gunManStandingAnimation, gunManAnimation, gunManSittingAnimation, gunManKilledAnimation;
var gameState="play";
var gunManObject,enemyObject,fireObject;
var enemyAnimation, enemy, enemyImage, enemyGroup;
var enemy2Animation, enemy2, enemy2Group;
var enemyCount;
var enemyBulletImage;
var bulletImage, bulletGroup;
var gunManLife = 3;
var firing_sound,shot_sound,shot_dead_sound,back_sound;
var gameOver, gameOverImage;
var lockUp, lockUpImage, lockupBox, lockupBoxImage;
var rescueBoy, rescueBoyStandingAnimation, rescueBoyAnimation;
var lockClosedAnimation, lockOpenAnimation;
var showMsg=false;

function preload(){
   bgImage = loadImage("City_BG2.jpg");
   gunManStandingAnimation = loadAnimation("gunMan_stand.png");
   gunManAnimation = loadAnimation("GM1T.png", "GM2T.png", "GM5T.png", "GM6T.png", "iGM1T.png");
   gunManSittingAnimation = loadAnimation("images/gunMan_sit2.png");
   gunManKilledAnimation = loadAnimation("gunMan_killed4.png");
   enemyAnimation = loadAnimation("enemy1.png", "enemy2.png", "enemy3.png", "enemy4.png", "enemy5.png");
   enemy2Animation = loadAnimation("enm1.png", "enm2.png", "enm3.png", "enm4.png");
   enemyImage = loadImage("enemy1.png");
   enemyBulletImage = loadImage("normal bullet.png");
   bulletImage = loadImage("gunManBullet.png");
   gameOverImage = loadImage("gameOver2.png");
   lockUpImage = loadImage("lockup1.png");
  rescueBoyStandingAnimation = loadAnimation("rescueBoy.png");
  lockClosedAnimation = loadAnimation("lock-1.png");
  lockOpenAnimation = loadAnimation("lock-2.png");
  lockupBoxImage = loadImage("lockup-box.png");
  rescueBoyAnimation = loadAnimation("boy1.png", "boy2.png", "boy3.png", "boy4.png");
   firing_sound = loadSound("fire_sound.mp3");
   shot_sound = loadSound("shot_sound.mp3");
   shot_dead_sound = loadSound("shot_dead_sound.mp3");
   back_sound = loadSound("back-music.mp3");
}


function setup(){

  createCanvas(displayWidth, displayHeight-150);
  bg = createSprite(displayWidth/2, displayHeight/2-80);
  bg.addImage(bgImage);
  bg.scale = 0.95;

  game = new Game();

  gunMan = createSprite(displayWidth/4, displayHeight/4);
  gunMan.addAnimation("gunManStanding", gunManStandingAnimation);
  gunMan.addAnimation("GunMan_Running", gunManAnimation);
  gunMan.addAnimation("GunMan_Sitting", gunManSittingAnimation);
  gunMan.addAnimation("GunMan_Killed",gunManKilledAnimation);
  gunMan.scale = 0.7;
  gunMan.debug=false;

  invisibleRoad = createSprite(bg.width / 2, displayHeight-150, bg.width, 20);
  invisibleRoad.visible = false;

  bulletGroup = new Group();
  enemyGroup = new Group();
  enemy2Group = new Group();
  enemyFireGroup = new Group();

  gameOver = createSprite(displayWidth/2+200,displayHeight/2-100);
  gameOver.addImage(gameOverImage);
  gameOver.scale =0.3;
  gameOver.visible=false;

  lockupBox = createSprite(displayWidth/2+200, displayHeight/1.6); //680
  lockupBox.addImage(lockupBoxImage);
  lockupBox.scale = 0.5;
  lockupBox.visible = false;

  rescueBoy = createSprite(displayWidth/2+180, displayHeight/1.6);//660
  rescueBoy.addAnimation("boyStanding", rescueBoyStandingAnimation);
  rescueBoy.addAnimation("boyRunning", rescueBoyAnimation);
  rescueBoy.scale = 0.5;
  rescueBoy.visible = false;

  lockUp = createSprite(displayWidth/2+175, displayHeight/1.6);//655,380
  lockUp.addImage(lockUpImage);
  lockUp.scale = 0.35;
  //lockUp.debug=true;
  lockUp.visible = false;

  lock = createSprite(displayWidth/2+150, displayHeight/1.6-25);
  lock.addAnimation("lock-closed", lockClosedAnimation);
  lock.addAnimation("lock-open", lockOpenAnimation);
  lock.scale = 0.3;
  //lock.debug = true;
  lock.visible = false;


  enemyCount=0;

  back_sound.loop();
  
}

function draw(){

    drawSprites();
    if(gameState === "play"){
      game.play();
    }

    else if(gameState === "over"){
      game.over();
    }

    else if (gameState === "finish") {
      game.finish();
    }

   if(keyDown('r')&& (gameState === "finish" || gameState === "over")){
      location.reload();
    }
    
}
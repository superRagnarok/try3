var instructions, introImg;
var gameState=0;
var button;
var game;
var boyImage;
var BfaceShield, BfSGloves, Bgloves, Bmask, BmaskfS, BmaskfSGloves, BglovesMask, Bppe, Bsanitizer;
var situation=[];
var buttonClicked=[];
var answers=[];
var sceneDisplayed = false;
var correctResult, wrongResult;
var r;

function preload(){
introImg = loadImage("intro.png");
BfaceShield = loadImage("withFaceS.PNG");
BfSGloves = loadImage("withFsG.PNG");
Bgloves = loadImage("withGloves.PNG");
Bmask = loadImage("withMask.PNG");
BmaskfS = loadImage("withMFs.PNG");
BmaskfSGloves = loadImage("withMFsG.PNG");
BglovesMask = loadImage("withMG.PNG");
Bppe = loadImage("withPPE.PNG");
Bsanitizer = loadImage("sanitizer.PNG");
correctResult = loadImage("correct.png");
wrongResult = loadImage("wrong.png");

}
function setup(){
createCanvas(displayWidth-30,displayHeight-140);
//console.log(buttonClicked.length);
instructions = createSprite(displayWidth/2.05,displayHeight/2.18,displayWidth-100,displayHeight-400);
instructions.addImage(introImg);
button=createButton('Start The GAME');
button.position(displayWidth*3.2/4,displayHeight*3/4);
button.style('height', '30px');
button.style('width', '100px');
button.style('fontSize','10px');
button.style('background', 'yellow');
game = new Game();
situation=[[1,"Atharva is a doctor, and treats Covid patients. Equip him in such a way that he is completely safe from the virus."],[2,"Atharva ordered some pantry items online. Now, the delivery boy is at the doorstep. Help him to collect the pantry items safely by equiping him with precautionary items."],[3,"The school has been reopened offline from grade 8 and above. Therefore, Atharva has to go to school. Equip him so that he is completely safe from Corona Virus."],[4,"Atharva wants to buy vegetables for his tommorow's lunch. Hence, he is going to the market. Equip him so that he does't get covid positive."],[5,"Atharva is going outstation because of an emergency and will be travelling. So he has a chance that he can get affected by the virus. Equip him so that he is safe."],[6,"Atharva is becoming very eager to go out in the playground and play. But, he should make sure that he is safe from the virus. Equip him accordingly."]];

answers =[[1,"PPE KIT","SANITIZER"],[2,"MASK","GLOVES"],[3,"MASK","GLOVES","FACE SHIELD","SANITIZER"],[4,"FACE SHIELD","SANITIZER","MASK"],[5,"MASK","GLOVES","FACE SHIELD","SANITIZER"],[6,"MASK","SANITIZER"]];
instructions.scale= 0.3;

}
function draw(){
background("maroon");
textSize(25);
fill(255);
text("UNITY BOYCOTT COVID",displayWidth/2-150,50);
/*if (gameState===0){

}*/
button.mousePressed(()=>{
instructions.visible = false;
button.hide();
gameState=1;

})
if (gameState === 1){
    
    game.maskB.show();
    game.fSB.show();
    game.glovesB.show();
    game.ppeKitB.show();
    game.sanitizerB.show();
    game.clear.show();
    game.submit.show();
    game.scene.show();
    game.boy.addImage(game.boyImage);
    game.boy.scale=0.25;
    console.log(buttonClicked);
    game.display();
}
if (gameState === 2){
    game.replay.show();
    //buttonClicked=[];
    game.end();
    
}
if (gameState === 0){
    buttonClicked=[];
    game.maskB.hide();
    game.fSB.hide();
    game.glovesB.hide();
    game.ppeKitB.hide();
    game.sanitizerB.hide();
    game.clear.hide();
    game.submit.hide();
    game.replay.hide();
    game.resultC.visible=false;
    game.resultW.visible=false;
    instructions.visible = true;
    //buttonClicked=[];
    console.log(buttonClicked);
    button.show();
}
drawSprites();
}
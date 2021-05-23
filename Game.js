class Game{
    constructor(){
this.boy=createSprite(displayWidth/2,displayHeight/2,40,40);
this.boyImage=loadImage("onlyBoy.PNG");
this.boy.addImage(this.boyImage);
this.boy.scale=0.25;
this.boy.visible=false;
this.sanitizer=createSprite(displayWidth/2+100,displayHeight/2,20,20);
this.sanitizer.addImage(Bsanitizer);
this.sanitizer.visible=false;
this.sanitizer.scale=0.2;
this.scene = createElement('h2');
 
this.resultC = createSprite(displayWidth/2, displayHeight/2,100,100);
this.resultC.addImage(correctResult);
this.resultC.visible=false;

this.resultW = createSprite(displayWidth/2, displayHeight/2,100,100);
this.resultW.addImage(wrongResult);
this.resultW.visible=false;


this.maskB=createButton("MASK");
this.glovesB=createButton("GLOVES");
this.fSB=createButton("FACE SHIELD");
this.ppeKitB=createButton("PPE KIT");
this.replay = createButton("REPLAY");
this.sanitizerB=createButton("SANITIZER");
this.clear = createButton("CLEAR SELECTION");
this.submit = createButton("SUBMIT");


this.maskB.style('height','30px');
this.maskB.style('width','100px');
this.maskB.style('fontSize','10px');

this.glovesB.style('height','30px');
this.glovesB.style('width','100px');
this.glovesB.style('fontSize','10px');

this.fSB.style('height','30px');
this.fSB.style('width','100px');
this.fSB.style('fontSize','10px');

this.ppeKitB.style('height','30px');
this.ppeKitB.style('width','100px');
this.ppeKitB.style('fontSize','10px');

this.sanitizerB.style('height','30px');
this.sanitizerB.style('width','110px');
this.sanitizerB.style('fontSize','10px');

this.clear.style('height','30px');
this.clear.style('width','100px');
this.clear.style('fontSize','10px');
this.clear.style('background', 'yellow');
this.clear.style('color','navy');

this.submit.style('height','30px');
this.submit.style('width','100px');
this.submit.style('fontSize','10px');
this.submit.style('background', 'yellow');
this.submit.style('color','navy');

this.replay.style('height','30px');
this.replay.style('width','100px');
this.replay.style('fontSize','10px');
this.replay.style('background', 'yellow');
this.replay.style('color','navy');


this.maskB.style('background', 'aqua');

this.sanitizerB.style('background', 'aqua');

this.fSB.style('background', 'aqua');

this.glovesB.style('background', 'aqua');

this.ppeKitB.style('background', 'aqua');

    }
    display(){
        var mask = false;
        var gloves = false;
        var faceShield = false;
        var ppeKit = false;
        this.boy.visible=true;
        if (sceneDisplayed === false){
            r = Math.round(random(1,6));
           for (var i = 0; i<6; i++){
            if (r === situation[i][0] ){
             this.scene.html(situation[i][1]);
             this.scene.position(displayWidth/2-150,displayHeight/5.5);
             this.scene.style('color','yellow');
             this.scene.style('height', '30px');
             this.scene.style('width', '200px');
             this.scene.style('fontSize','19px');
             this.scene.style('textAlign','center')
             sceneDisplayed = true;
           }
        }
    }
    this.maskB.position(displayWidth/8,displayHeight/4);
    this.glovesB.position(displayWidth/1.53,displayHeight/4);
    this.fSB.position(displayWidth/8,displayHeight/3.5);
    this.ppeKitB.position(displayWidth/1.53,displayHeight/3.5);
    this.replay.position(displayWidth/1.53,displayHeight/1.5);
    this.sanitizerB.position(displayWidth/8,displayHeight/2);
    this.clear.position(displayWidth/25,displayHeight/1.4);
    this.submit.position(displayWidth/4,displayHeight/1.4);
    
    this.maskB.mousePressed(()=>{
        buttonClicked.push("MASK");
    })
    this.fSB.mousePressed(()=>{
        buttonClicked.push("FACE SHIELD");
    })
    
    this.sanitizerB.mousePressed(()=>{
        buttonClicked.push("SANITIZER");
    })
    this.glovesB.mousePressed(()=>{
        buttonClicked.push("GLOVES");
    })
    this.ppeKitB.mousePressed(()=>{
        buttonClicked.push("PPE KIT");
    })
    
    
    //console.log(buttonClicked.length);
    for(var i=0; i<buttonClicked.length; i++){
        if (buttonClicked[i]==="PPE KIT"){
            this.boy.addImage(Bppe);
        }
        if (buttonClicked[i]==="MASK"){
            this.boy.addImage(Bmask);
            mask = true;
        }
        if (buttonClicked[i]==="GLOVES"){
            this.boy.addImage(Bgloves);
           gloves = true;
        }
        if (buttonClicked[i]==="FACE SHIELD"){
            this.boy.addImage(BfaceShield);
            faceShield =  true;
        }
        if (buttonClicked[i]==="SANITIZER"){
            this.sanitizer.visible=true;
        }
        
        //console.log(buttonClicked[i]);
        
    }
    for(var i=0; i<buttonClicked.length; i++){
        
        if (buttonClicked[i]==="GLOVES" && mask === true){
            this.boy.addImage(BglovesMask);
            gloves = true;
        }
      
    }
    for(var i=0; i<buttonClicked.length; i++){
        
        if (buttonClicked[i]==="FACE SHIELD" && mask === true){
            this.boy.addImage(BmaskfS);
            faceShield = true;
        }
      
    }
    for(var i=0; i<buttonClicked.length; i++){
        
        if (buttonClicked[i]==="FACE SHIELD" && gloves === true){
            this.boy.addImage(BfSGloves);
            faceShield = true;
        }
      
    }
    for(var i=0; i<buttonClicked.length; i++){
        
        if (buttonClicked[i]==="FACE SHIELD" && gloves === true && mask === true){
            this.boy.addImage(BmaskfSGloves);
            faceShield = true;
        }
      
    }
    for(var i=0; i<buttonClicked.length; i++){
        
        if (buttonClicked[i]==="PPE KIT"){
            this.boy.addImage(Bppe);
            this.boy.scale=1;
            ppeKit =true;
        }
      
    }
    this.clear.mousePressed(()=>{
        buttonClicked=[];
        this.boy.addImage(this.boyImage);
        this.boy.scale=0.25;
        ppeKit = false;
        this.sanitizer.visible = false;
        gloves = false;
        mask = false;
        faceShield = false;

    })

    this.submit.mousePressed(()=>{
        gameState = 2;

    })

        drawSprites();
        /*textSize(30);
       text(buttonClicked[0],100,100);*/
       
    }
    end(){
        this.boy.visible = false;
        this.sanitizer.visible = false;
        this.maskB.hide();
        this.glovesB.hide();
        this.ppeKitB.hide();
        this.fSB.hide();
        this.sanitizerB.hide();
        this.clear.hide();
        this.submit.hide();
        this.scene.hide();
        this.replay.mousePressed(()=>{
            gameState = 0;
            //console.log(gameState);
        });
        
        var checkAnswer=[];
       /*console.log(answers.length);
        
        for (var i=0; i<buttonClicked.length; i++){
            console.log(buttonClicked[i]);
        }
        for (var i=0; i<answers[r-1].length; i++){
            console.log(answers[r][i+1]);
        }
        console.log(answers);   */    
        var i;
        for (i=0; i<buttonClicked.length; i++){
            for (var j=0; j<answers[r-1].length; j++){
                if (buttonClicked[i] === answers[r-1][j+1]){
                   
                   checkAnswer[i]= true;
                   //console.log(answers[r-1][j]);
                   break
                }
            }
            if (j === answers[r-1].length){
                checkAnswer[i]= false;
            }
        }
        //console.log(checkAnswer.length);
        /*for (i=0; i<checkAnswer.length; i++){
            
            if (checkAnswer[i] === false){
              break
            }
        }*/

        if ((answers[r-1].length)-1 === checkAnswer.length){
            this.resultC.visible=true;
            
        } else {
            this.resultW.visible=true;
            
        }
        console.log(buttonClicked);
       //buttonClicked=[];

    }
}
var krabs = new Image()
krabs.src="krabs.png"
var patrick = new Image()
patrick.src="patrick.png"
var sponge = new Image()
sponge.src="spongebob.png"
var squid = new Image()
squid.src="squidward.png"
var ladder = new Image()
ladder.src="ladder.png"
var bridge = new Image()
bridge.src="bridge.png"
var life = new Image()
life.src="burger.png"
var openTrap = new Image()
openTrap.src="openTrapDoor.png"
var closeTrap = new Image()
closeTrap.src="closedTrapDoor.png"
var openTrap2 = new Image()
openTrap2.src="openTrapDoor2.png"
var closeTrap2 = new Image()
closeTrap2.src="closedTrapDoor2.png"
var openTrap3 = new Image()
openTrap3.src="openTrapDoor.png"
var closeTrap3 = new Image()
closeTrap3.src="closedTrapDoor.png"
var pressButton = new Image()
pressButton.src="PressedButton.png"
var UnpressButton = new Image()
UnpressButton.src="UnpressedButton.png"
var pressButton2 = new Image()
pressButton2.src="PressedButton.png"
var UnpressButton2 = new Image()
UnpressButton2.src="UnpressedButton.png"
var mysteryBox = new Image()
mysteryBox.src="mysteryBox.png"
var bomb = new Image()
bomb.src="bomb.png"
var port = new Image()
port.src="portal.png"
var port2 = new Image()
port2.src="portal.png"
var machine = new Image()
machine.src="machine.png"
var box = new Image()
box.src="box.jpg"
var redX = new Image()
redX.src="redX.png"
var pressButtonB = new Image()
pressButtonB.src="PressedButton2.png"
var UnpressButtonB = new Image()
UnpressButtonB.src="UnpressedButton2.png"
var leverOff = new Image()
leverOff.src="leverOff.png"
var leverOn = new Image()
leverOn.src="leverOn.png"
var leverOff2 = new Image()
leverOff2.src="leverOff2.png"
var leverOn2 = new Image()
leverOn2.src="leverOn2.png"
var rayGun = new Image()
rayGun.src="rayGun.png"
var rayGunholdL = new Image()
rayGunholdL.src="rayGun.png"
var rayGunholdR = new Image()
rayGunholdR.src="rayGunRight.png"
var laserL = new Image()
laserL.src="laserL.png"
var laserR = new Image()
laserR.src="laserR.png"
var bridgeArray = []
var ladderArray= []
var squidArray = []
var mysteryBoxArray= []
var bombArray = []
var moveLeft = []
var moveRight = []
var moveLeft2=[]
var moveRight2=[]
var moveLeft3=[]
var moveRight3=[]
var isSquidTouching=[]
var isBoxTouching=[]
var isBombTouching=[]
var burgerLives=[]
var burgers=[]
var lasers=[]
var laserLeft=[]
var laserRight=[]
var isTouchingBridge = false
var isTouchingLadder = false
var PisTouchingBridge = false
var PisTouchingLadder = false
var timer=1000
var timer2=Math.round(Math.random()*2000+2000)
var timer3=Math.round(Math.random()*3000+3000)
var random=0
var random2=0
var timerLength=1000
var goUp=false
var goDown=false
var PgoUp=false
var PgoDown=false
var lives=5
var jumping=false
var canJump=true
var Pjumping=false
var PcanJump=true
var score=0
var highScore=0
var connect=true
var speed=1.5
var bombSpeed=.8
var playerSpeed=2
var speedUpTime=500
var TrapDoorOpen=false
var TrapDoorOpen2=false
var TrapDoorOpen3=false
var ButtonPressed=false
var ButtonPressed2=false
var ButtonPressed3=false
var portalOn=false
var portalOn2=false
var CrateTouchBridge=false
var CrateTouchX=false
//leave=lever *typo
var isLeaveOn=false
var isLeaveOn2=false
var isTouchingTrap=false
var isTouchingTrapB=false
var isTouchingTrap2=false
var PisTouchingTrapB=false
var PisTouchingTrap=false
var PisTouchingTrap2=false
var Dimension=1
var rayGunAppear=false
var gunOnRight=false
var gunOnLeft=false
var haveRayGun=false
var reloadTime=0
var canShoot=false
var shoot=false
var GameDone=false
var FirstTime=true
function initialize(){
    drawBackground()
    drawBridges()
    drawLadders()
    if(FirstTime===true){
        animateLoop()
        FirstTime=false
    }
    sponge = createImage(sponge.src,30,430,20,20)
    patrick = createImage(patrick.src,50,430,20,20)
    krabs = createImage(krabs.src,350,12,50,50)
    machine = createImage(machine.src,450,200,50,50)
    rayGun=createImage(rayGun.src,100,430,30,20)
    rayGunholdL=createImage(rayGunholdL.src,-100,-440,15,8)
    rayGunholdR=createImage(rayGunholdR.src,-100,-440,15,8)
    port = createImage(port.src,420,200,30,50)
    port2 = createImage(port2.src,0,100,30,50)
    box = createImage(box.src,140,230,20,20)
    redX = createImage(redX.src,350,280,20,70)
    leverOn = createImage(leverOn.src,0,215,17,20)
    leverOff = createImage(leverOff.src,0,215,17,20)
    leverOn2 = createImage(leverOn2.src,483,215,17,20)
    leverOff2 = createImage(leverOff2.src,483,215,17,20)
    openTrap=createImage(openTrap.src,170,351,50,20)
    closeTrap=createImage(closeTrap.src,170,351,50,20)
    openTrap2=createImage(openTrap2.src,0,249,130,25)
    closeTrap2=createImage(closeTrap2.src,100,249,15,60)
    openTrap3=createImage(openTrap.src,290,151,50,20)
    closeTrap3=createImage(closeTrap.src,290,151,50,20)
    pressButton=createImage(pressButton.src,430,445,15,7)
    UnpressButton=createImage(UnpressButton.src,430,442,15,10)
    pressButton2=createImage(pressButton.src,40,345,15,7)
    UnpressButton2=createImage(UnpressButton.src,40,342,15,10)
    burgerLives.push(createImage(life.src,0,0,40,40))
    burgerLives.push(createImage(life.src,30,0,40,40))
    burgerLives.push(createImage(life.src,60,0,40,40))
    burgerLives.push(createImage(life.src,90,0,40,40))
    burgerLives.push(createImage(life.src,120,0,40,40))
    burgers.push(createImage(life.src,100,330,30,30))
    burgers.push(createImage(life.src,350,230,30,30))
    burgers.push(createImage(life.src,200,130,30,30))
    ladderArray.push(createImage(ladder.src,180,345,30,115))
    ladderArray.push(createImage(ladder.src,300,140,30,220))
    ladderArray.push(createImage(ladder.src,100,40,30,115))
    bridgeArray.push(createImage(bridge.src,0,450,500,35))
    bridgeArray.push(createImage(bridge.src,0,350,400,35))
    bridgeArray.push(createImage(bridge.src,100,250,400,35))
    bridgeArray.push(createImage(bridge.src,0,150,400,35))
    bridgeArray.push(createImage(bridge.src,45,50,400,35))
    pressButtonB=createImage(pressButtonB.src,250,345,15,7)
    UnpressButtonB=createImage(UnpressButtonB.src,250,342,15,10)
}
function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(Dimension===1) {
        ctx.fillStyle = "#47fff9"
    }
    if(Dimension===2){
        ctx.fillStyle = "#d50119"
    }
    ctx.fillRect(0, 0, 500, 500)
}
function drawBridges(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<bridgeArray.length;i++){
        ctx.drawImage(bridgeArray[i],bridgeArray[i].xLoc,bridgeArray[i].yLoc,bridgeArray[i].width,bridgeArray[i].height)
    }
}
function drawX(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(redX,redX.xLoc,redX.yLoc,redX.width,redX.height)
}
function drawLadders(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<ladderArray.length;i++){
        ctx.drawImage(ladderArray[i],ladderArray[i].xLoc,ladderArray[i].yLoc,ladderArray[i].width,ladderArray[i].height)
    }
}
function drawMachine(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(machine,machine.xLoc,machine.yLoc,machine.width,machine.height)
}
function drawPortal(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(portalOn){
        ctx.drawImage(port,port.xLoc,port.yLoc,port.width,port.height)
    }
}

function createSponge(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(sponge,sponge.xLoc,sponge.yLoc,sponge.width,sponge.height)
}
function createSquid(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(timer>0){
        timer-=1
    }else{
        squidArray.push(createImage(squid.src,350,32,20,20))
        moveLeft.push(true)
        moveRight.push(false)
        isSquidTouching.push(false)
        timer=timerLength
    }
    for (i=0;i<squidArray.length;i++){
        ctx.drawImage(squidArray[i],squidArray[i].xLoc,squidArray[i].yLoc,squidArray[i].width,squidArray[i].height)
    }

}
function createMysteryBox(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (timer2>0){
        timer2-=1
    }else{
        random=Math.round(Math.random()*3)
        if(random===1){
            mysteryBoxArray.push(createImage(mysteryBox.src,350,32,20,20))
            moveLeft2.push(true)
            moveRight2.push(false)
            isBoxTouching.push(false)
            timer2=Math.round(Math.random()*2000+1000)
        }else{
            timer2=Math.round(Math.random()*2000+1000)
        }

    }
    for (i=0;i<mysteryBoxArray.length;i++){
        ctx.drawImage(mysteryBoxArray[i],mysteryBoxArray[i].xLoc,mysteryBoxArray[i].yLoc,mysteryBoxArray[i].width,mysteryBoxArray[i].height)
    }
}
function createBomb(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(timer3>0){
        timer3-=1
    }else{
        bombArray.push(createImage(bomb.src,350,30,20,20))
        moveLeft3.push(true)
        moveRight3.push(false)
        isBombTouching.push(false)
        timer3=Math.round(Math.random()*3000+3000)
    }
    for (i=0;i<bombArray.length;i++){
        ctx.drawImage(bombArray[i],bombArray[i].xLoc,bombArray[i].yLoc,bombArray[i].width,bombArray[i].height)
    }
}
function moveSquid(){
    for (i=0;i<squidArray.length;i++){
        if(moveLeft[i]===true && isSquidTouching[i]){
            squidArray[i].xLoc-=speed
        }
        if(isSquidTouching[i]===false){
            squidArray[i].yLoc+=speed
            if (squidArray[i].xLoc>200){
                moveLeft[i]=true
                moveRight[i]=false
            }
            if (squidArray[i].xLoc<200){
                moveLeft[i]=false
                moveRight[i]=true
            }
        }
        if (moveRight[i]===true && isSquidTouching[i]){
            squidArray[i].xLoc+=speed
        }
        if (squidArray[i].xLoc<0){
            score+=1
            squidArray.splice(i,1)
            moveRight.splice(i,1)
            moveLeft.splice(i,1)
            isSquidTouching.splice(i,1)
        }
    }
}
function moveBox(){
    for (i=0;i<mysteryBoxArray.length;i++){
        if(moveLeft2[i]===true && isBoxTouching[i]){
            mysteryBoxArray[i].xLoc-=speed
        }
        if(isBoxTouching[i]===false){
            mysteryBoxArray[i].yLoc+=speed
            if (mysteryBoxArray[i].xLoc>200){
                moveLeft2[i]=true
                moveRight2[i]=false
            }
            if (mysteryBoxArray[i].xLoc<200){
                moveLeft2[i]=false
                moveRight2[i]=true
            }
        }
        if (moveRight2[i]===true && isBoxTouching[i]){
            mysteryBoxArray[i].xLoc+=speed
        }
        if (mysteryBoxArray[i].xLoc<0){
            score+=1
            mysteryBoxArray.splice(i,1)
            moveRight2.splice(i,1)
            moveLeft2.splice(i,1)
            isBoxTouching.splice(i,1)
        }
    }
}
function moveBomb(){
    for (i=0;i<bombArray.length;i++){
        if(moveLeft3[i]===true && isBombTouching[i]){
            bombArray[i].xLoc-=bombSpeed
        }
        if(isBombTouching[i]===false){
            bombArray[i].yLoc+=bombSpeed
            if (bombArray[i].xLoc>200){
                moveLeft3[i]=true
                moveRight3[i]=false
            }
            if (bombArray[i].xLoc<200){
                moveLeft3[i]=false
                moveRight3[i]=true
            }
        }
        if (moveRight3[i]===true && isBombTouching[i]){
            bombArray[i].xLoc+=bombSpeed
        }
        if (bombArray[i].xLoc<0){
            score+=2
            bombArray.splice(i,1)
            moveRight3.splice(i,1)
            moveLeft3.splice(i,1)
            isBombTouching.splice(i,1)
        }
    }
}
function createPatrick(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(patrick,patrick.xLoc,patrick.yLoc,patrick.width,patrick.height)
}
function createLives(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<burgerLives.length;i++){
        ctx.drawImage(burgerLives[i],burgerLives[i].xLoc,burgerLives[i].yLoc,burgerLives[i].width,burgerLives[i].height)
    }
}
function createBurgers(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<burgers.length;i++){
        ctx.drawImage(burgers[i],burgers[i].xLoc,burgers[i].yLoc,burgers[i].width,burgers[i].height)
    }
}
function createKrab(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(krabs,krabs.xLoc,krabs.yLoc,krabs.width,krabs.height)
}
function createTrapDoors(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(TrapDoorOpen){
        ctx.drawImage(openTrap,openTrap.xLoc,openTrap.yLoc,openTrap.width,openTrap.height)
    }
    if(!TrapDoorOpen){
        ctx.drawImage(closeTrap,closeTrap.xLoc,closeTrap.yLoc,closeTrap.width,closeTrap.height)
    }
}
function createTrapDoors2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(TrapDoorOpen2){
        ctx.drawImage(openTrap2,openTrap2.xLoc,openTrap2.yLoc,openTrap2.width,openTrap2.height)
    }
    if(!TrapDoorOpen2){
        ctx.drawImage(closeTrap2,closeTrap2.xLoc,closeTrap2.yLoc,closeTrap2.width,closeTrap2.height)
    }
}
function createTrapDoors3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(TrapDoorOpen3){
        ctx.drawImage(openTrap3,openTrap3.xLoc,openTrap3.yLoc,openTrap3.width,openTrap3.height)
    }
    if(!TrapDoorOpen3){
        ctx.drawImage(closeTrap3,closeTrap3.xLoc,closeTrap3.yLoc,closeTrap3.width,closeTrap3.height)
    }
}
function createCrate(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(box,box.xLoc,box.yLoc,box.width,box.height)
}
function crateDrop(){
    CrateTouchBridge=false
    for(i=0;i<bridgeArray.length;i++) {
        if (bridgeArray[i].xLoc + bridgeArray[i].width > box.xLoc && bridgeArray[i].xLoc < box.xLoc + box.width && bridgeArray[i].yLoc + bridgeArray[i].height > box.yLoc && bridgeArray[i].yLoc < box.yLoc + box.height) {
            CrateTouchBridge = true
        }
    }
    CrateTouchX=false
    if (redX.xLoc + redX.width > box.xLoc && redX.xLoc < box.xLoc + box.width && redX.yLoc +redX.height > box.yLoc && redX.yLoc < box.yLoc + box.height) {
        CrateTouchX = true
    }
    if(!CrateTouchBridge){
        box.yLoc+=1
    }
    if(sponge.xLoc + sponge.width > box.xLoc && sponge.xLoc < box.xLoc + box.width && sponge.yLoc + sponge.height > box.yLoc && sponge.yLoc < box.yLoc + box.height && sponge.xLoc<box.xLoc && !CrateTouchX|| patrick.xLoc + patrick.width > box.xLoc && patrick.xLoc < box.xLoc + box.width && patrick.yLoc + patrick.height > box.yLoc && patrick.yLoc < box.yLoc + box.height && patrick.xLoc<box.xLoc && !CrateTouchX){
        box.xLoc+=playerSpeed
    }
    if(sponge.xLoc + sponge.width > box.xLoc && sponge.xLoc < box.xLoc + box.width && sponge.yLoc + sponge.height > box.yLoc && sponge.yLoc < box.yLoc + box.height && sponge.xLoc>box.xLoc || patrick.xLoc + patrick.width > box.xLoc && patrick.xLoc < box.xLoc + box.width && patrick.yLoc + patrick.height > box.yLoc && patrick.yLoc < box.yLoc + box.height && patrick.xLoc>box.xLoc){
        box.xLoc-=playerSpeed
    }
    ButtonPressed3=false
    TrapDoorOpen2=false
    if(UnpressButtonB.xLoc + UnpressButtonB.width > box.xLoc && UnpressButtonB.xLoc < box.xLoc + box.width && UnpressButtonB.yLoc+ UnpressButtonB.height > box.yLoc && UnpressButtonB.yLoc < box.yLoc + box.height || pressButtonB.xLoc + pressButtonB.width > box.xLoc && pressButtonB.xLoc < box.xLoc + box.width && pressButtonB.yLoc+ pressButtonB.height > box.yLoc && pressButtonB.yLoc < box.yLoc + box.height){
        ButtonPressed3=true
        TrapDoorOpen2=true
    }
    if(box.xLoc<0){
        box.xLoc=0
    }
    if(box.xLoc>480){
        box.xLoc=480
    }
}
function createButtons(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(ButtonPressed){
        ctx.drawImage(pressButton,pressButton.xLoc,pressButton.yLoc,pressButton.width,pressButton.height)
    }
    if(!ButtonPressed){
        ctx.drawImage(UnpressButton,UnpressButton.xLoc,UnpressButton.yLoc,UnpressButton.width,UnpressButton.height)
    }

    if(ButtonPressed2){
        ctx.drawImage(pressButton2,pressButton2.xLoc,pressButton2.yLoc,pressButton2.width,pressButton2.height)
    }
    if(!ButtonPressed2){
        ctx.drawImage(UnpressButton2,UnpressButton2.xLoc,UnpressButton2.yLoc,UnpressButton2.width,UnpressButton2.height)
    }
}
function createButtons2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(ButtonPressed3){
        ctx.drawImage(pressButtonB,pressButtonB.xLoc,pressButtonB.yLoc,pressButtonB.width,pressButtonB.height)
    }
    if(!ButtonPressed3){
        ctx.drawImage(UnpressButtonB,UnpressButtonB.xLoc,UnpressButtonB.yLoc,UnpressButtonB.width,UnpressButtonB.height)
    }
}
function drawLevers(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(!isLeaveOn){
        ctx.drawImage(leverOff,leverOff.xLoc,leverOff.yLoc,leverOff.width,leverOff.height)
    }
    if(isLeaveOn){
        ctx.drawImage(leverOn,leverOn.xLoc,leverOn.yLoc,leverOn.width,leverOn.height)
    }
    if(leverOff.xLoc + leverOff.width > sponge.xLoc && leverOff.xLoc < sponge.xLoc + sponge.width &&leverOff.yLoc+ leverOff.height > sponge.yLoc && leverOff.yLoc < sponge.yLoc + sponge.height || leverOff.xLoc + leverOff.width > patrick.xLoc && leverOff.xLoc < patrick.xLoc + patrick.width &&leverOff.yLoc+ leverOff.height > patrick.yLoc && leverOff.yLoc < patrick.yLoc + patrick.height){
        isLeaveOn=true
        portalOn=true
    }
}
function portalJump(){
    if(port.xLoc + port.width > sponge.xLoc && port.xLoc < sponge.xLoc + sponge.width && port.yLoc+ port.height > sponge.yLoc && port.yLoc < sponge.yLoc + sponge.height && port.xLoc + port.width > patrick.xLoc && port.xLoc < patrick.xLoc + patrick.width && port.yLoc+ port.height > patrick.yLoc && port.yLoc < patrick.yLoc + patrick.height && portalOn){
        Dimension=2
        portalOn=false
        isLeaveOn=false
        sponge.xLoc=30
        sponge.yLoc=430
        patrick.xLoc=50
        patrick.yLoc=430
    }
}
function drawPort2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(portalOn2){
        ctx.drawImage(port2,port2.xLoc,port2.yLoc,port2.width,port2.height)
    }
}
function drawLevers2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(!isLeaveOn2){
        ctx.drawImage(leverOff2,leverOff2.xLoc,leverOff2.yLoc,leverOff2.width,leverOff2.height)
    }
    if(isLeaveOn2){
        ctx.drawImage(leverOn2,leverOn2.xLoc,leverOn2.yLoc,leverOn2.width,leverOn2.height)
    }
    if(leverOff2.xLoc + leverOff2.width > sponge.xLoc && leverOff2.xLoc < sponge.xLoc + sponge.width &&leverOff2.yLoc+ leverOff2.height > sponge.yLoc && leverOff2.yLoc < sponge.yLoc + sponge.height || leverOff2.xLoc + leverOff2.width > patrick.xLoc && leverOff2.xLoc < patrick.xLoc + patrick.width &&leverOff2.yLoc+ leverOff2.height > patrick.yLoc && leverOff2.yLoc < patrick.yLoc + patrick.height){
        isLeaveOn2=true
        portalOn2=true
    }
}
function portalJump2(){
    if(port2.xLoc + port2.width > sponge.xLoc && port2.xLoc < sponge.xLoc + sponge.width && port2.yLoc+ port2.height > sponge.yLoc && port2.yLoc < sponge.yLoc + sponge.height && port2.xLoc + port2.width > patrick.xLoc && port2.xLoc < patrick.xLoc + patrick.width && port2.yLoc+ port2.height > patrick.yLoc && port2.yLoc < patrick.yLoc + patrick.height && portalOn2){
        Dimension=1
        portalOn2=false
        isLeaveOn2=false
        TrapDoorOpen3=true
        rayGunAppear=true
        sponge.xLoc=430
        sponge.yLoc=200
        patrick.xLoc=430
        patrick.yLoc=200
    }
}
function drawGun(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(rayGunAppear===true){
        ctx.drawImage(rayGun,rayGun.xLoc,rayGun.yLoc,rayGun.width,rayGun.height)
    }
    if(rayGun.xLoc + rayGun.width > sponge.xLoc && rayGun.xLoc < sponge.xLoc + sponge.width && rayGun.yLoc+ rayGun.height > sponge.yLoc && rayGun.yLoc < sponge.yLoc + sponge.height  && rayGunAppear===true|| rayGun.xLoc + rayGun.width > patrick.xLoc && rayGun.xLoc < patrick.xLoc + patrick.width && rayGun.yLoc+ rayGun.height > patrick.yLoc && rayGun.yLoc < patrick.yLoc + patrick.height && rayGunAppear===true){
        rayGunAppear=false
        haveRayGun=true
    }
}
function rayGunDraw(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(haveRayGun===true && gunOnLeft===true){
        rayGunholdL.xLoc=sponge.xLoc-15
        rayGunholdL.yLoc=sponge.yLoc-2
        ctx.drawImage(rayGunholdL,rayGunholdL.xLoc,rayGunholdL.yLoc,rayGunholdL.width,rayGunholdL.height)
    }
    if(haveRayGun===true && gunOnRight===true){
        rayGunholdR.xLoc=sponge.xLoc+20
        rayGunholdR.yLoc=sponge.yLoc-2
        ctx.drawImage(rayGunholdR,rayGunholdR.xLoc,rayGunholdR.yLoc,rayGunholdR.width,rayGunholdR.height)
    }
}
function shootLaser(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(shoot) {
        if (canShoot) {
            if (haveRayGun === true && gunOnRight === true) {
                lasers.push(createImage(laserR.src, rayGunholdR.xLoc, rayGunholdR.yLoc, 10, 6))
                laserLeft.push(false)
                laserRight.push(true)
            }
            if (haveRayGun === true && gunOnLeft === true) {
                lasers.push(createImage(laserL.src, rayGunholdL.xLoc, rayGunholdL.yLoc, 10, 6))
                laserLeft.push(true)
                laserRight.push(false)
            }
            canShoot = false
        }
        shoot=false
    }
    for (i=0;i<lasers.length;i++){
        ctx.drawImage(lasers[i],lasers[i].xLoc,lasers[i].yLoc,lasers[i].width,lasers[i].height)
    }
}
function moveLaser(){
    for (i = 0; i < lasers.length; i++) {
        if (laserRight[i] === true) {
            lasers[i].xLoc += 1
        }
        if (laserLeft[i] === true) {
            lasers[i].xLoc -= 1
        }
        if (lasers[i].xLoc < -10) {
            lasers.splice(i, 1)
            laserLeft.splice(i, 1)
            laserRight.splice(i, 1)
        }
        if (lasers[i].xLoc > 500) {
            lasers.splice(i, 1)
            laserLeft.splice(i, 1)
            laserRight.splice(i, 1)
        }
        for (j = 0; j < squidArray.length; j++) {
            if (squidArray[j].xLoc + squidArray[j].width > lasers[i].xLoc && squidArray[j].xLoc < lasers[i].xLoc + lasers[i].width && squidArray[j].yLoc + squidArray[j].height > lasers[i].yLoc && squidArray[j].yLoc < lasers[i].yLoc + lasers[i].height) {
                squidArray.splice(j, 1)
                moveRight.splice(i, 1)
                moveLeft.splice(i, 1)
                isSquidTouching.splice(i, 1)
                lasers.splice(i, 1)
                laserLeft.splice(i, 1)
                laserRight.splice(i, 1)
                score += 1
            }
        }
        for (j = 0; j < bombArray.length; j++) {
            if (bombArray[j].xLoc + bombArray[j].width > lasers[i].xLoc && bombArray[j].xLoc < lasers[i].xLoc + lasers[i].width && bombArray[j].yLoc + bombArray[j].height > lasers[i].yLoc && bombArray[j].yLoc < lasers[i].yLoc + lasers[i].height) {
                bombArray.splice(j, 1)
                moveRight3.splice(i, 1)
                moveLeft3.splice(i, 1)
                isBombTouching.splice(i, 1)
                lasers.splice(i, 1)
                laserLeft.splice(i, 1)
                laserRight.splice(i, 1)
                score += 1
            }
        }
        for (j = 0; j < mysteryBoxArray.length; j++) {
            if (mysteryBoxArray[j].xLoc + mysteryBoxArray[j].width > lasers[i].xLoc && mysteryBoxArray[j].xLoc < lasers[i].xLoc + lasers[i].width && mysteryBoxArray[j].yLoc + mysteryBoxArray[j].height > lasers[i].yLoc && mysteryBoxArray[j].yLoc < lasers[i].yLoc + lasers[i].height) {
                mysteryBoxArray.splice(j, 1)
                moveRight2.splice(i, 1)
                moveLeft2.splice(i, 1)
                isBoxTouching.splice(i, 1)
                lasers.splice(i, 1)
                laserLeft.splice(i, 1)
                laserRight.splice(i, 1)
                score += 1
            }
        }

        if (krabs.xLoc + krabs.width > lasers[i].xLoc && krabs.xLoc < lasers[i].xLoc + lasers[i].width && krabs.yLoc + krabs.height > lasers[i].yLoc && krabs.yLoc < lasers[i].yLoc + lasers[i].height) {
            GameDone=true
            lives=0
        }
    }
}
function reload(){
    if (reloadTime>0){
        reloadTime-=1
    }else{
        canShoot=true
        reloadTime=500
    }
}
function collide(){

    isTouchingBridge=false
    isTouchingLadder=false
    PisTouchingBridge=false
    PisTouchingLadder=false
    for (i=0;i<isSquidTouching.length;i++){
        isSquidTouching[i]=false
    }
    for (i=0;i<isBoxTouching.length;i++){
        isBoxTouching[i]=false
    }
    for (i=0;i<isBombTouching.length;i++){
        isBombTouching[i]=false
    }
    for (i=0;i<bridgeArray.length;i++){
        if(bridgeArray[i].xLoc + bridgeArray[i].width > sponge.xLoc && bridgeArray[i].xLoc < sponge.xLoc + sponge.width &&bridgeArray[i].yLoc+ bridgeArray[i].height > sponge.yLoc && bridgeArray[i].yLoc < sponge.yLoc + sponge.height){
            isTouchingBridge=true
            if (!canJump){
                canJump=true
            }
        }
    }
    for (i=0;i<bridgeArray.length;i++){
        if(bridgeArray[i].xLoc + bridgeArray[i].width > patrick.xLoc && bridgeArray[i].xLoc < patrick.xLoc + patrick.width &&bridgeArray[i].yLoc+ bridgeArray[i].height > patrick.yLoc && bridgeArray[i].yLoc < patrick.yLoc + patrick.height){
            PisTouchingBridge=true
            if (!PcanJump){
                PcanJump=true
            }
        }
    }
    for (i=0;i<ladderArray.length;i++){
        if(ladderArray[i].xLoc + ladderArray[i].width > sponge.xLoc && ladderArray[i].xLoc < sponge.xLoc + sponge.width && ladderArray[i].yLoc+ ladderArray[i].height > sponge.yLoc && ladderArray[i].yLoc < sponge.yLoc + sponge.height){
            isTouchingLadder=true
        }
    }
    for (i=0;i<ladderArray.length;i++){
        if(ladderArray[i].xLoc + ladderArray[i].width > patrick.xLoc && ladderArray[i].xLoc < patrick.xLoc + patrick.width && ladderArray[i].yLoc+ ladderArray[i].height > patrick.yLoc && ladderArray[i].yLoc < patrick.yLoc + patrick.height){
            PisTouchingLadder=true
        }
    }
    for (i=0;i<bridgeArray.length;i++){
        for (j=0;j<squidArray.length;j++){
            if (bridgeArray[i].xLoc + bridgeArray[i].width > squidArray[j].xLoc && bridgeArray[i].xLoc < squidArray[j].xLoc + squidArray[j].width && bridgeArray[i].yLoc + bridgeArray[i].height > squidArray[j].yLoc && bridgeArray[i].yLoc < squidArray[j].yLoc + squidArray[j].height) {
                isSquidTouching[j] = true
            }
        }
    }
    for (i=0;i<bridgeArray.length;i++){
        for (j=0;j<mysteryBoxArray.length;j++){
            if (bridgeArray[i].xLoc + bridgeArray[i].width > mysteryBoxArray[j].xLoc && bridgeArray[i].xLoc < mysteryBoxArray[j].xLoc + mysteryBoxArray[j].width && bridgeArray[i].yLoc + bridgeArray[i].height > mysteryBoxArray[j].yLoc && bridgeArray[i].yLoc < mysteryBoxArray[j].yLoc + mysteryBoxArray[j].height) {
                isBoxTouching[j] = true
            }
        }
    }
    for (i=0;i<bridgeArray.length;i++){
        for (j=0;j<bombArray.length;j++){
            if (bridgeArray[i].xLoc + bridgeArray[i].width > bombArray[j].xLoc && bridgeArray[i].xLoc < bombArray[j].xLoc + bombArray[j].width && bridgeArray[i].yLoc + bridgeArray[i].height > bombArray[j].yLoc && bridgeArray[i].yLoc < bombArray[j].yLoc + bombArray[j].height) {
                isBombTouching[j] = true
            }
        }
    }
    for (i=0;i<squidArray.length;i++){
        if(squidArray[i].xLoc + squidArray[i].width > sponge.xLoc && squidArray[i].xLoc < sponge.xLoc + sponge.width && squidArray[i].yLoc+ squidArray[i].height > sponge.yLoc && squidArray[i].yLoc < sponge.yLoc + sponge.height || squidArray[i].xLoc + squidArray[i].width > patrick.xLoc && squidArray[i].xLoc < patrick.xLoc + patrick.width && squidArray[i].yLoc+ squidArray[i].height > patrick.yLoc && squidArray[i].yLoc < patrick.yLoc + patrick.height){
            lives-=1
            burgerLives.splice(burgerLives.length-1,1)
            squidArray.splice(i,1)
            moveRight.splice(i,1)
            moveLeft.splice(i,1)
            isSquidTouching.splice(i,1)
        }
    }
    for (i=0;i<mysteryBoxArray.length;i++){
        if(mysteryBoxArray[i].xLoc + mysteryBoxArray[i].width > sponge.xLoc && mysteryBoxArray[i].xLoc < sponge.xLoc + sponge.width && mysteryBoxArray[i].yLoc+ mysteryBoxArray[i].height > sponge.yLoc && mysteryBoxArray[i].yLoc < sponge.yLoc + sponge.height || mysteryBoxArray[i].xLoc + mysteryBoxArray[i].width > patrick.xLoc && mysteryBoxArray[i].xLoc < patrick.xLoc + patrick.width && mysteryBoxArray[i].yLoc+ mysteryBoxArray[i].height > patrick.yLoc && mysteryBoxArray[i].yLoc < patrick.yLoc + patrick.height){
            random2=Math.floor(Math.random()*5)
            if (random2===0){
                score-=10
                if(score<0){
                    score=0
                }
            }else if(random2===1){
                score+=10
            }else if(random2===2){
                speed+=.25
                bombSpeed+=.1
            }else if(random2===3){
                speed-=.2
                if(speed<.5){
                    speed=.5
                }
                bombSpeed-=.1
                if(bombSpeed<.4){
                    bombSpeed=.4
                }
            }else if(random2===4){
                speedUpTime=1000
            }
            mysteryBoxArray.splice(i,1)
            moveRight2.splice(i,1)
            moveLeft2.splice(i,1)
            isBoxTouching.splice(i,1)
        }
    }
    for (i=0;i<bombArray.length;i++){
        if(bombArray[i].xLoc + bombArray[i].width > sponge.xLoc && bombArray[i].xLoc < sponge.xLoc + sponge.width && bombArray[i].yLoc+ bombArray[i].height > sponge.yLoc && bombArray[i].yLoc < sponge.yLoc + sponge.height || bombArray[i].xLoc + bombArray[i].width > patrick.xLoc && bombArray[i].xLoc < patrick.xLoc + patrick.width && bombArray[i].yLoc+ bombArray[i].height > patrick.yLoc && bombArray[i].yLoc < patrick.yLoc + patrick.height){
            lives-=2
            if(lives<0){
                lives=0
            }
            if(lives>2){
                burgerLives.splice(burgerLives.length-2,2)
            }
            if(lives<2){
                burgerLives.splice(burgerLives.length-1,1)
            }
            bombArray.splice(i,1)
            moveRight3.splice(i,1)
            moveLeft3.splice(i,1)
            isBombTouching.splice(i,1)
        }
    }
    if(Dimension===1){
        for(i=0;i<burgers.length;i++){
            if(burgers[i].xLoc + burgers[i].width > sponge.xLoc && burgers[i].xLoc < sponge.xLoc + sponge.width && burgers[i].yLoc+ burgers[i].height > sponge.yLoc && burgers[i].yLoc < sponge.yLoc + sponge.height || burgers[i].xLoc + burgers[i].width > patrick.xLoc && burgers[i].xLoc < patrick.xLoc + patrick.width && burgers[i].yLoc+ burgers[i].height > patrick.yLoc && burgers[i].yLoc < patrick.yLoc + patrick.height){
                if(lives<5){
                    burgers.splice(i,1)
                    if(lives===1){
                        burgerLives.push(createImage(life.src,30,0,40,40))
                    }else if (lives===2){
                        burgerLives.push(createImage(life.src,60,0,40,40))
                    }else if (lives===3){
                        burgerLives.push(createImage(life.src,90,0,40,40))
                    }else if(lives===4){
                        burgerLives.push(createImage(life.src,120,0,40,40))
                    }
                    lives+=1
                }else{
                    score+=30
                    burgers.splice(i,1)
                }
            }
        }
        ButtonPressed=false
        if(UnpressButton.xLoc + UnpressButton.width > sponge.xLoc && UnpressButton.xLoc < sponge.xLoc + sponge.width && UnpressButton.yLoc+ UnpressButton.height > sponge.yLoc && UnpressButton.yLoc < sponge.yLoc + sponge.height || pressButton.xLoc + pressButton.width > sponge.xLoc && pressButton.xLoc < sponge.xLoc + sponge.width && pressButton.yLoc+ pressButton.height > sponge.yLoc && pressButton.yLoc < sponge.yLoc + sponge.height || UnpressButton.xLoc + UnpressButton.width > patrick.xLoc && UnpressButton.xLoc < patrick.xLoc + patrick.width && UnpressButton.yLoc+ UnpressButton.height > patrick.yLoc && UnpressButton.yLoc < patrick.yLoc + patrick.height || pressButton.xLoc + pressButton.width > patrick.xLoc && pressButton.xLoc < patrick.xLoc + patrick.width && pressButton.yLoc+ pressButton.height > patrick.yLoc && pressButton.yLoc < patrick.yLoc + patrick.height){
            ButtonPressed=true
        }
        ButtonPressed2=false
        if(UnpressButton2.xLoc + UnpressButton2.width > sponge.xLoc && UnpressButton2.xLoc < sponge.xLoc + sponge.width && UnpressButton2.yLoc+ UnpressButton2.height > sponge.yLoc && UnpressButton2.yLoc < sponge.yLoc + sponge.height || pressButton2.xLoc + pressButton2.width > sponge.xLoc && pressButton2.xLoc < sponge.xLoc + sponge.width && pressButton2.yLoc+ pressButton2.height > sponge.yLoc && pressButton2.yLoc < sponge.yLoc + sponge.height || UnpressButton2.xLoc + UnpressButton2.width > patrick.xLoc && UnpressButton2.xLoc < patrick.xLoc + patrick.width && UnpressButton2.yLoc+ UnpressButton2.height > patrick.yLoc && UnpressButton2.yLoc < patrick.yLoc + patrick.height || pressButton2.xLoc + pressButton2.width > patrick.xLoc && pressButton2.xLoc < patrick.xLoc + patrick.width && pressButton2.yLoc+ pressButton2.height > patrick.yLoc && pressButton2.yLoc < patrick.yLoc + patrick.height){
            ButtonPressed2=true
        }
        TrapDoorOpen=false
        if(ButtonPressed || ButtonPressed2){
            TrapDoorOpen=true
        }
        isTouchingTrap=false
        if(TrapDoorOpen2===true && openTrap2.xLoc + openTrap2.width > sponge.xLoc && openTrap2.xLoc < sponge.xLoc + sponge.width && openTrap2.yLoc+ openTrap2.height > sponge.yLoc && openTrap2.yLoc < sponge.yLoc + sponge.height ){
            isTouchingTrap=true
            if (!canJump){
                canJump=true
            }
        }
        PisTouchingTrap=false
        if(TrapDoorOpen2===true && openTrap2.xLoc + openTrap2.width > patrick.xLoc && openTrap2.xLoc < patrick.xLoc + patrick.width && openTrap2.yLoc+ openTrap2.height > patrick.yLoc && openTrap2.yLoc < patrick.yLoc + patrick.height ){
            PisTouchingTrap=true
            if (!PcanJump){
                PcanJump=true
            }
        }
        PisTouchingTrapB=false
        if(closeTrap.xLoc + closeTrap.width > patrick.xLoc && closeTrap.xLoc < patrick.xLoc + patrick.width && closeTrap.yLoc+ closeTrap.height > patrick.yLoc && closeTrap.yLoc < patrick.yLoc + patrick.height){
            PisTouchingTrapB=true
        }
        isTouchingTrapB=false
        if(closeTrap.xLoc + closeTrap.width > sponge.xLoc && closeTrap.xLoc < sponge.xLoc + sponge.width && closeTrap.yLoc+ closeTrap.height > sponge.yLoc && closeTrap.yLoc < sponge.yLoc + sponge.height){
            isTouchingTrapB=true
        }
        PisTouchingTrap2=false
        if(closeTrap3.xLoc + closeTrap3.width > patrick.xLoc && closeTrap3.xLoc < patrick.xLoc + patrick.width && closeTrap3.yLoc+ closeTrap3.height > patrick.yLoc && closeTrap3.yLoc < patrick.yLoc + patrick.height){
            PisTouchingTrap2=true
        }
        isTouchingTrap2=false
        if(closeTrap3.xLoc + closeTrap3.width > sponge.xLoc && closeTrap3.xLoc < sponge.xLoc + sponge.width && closeTrap3.yLoc+ closeTrap3.height > sponge.yLoc && closeTrap3.yLoc < sponge.yLoc + sponge.height){
            isTouchingTrap2=true
        }
    }
    if (speedUpTime>0){
        speedUpTime-=1
        playerSpeed=3
    }else{
        playerSpeed=2
    }


    if(isTouchingLadder && isTouchingBridge && !isTouchingTrapB && !isTouchingTrap2){
        sponge.yLoc-=.04
    }
    if(PisTouchingLadder && PisTouchingBridge && !PisTouchingTrapB  && !PisTouchingTrap2){
        patrick.yLoc-=.04
    }
    if(sponge.xLoc<0){
        sponge.xLoc=0
    }
    if(patrick.xLoc<0){
        patrick.xLoc=0
    }
    if(sponge.xLoc>480){
        sponge.xLoc=480
    }
    if(patrick.xLoc>480){
        patrick.xLoc=480
    }
}
function scoreText(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="20px arial";
    ctx.fillStyle="#002849";
    ctx.fillText("Score:"+score,400,25);
    if (score>50 && score<100){
        speed=2
        timerLength=750
    }else if(score>100 && score<200){
        speed=2.5
        timerLength=500
    }else if(score>200){
        bombSpeed+=1.25
    }
}
function fall(){
    if (!isTouchingLadder && !isTouchingBridge && !jumping && !isTouchingTrap && !isTouchingTrap2){
        sponge.yLoc+=.5
    }

    if (!PisTouchingLadder && !PisTouchingBridge && !Pjumping && !PisTouchingTrap && !isTouchingTrap2){
        patrick.yLoc+=.5
    }
    if(sponge.yLoc>500){
        sponge.yLoc=420
    }
    if(patrick.yLoc>500){
        patrick.yLoc=420
    }
}
var time=45
var Ptime=45
function jump(){
    if (jumping){
        canJump=false
        if(time>0){
            time=time-1
            sponge.yLoc-=.75
        }else{
            time=45
            jumping=false
        }
    }
    if (Pjumping){
        PcanJump=false
        if(Ptime>0){
            Ptime=Ptime-1
            patrick.yLoc-=.75
        }else{
            Ptime=45
            Pjumping=false
        }
    }
}

function GameOver(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="100px brush script MT";
    ctx.fillStyle="#ff0022";
    ctx.fillText("Game Over",70,200);
}
function highScoreText(){
    if (score>highScore){
        highScore=score
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="40px courier new";
    ctx.fillStyle="#002aff";
    ctx.fillText("High Score:"+highScore,100,450);
}
function WinScreen(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="100px brush script MT";
    ctx.fillStyle="#0b5901";
    ctx.fillText("You Win",100,200);

}
function PlayAgain(){
    bridgeArray = []
    ladderArray= []
    squidArray = []
    mysteryBoxArray= []
    bombArray = []
    moveLeft = []
    moveRight = []
    moveLeft2=[]
    moveRight2=[]
    moveLeft3=[]
    moveRight3=[]
    isSquidTouching=[]
    isBoxTouching=[]
    isBombTouching=[]
    burgerLives=[]
    burgers=[]
    lasers=[]
    laserLeft=[]
    laserRight=[]
    isTouchingBridge = false
    isTouchingLadder = false
    PisTouchingBridge = false
    PisTouchingLadder = false
    timer=1000
    timer2=Math.round(Math.random()*2000+2000)
    timer3=Math.round(Math.random()*3000+3000)
    random=0
    random2=0
    timerLength=1000
    goUp=false
    goDown=false
    PgoUp=false
    PgoDown=false
    lives=5
    jumping=false
    canJump=true
    Pjumping=false
    PcanJump=true
    score=0
    connect=true
    speed=1.5
    bombSpeed=.8
    playerSpeed=2
    speedUpTime=500
    TrapDoorOpen=false
    TrapDoorOpen2=false
    TrapDoorOpen3=false
    ButtonPressed=false
    ButtonPressed2=false
    ButtonPressed3=false
    portalOn=false
    portalOn2=false
    CrateTouchBridge=false
    CrateTouchX=false
    isLeaveOn=false
    isLeaveOn2=false
    isTouchingTrap=false
    isTouchingTrapB=false
    isTouchingTrap2=false
    PisTouchingTrapB=false
    PisTouchingTrap=false
    PisTouchingTrap2=false
    Dimension=1
    rayGunAppear=false
    gunOnRight=false
    gunOnLeft=false
    haveRayGun=false
    reloadTime=0
    canShoot=false
    shoot=false
    GameDone=false
    initialize()
}
function PlayAgainText(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="40px brush script MT";
    ctx.fillStyle="#011059";
    ctx.fillText("Click Enter To Play Again",50,350);
}
var a;
function animateLoop(){
    a = requestAnimationFrame(animateLoop)
    drawBackground()
    if (lives>0){
        createLives()
        drawBridges()
        drawLadders()
        createSponge()
        createMysteryBox()
        createBomb()
        createPatrick()
        createKrab()
        createSquid()
        moveSquid()
        moveBox()
        moveBomb()
        drawGun()
        rayGunDraw()
        reload()
        shootLaser()
        moveLaser()
        if(Dimension===1){
            drawLevers()
            crateDrop()
            drawX()
            createBurgers()
            createTrapDoors()
            createTrapDoors2()
            createTrapDoors3()
            createButtons()
            createButtons2()
            createCrate()
            drawMachine()
            portalJump()
        }
        if(Dimension===2){
            drawPort2()
            drawLevers2()
            portalJump2()
        }
        drawPortal()
        fall()
        jump()
        scoreText()
        collide()

    }else{
        if(GameDone){
            WinScreen()
            highScoreText()
            PlayAgainText()
        }else{
            GameOver()
            highScoreText()
            PlayAgainText()
        }
    }

}
var createImage = function(src, xLoc,yLoc,width,height,visible) {
    var img   = new Image();
    img.src   = src;
    img.xLoc = xLoc;
    img.yLoc = yLoc;
    img.width = width;
    img.height = height;
    img.visible = visible
    return img;
};
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //a key to go left
    if (keycode=== 67) {
        if (connect===false){
            connect=true
        }else if(connect===true){
            connect=false
        }
    }

    if(keycode == 65) {
        if(!isTouchingLadder && isTouchingBridge || isTouchingLadder && !isTouchingBridge || !isTouchingBridge && !isTouchingLadder){
            sponge.xLoc -= playerSpeed
        }
        gunOnLeft=true
        gunOnRight=false
        if (connect===true){
            if(!PisTouchingLadder && PisTouchingBridge || PisTouchingLadder && !PisTouchingBridge || !PisTouchingBridge && !PisTouchingLadder){
                patrick.xLoc-=playerSpeed
            }

        }
    }
    //d key to go right
    if(keycode == 68) {
        if(!isTouchingLadder && isTouchingBridge || isTouchingLadder && !isTouchingBridge || !isTouchingBridge && !isTouchingLadder){
            sponge.xLoc+=playerSpeed
        }
        gunOnRight=true
        gunOnLeft=false
        if(connect===true){
            if(!PisTouchingLadder && PisTouchingBridge || PisTouchingLadder && !PisTouchingBridge || !PisTouchingBridge && !PisTouchingLadder){
                patrick.xLoc+=playerSpeed
            }
        }
    }

    if(keycode == 37 && connect===false) {
        if(!PisTouchingLadder && PisTouchingBridge || PisTouchingLadder && !PisTouchingBridge || !PisTouchingBridge && !PisTouchingLadder){
            patrick.xLoc-=playerSpeed
        }
    }
    //d key to go right
    if(keycode == 39 && connect===false) {
        if(!PisTouchingLadder && PisTouchingBridge || PisTouchingLadder && !PisTouchingBridge || !PisTouchingBridge && !PisTouchingLadder){
            patrick.xLoc+=playerSpeed
        }
    }
    //w key to go up
    for (i=0;i<ladderArray.length;i++){
        if(keycode == 87) {
            if(isTouchingLadder){
                goUp=true
            }
        }
    }
    for (i=0;i<ladderArray.length;i++){
        if(keycode == 38) {
            if(PisTouchingLadder){
                PgoUp=true
            }
        }
    }
    if (keycode===32){
        if(!isTouchingLadder && !jumping && canJump){
            jumping=true
        }
    }
    if (keycode===32){
        if(!PisTouchingLadder && !Pjumping && PcanJump){
            Pjumping=true
        }
    }
    if (goUp===true){
        sponge.yLoc -= 2
        if(connect===true){
            patrick.yLoc-=2
            if(Dimension===1) {
                if (closeTrap.xLoc + closeTrap.width > patrick.xLoc && closeTrap.xLoc < patrick.xLoc + patrick.width && closeTrap.yLoc + closeTrap.height > patrick.yLoc && closeTrap.yLoc < patrick.yLoc + patrick.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > patrick.xLoc && closeTrap3.xLoc < patrick.xLoc + patrick.width && closeTrap3.yLoc + closeTrap3.height > patrick.yLoc && closeTrap3.yLoc < patrick.yLoc + patrick.height && !TrapDoorOpen3) {
                    patrick.yLoc += playerSpeed
                }
            }
        }
        if(Dimension===1) {
            if (closeTrap.xLoc + closeTrap.width > sponge.xLoc && closeTrap.xLoc < sponge.xLoc + sponge.width && closeTrap.yLoc + closeTrap.height > sponge.yLoc && closeTrap.yLoc < sponge.yLoc + sponge.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > sponge.xLoc && closeTrap3.xLoc < sponge.xLoc + sponge.width && closeTrap3.yLoc + closeTrap3.height > sponge.yLoc && closeTrap3.yLoc < sponge.yLoc + sponge.height && !TrapDoorOpen3) {
                sponge.yLoc += playerSpeed
            }
        }
        goUp=false
    }
    if (PgoUp===true){
        if (connect===false){
            patrick.yLoc -= playerSpeed
            if(Dimension===1) {
                if (closeTrap.xLoc + closeTrap.width > patrick.xLoc && closeTrap.xLoc < patrick.xLoc + patrick.width && closeTrap.yLoc + closeTrap.height > patrick.yLoc && closeTrap.yLoc < patrick.yLoc + patrick.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > patrick.xLoc && closeTrap3.xLoc < patrick.xLoc + patrick.width && closeTrap3.yLoc + closeTrap3.height > patrick.yLoc && closeTrap3.yLoc < patrick.yLoc + patrick.height && !TrapDoorOpen3) {
                    patrick.yLoc += playerSpeed
                }
            }
        }
        PgoUp=false
    }
    //s key to go down
    for (i=0;i<ladderArray.length;i++){
        if(keycode == 40 && ladderArray[i].xLoc + ladderArray[i].width > patrick.xLoc && ladderArray[i].xLoc < patrick.xLoc + patrick.width &&ladderArray[i].yLoc+ ladderArray[i].height > patrick.yLoc && ladderArray[i].yLoc < patrick.yLoc + patrick.height){
            PgoDown=true
        }
    }
    for (i=0;i<ladderArray.length;i++){
        if(keycode == 83 && ladderArray[i].xLoc + ladderArray[i].width > sponge.xLoc && ladderArray[i].xLoc < sponge.xLoc + sponge.width &&ladderArray[i].yLoc+ ladderArray[i].height > sponge.yLoc && ladderArray[i].yLoc < sponge.yLoc + sponge.height){
            goDown=true
        }
    }
    if (goDown===true){
        sponge.yLoc += playerSpeed
        if(Dimension===1) {
            if (closeTrap.xLoc + closeTrap.width > sponge.xLoc && closeTrap.xLoc < sponge.xLoc + sponge.width && closeTrap.yLoc + closeTrap.height > sponge.yLoc && closeTrap.yLoc < sponge.yLoc + sponge.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > sponge.xLoc && closeTrap3.xLoc < sponge.xLoc + sponge.width && closeTrap3.yLoc + closeTrap3.height > sponge.yLoc && closeTrap3.yLoc < sponge.yLoc + sponge.height && !TrapDoorOpen3) {
                sponge.yLoc -= playerSpeed
            }
        }
        if(connect===true){
            patrick.yLoc+=playerSpeed
            if(Dimension===1) {
                if (closeTrap.xLoc + closeTrap.width > patrick.xLoc && closeTrap.xLoc < patrick.xLoc + patrick.width && closeTrap.yLoc + closeTrap.height > patrick.yLoc && closeTrap.yLoc < patrick.yLoc + patrick.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > patrick.xLoc && closeTrap3.xLoc < patrick.xLoc + patrick.width && closeTrap3.yLoc + closeTrap3.height > patrick.yLoc && closeTrap3.yLoc < patrick.yLoc + patrick.height && !TrapDoorOpen3) {
                    patrick.yLoc -= playerSpeed
                }
            }
        }
        goDown=false
    }
    if (PgoDown===true){
        if(connect===false){
            patrick.yLoc += playerSpeed
            if(Dimension===1) {
                if (closeTrap.xLoc + closeTrap.width > patrick.xLoc && closeTrap.xLoc < patrick.xLoc + patrick.width && closeTrap.yLoc + closeTrap.height > patrick.yLoc && closeTrap.yLoc < patrick.yLoc + patrick.height && TrapDoorOpen === false || closeTrap3.xLoc + closeTrap3.width > patrick.xLoc && closeTrap3.xLoc < patrick.xLoc + patrick.width && closeTrap3.yLoc + closeTrap3.height > patrick.yLoc && closeTrap3.yLoc < patrick.yLoc + patrick.height && !TrapDoorOpen3) {
                    patrick.yLoc -= playerSpeed
                }
            }
        }
        PgoDown=false
    }
    if(haveRayGun && keycode===82){
        shoot=true
    }
    if(keycode===13 && lives<1){
        PlayAgain()
    }
});
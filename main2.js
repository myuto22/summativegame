window.onload = function() {
  startGravity();
  checkGround();
  resetKeyCool();
  deathCheck();
  startBlockAction();
  catVibes();
  winCheck();
}

document.addEventListener('keydown', keydownEvent, false);

function keydownEvent(event) {
  if (event.key === "w") {
    moveTop();
  } else if (event.key === "d") {
    if (keyCoolDown) {
      moveRight();
    }
  } else if (event.key === "a") {
    if (keyCoolDown) {
      moveLeft();
    }
  }
}

var yLine = 600;
var xLine = 1300;
var onLand = true;
var keyCoolDown = true;
var deadCount = 0;
var deadCheck = false;
var timerId1, timerId2, timerId3;
var yLineCat = 400;
var xLineCat = 1000;
var catStage = 1;
var deadCount = 0;

function moveTop() {
  if (false){
    
  } else if (onLand) {
    clearInterval(timerId1);
    yLine = yLine - 100;
    document.getElementById('wolf').style.top = yLine + 'px';
    document.getElementById('wolf2').style.top = yLine + 'px';
    setTimeout(() => {
      yLine = yLine - 100;
      document.getElementById('wolf').style.top = yLine + 'px';
      document.getElementById('wolf2').style.top = yLine + 'px';
      setTimeout(() => {
        yLine = yLine - 100;
        document.getElementById('wolf').style.top = yLine + 'px';
        document.getElementById('wolf2').style.top = yLine + 'px';
        startGravity();
      }, 70);
    }, 70);
  }
}

function moveRight() {
  if (xLine < 1300) {
    document.getElementById('wolf').style.transform = 'scale(1, 1)';
    document.getElementById('wolf2').style.transform = 'scale(1,1)';
    if (xLine == 700 && yLine == 500 || xLine == 700 && yLine == 600 || xLine == 700 && yLine == 700 || xLine == 400 && yLine == 500 || xLine == 400 && yLine == 600 || xLine == 400 && yLine == 700 || xLine == 1100 && yLine == 100) {
    } 
    else {
      keyCoolDown = false;
      xLine = xLine + 100;
      document.getElementById('wolf').style.left = xLine + 'px';
      document.getElementById('wolf2').style.left = xLine + 'px';
      resetKeyCool();
    }
  }
}

function moveLeft() {
  if (xLine > 0) {

    document.getElementById('wolf').style.transform = 'scale(-1, 1)';
    document.getElementById('wolf2').style.transform = 'scale(-1, 1)';
    if (xLine == 1300 && yLine == 600 || xLine == 1100 && yLine == 500 || xLine == 700 && yLine == 500 || xLine == 700 && yLine == 600 || xLine == 700 && yLine == 700 || xLine == 100 && yLine == 500) {
    } 
    else {
      keyCoolDown = false;
      xLine = xLine - 100;
      document.getElementById('wolf').style.left = xLine + 'px';
      document.getElementById('wolf2').style.left = xLine + 'px';
      resetKeyCool();
    }
  }
}

function startGravity() {
  timerId1 = setInterval(() => {
    if (!onLand) {
      yLine = yLine + 100;
      document.getElementById('wolf').style.top = yLine + 'px';
      document.getElementById('wolf2').style.top = yLine + 'px';
    }
  }, 200);
}

function checkGround() {
  timerId2 = setInterval(() => {
    if (yLine == 500 && xLine == 1200 || yLine == 500 && xLine == 1100 || yLine == 400 && xLine == 1000 || yLine == 400 && xLine == 900 || yLine == 400 && xLine == 800 || xLine == 600 && yLine == 400 || xLine == 500 && yLine == 400 || xLine == 800 && yLine == 200 || xLine == 700 && yLine == 200 || xLine == 900 && yLine == 100 || xLine == 1000 && yLine == 100 || xLine == 1100 && yLine == 100 || xLine == 1200 && yLine == 0 || xLine == 1300 && yLine == 0 || xLine == 1300 && yLine == 600 || xLine == 300 && yLine == 200 || xLine == 400 && yLine == 200 || xLine == 500 && yLine == 200 || xLine == 0 && yLine == 400) {
      onLand = true;
    } else {
      onLand = false;
    }
  }, 10);
}

function resetKeyCool() {
  setTimeout(()=>{
    keyCoolDown = true;
  },100)
}

function catVibes(){
  CatMove = setInterval(()=>{
    if(catStage == 1){
      catStage = 2;
      xLineCat = xLineCat + 100; 
      document.getElementById('cat').style.left = xLineCat + 'px';
      setTimeout(()=>{
        yLineCat = yLineCat +100;
        document.getElementById('cat').style.top = yLineCat + 38 + 'px';
      },200)
    } else if(catStage == 2){
      catStage = 3;
      document.getElementById('cat').style.transform = 'scale(-1, 1)';
      xLineCat = xLineCat + 100; 
      document.getElementById('cat').style.left = xLineCat + 'px';
    } else if(catStage == 3){
      catStage = 4;
      xLineCat = xLineCat - 100; 
      document.getElementById('cat').style.left = xLineCat + 'px';
    } else if(catStage == 4){
      catStage = 5;
      yLineCat = yLineCat -100;
      document.getElementById('cat').style.top = yLineCat + 38 + 'px';
      setTimeout(()=>{
        xLineCat = xLineCat - 100; 
        document.getElementById('cat').style.left = xLineCat + 'px';
      },200)
    } else if(catStage == 5){
      catStage = 6;
      document.getElementById('cat').style.transform = 'scale(1, 1)';
      xLineCat = xLineCat - 100; 
      document.getElementById('cat').style.left = xLineCat + 'px';
    } else if(catStage == 6){
      catStage = 1;
      xLineCat = xLineCat + 100; 
      document.getElementById('cat').style.left = xLineCat + 'px';
    }
  }, 1000)
}
var timerId3;
var timerId4;
var deadCount = 0;
var deadCheck = false;
var xLine = 1300;
var yLine = 600;
var xLineCat;
var yLineCat;

function deathCheck() {
  timerId3 = setInterval(() => {
    if (!deadCheck) {
    if (xLineCat === xLine && yLineCat === yLine || xLineCat - 100 === xLine && yLineCat === yLine) {
      deadCheck = true;
      document.getElementById('wolf').style.opacity='0';
      document.getElementById('wolf2').style.left = xLine + 'px';
      document.getElementById('wolf2').style.top = yLine + 'px';
      setTimeout(()=>{
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      },100)
      } else if (xLine === 1300 && yLine == 0 || xLine === 1200 && yLine == 0 ){
        deadCheck = true;
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.left = xLine + 'px';
        document.getElementById('wolf2').style.top = yLine + 'px';
        document.getElementById('img1').style.top ='30px'
        setTimeout(()=>{
          document.getElementById('wolf2').style.opacity='1';
          setTimeout(() => {
            document.getElementById('over').style.opacity='1';
            document.getElementById('div1').style.opacity='1';
            setTimeout(()=>{
              reset();
            },2000)
          }, 500);
        },100)
      } else if (xLine === 0 && yLine == 700){
        deadCheck = true;
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.left = xLine + 'px';
        document.getElementById('wolf2').style.top = yLine + 'px';
        setTimeout(()=>{
          document.getElementById('wolf2').style.opacity='1';
          setTimeout(() => {
            document.getElementById('over').style.opacity='1';
            document.getElementById('div1').style.opacity='1';
            setTimeout(()=>{
              reset();
            },2000)
          }, 500);
        },100)
      } else if (xLine === 400 && yLine == 700){
        deadCheck = true;
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.left = xLine + 'px';
        document.getElementById('wolf2').style.top = yLine + 'px';
        setTimeout(()=>{
          document.getElementById('wolf2').style.opacity='1';
          setTimeout(() => {
            document.getElementById('over').style.opacity='1';
            document.getElementById('div1').style.opacity='1';
            setTimeout(()=>{
              reset();
            },2000)
          }, 500);
        },100)
      } else if (xLine === 700 && yLine == 800){
        deadCheck = true;
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
      } else if (xLine == 1000 && yLine == 100 || xLine == 1100 && yLine == 100) {
        deadCheck = true;
        document.getElementById('img8').style.top = '130px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (xLine == 0 && yLine == 400) {
        deadCheck = true;
        document.getElementById('img9').style.top = '430px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (xLine == 400 && yLine == 200 || xLine == 300 && yLine == 200) {
        deadCheck = true;
        document.getElementById('img10').style.top = '230px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      }
    }
  }, 50);
}

function startBlockAction() {
  timerId4 = setInterval(() => {
  }, 10);
}

function reset() {
  yLine = 600;
  xLine = 1300;
  deadCount = deadCount + 1;
  deadCheck = false;
  document.getElementById('p1').innerHTML='You dead ' + deadCount + ' times';
  document.getElementById('img1').style.top='100px';
  document.getElementById('img8').style.top='198px';
  document.getElementById('img9').style.top='500px';
  document.getElementById('img10').style.top='298px';
  document.getElementById('wolf').style.top = yLine + 'px';
  document.getElementById('wolf2').style.top = yLine + 'px';
  document.getElementById('wolf').style.left = xLine + 'px';
  document.getElementById('wolf2').style.top = yLine + 'px';
  document.getElementById('over').style.opacity = '0';
  document.getElementById('div1').style.opacity = '0';
  document.getElementById('wolf').style.opacity = '1';
  document.getElementById('wolf2').style.opacity = '0';
  document.getElementById('wolf').style.transform = 'scale(-1, 1)';
}

winCheck = setInterval(() => {
  if (xLine === 100 && yLine === 800 || xLine === 200 && yLine === 800 || xLine === 300 && yLine === 800){
    document.getElementById('win').style.opacity = 1;
  }
}, 100)
window.onload = function() {
  setTimeout(()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
    document.getElementById('black').style.opacity='0';
  },500)
  startGravity();
  checkGround();
  resetKeyCool();
  deathCheck();
  startBlockAction();
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
var xLine = 0;
var onLand = true;
var keyCoolDown = true;
var deadCount = 0;
var deadCheck = false;
var var1 = true;
var timerId1, timerId2, timerId3;

function moveTop() {
  if (xLine == 1100 && yLine == 600){
    document.getElementById('block21').style.opacity ='1';
    document.getElementById('block22').style.opacity ='1';
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
    document.getElementById('wolf2').style.transform = 'scale(1, 1)';
    if (xLine == 100 && yLine == 600 || xLine == 500 && yLine == 500 || xLine == 800 && yLine == 500 || xLine == 800 && yLine == 600 || xLine == 800 && yLine == 700 || xLine == 1100 && yLine == 600 || xLine == 1100 && yLine == 500 || xLine == 1100 && yLine == 400) {
    } else {
      keyCoolDown = false;
      xLine = xLine + 100;
      document.getElementById('wolf').style.left = xLine + 'px';
      document.getElementById('wolf2').style.left = xLine + 'px';
      resetKeyCool();
    }
  }
}

function moveLeft() {
  if (xLine > -100) {
    document.getElementById('wolf').style.transform = 'scale(-1, 1)';
    document.getElementById('wolf2').style.transform = 'scale(-1, 1)';
    if (xLine == 500 && yLine == 600 || xLine == 500 && yLine == 700 || xLine == 800 && yLine == 500 || xLine == 1100 && yLine == 600 || xLine == 1100 && yLine == 500) {
    } else {
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
    if (xLine == 300 && yLine == 500 || xLine == 200 && yLine == 500 || yLine == 600 && xLine <= 400|| xLine == 400 && yLine == 500 || xLine == 600 && yLine == 400 || xLine == 700 && yLine == 400 || xLine == 900 && yLine == 400 || xLine == 1000 && yLine == 400 || xLine == 1100 && yLine == 600 || xLine == 1200 && yLine == 300 || xLine == 1300 && yLine == 300) {
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

function deathCheck() {
  timerId3 = setInterval(() => {
    if(deadCheck == false){
      if (xLine == 100 && yLine == 600) {
        deadCheck = true;
        document.getElementById('img1').style.top = '630px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (yLine == 800) {
        deadCheck = true;
        document.getElementById('over').style.opacity='1';
        document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
      } else if (xLine == 100 && yLine == 100) {
        deadCheck = true;
        document.getElementById('img2').style.left = '230px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (xLine == 200 && yLine == 200 || xLine == 300 && yLine == 200) {
        deadCheck = true;
        document.getElementById('img3').style.top = '180px';
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
        document.getElementById('img4').style.top = '180px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (xLine == 500 && yLine == 100) {
        deadCheck = true;
        document.getElementById('img5').style.left = '480px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else if (xLine == 1200 && yLine == 300 || xLine == 1300 && yLine == 300) {
        deadCheck = true;
        document.getElementById('img6').style.top = '330px';
        document.getElementById('wolf').style.opacity='0';
        document.getElementById('wolf2').style.opacity='1';
        setTimeout(() => {
          document.getElementById('over').style.opacity='1';
          document.getElementById('div1').style.opacity='1';
          setTimeout(()=>{
            reset();
          },2000)
        }, 500);
      } else {
      }  
    } else{}
  }, 50);
}

var timerId4;

function startBlockAction() {
  timerId4 = setInterval(() => {
    if (xLine == 800 && yLine == 400) {
      document.getElementById('block11').style.top = '800px';
    } else if (xLine == -100 && yLine == 600){
      const loader = document.querySelector(".loader");
      loader.classList.add("loaded2");
      document.getElementById('black').style.opacity='1';
      location.href='index2.html';
    } else if (xLine == 1100 && yLine == 600){
      if(deadCheck == false){
        deadCheck = true;
        setTimeout(()=>{
          document.getElementById('wolf').style.opacity='0';
          document.getElementById('grave').style.opacity='1';
          setTimeout(()=>{
            document.getElementById('over').style.opacity='1';
            document.getElementById('div1').style.opacity='1';
            setTimeout(()=>{
              reset();
            },2000)
          },2000)
        },2000)
      } else{}
    }
  }, 10);
}


function reset(){
  yLine = 600;
  xLine = 0;
  deadCount = deadCount + 1;
  deadCheck = false;
  document.getElementById('p1').innerHTML='You dead ' + deadCount + ' times';
  document.getElementById('wolf').style.top = yLine + 'px';
  document.getElementById('wolf2').style.top = yLine + 'px';
  document.getElementById('wolf').style.left=xLine + 'px';
  document.getElementById('wolf2').style.left=xLine + 'px';
  document.getElementById('over').style.opacity ='0';
  document.getElementById('div1').style.opacity ='0';
  document.getElementById('img1').style.top='700px';
  document.getElementById('img2').style.left='300px';
  document.getElementById('img3').style.top='100px';
  document.getElementById('img4').style.top='100px';
  document.getElementById('img5').style.left='400px';
  document.getElementById('img6').style.top='500px';
  document.getElementById('block11').style.top='500px';
  document.getElementById('block21').style.opacity ='0';
  document.getElementById('block22').style.opacity ='0';
  document.getElementById('wolf').style.opacity ='1';
  document.getElementById('wolf2').style.opacity ='0';
  document.getElementById('grave').style.opacity='0';
  document.getElementById('wolf').style.transform = 'scale(1, 1)';
  document.getElementById('wolf2').style.transform = 'scale(1, 1)';
}
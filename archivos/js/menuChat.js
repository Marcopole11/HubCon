var aviso = 0;
var wordi = 0;
var words;
var wordn;
var theMsg;
var start = 0;
var mode = 0;
var startClock;
var chatClock;
var delay = 20;
var body;

function newMsg(){
  theMsg = document.createElement("MSG");
  theMsg.innerHTML = '<u txt="'+
    cMJ.nicks[parseInt(Math.random()*cMJ.nicks.length)]
    +':"></u>';
  let num;
  switch(parseInt(Math.random()*35)){
    case 3: //enviar virus
      mode = 3;
      num  = parseInt(Math.random()*cMJ.virusMsg.length);
      words = cMJ.virusMsg[num].split(" ");
      wordn = num+1;
      break;ia
    case 4: //enviar enlace trol
      mode = 4;
      num  = parseInt(Math.random()*cMJ.trollMsg.length);
      words = cMJ.trollMsg[num].txt.split(" ");
      wordn = num;
      break;
    default: //enviar shitpost
      mode = 1;
      words = cMJ.chatMsg[parseInt(Math.random()*cMJ.chatMsg.length)].split(" ");
      break;
  }
  addMsg(theMsg);
  delay = 40;
}
function commandMsg(){
  theMsg = document.createElement("MSG");
  theMsg.innerHTML = '<con></con>';
  if(aviso==4){
    words = cMJ.cuartInfo[parseInt(Math.random()*cMJ.cuartInfo.length)].split(" ");
  } else {
    words = cMJ.sectInfo[aviso].split(" ");
  }
  addMsg(theMsg);
  wordn = aviso-1;
  aviso = 0;
  delay = 500;
}

function systemStarted(){
  chatClock = setInterval(()=>{
    if (wordi < words.length){
      theMsg.innerHTML = theMsg.innerHTML + " " + words[wordi];
      wordi++;
    }else if (delay > 0 && aviso == 0){
        delay--;
    } else {
      wordi=0;
      switch(mode){
        case 1: break;
        case 2:
          if(wordn > -1){
            theMsg = document.createElement("MSG");
            theMsg.setAttribute("t","1");
            theMsg.innerHTML = '$ man '+ document.getElementById("apartad").
              querySelectorAll("li")[wordn].querySelectorAll("a").innerHTML;
          }
          addMsg(theMsg);
          break;
        case 3:
          theMsg.innerHTML = theMsg.innerHTML + " " + '<l t="'+wordn+'" onclick="gotVirus(this)"></l>';
          break;
        case 4:
          theMsg.innerHTML = theMsg.innerHTML + " " + '<l t="0" txt="'+cMJ.trollMsg[wordn].link+'" onclick="openTrol('+wordn+')"></l>';
          break;
      }
      if(aviso > 0){
        commandMsg();
      } else {
        newMsg();
      }
    }
  },40);
}

function gotVirus(that){
  document.body.dataset.virus=that.getAttribute("t");
}
function fixVirus(){
  if(document.body.dataset.virus != 0){
    if(Math.random() > 0.95){
      document.body.dataset.virus = 0;
    }
  }
}
function closeWindow(that, ev){
  if(ev.offsetY < 0 && ev.offsetX < 18){
    that.style.display = "none";
  }
}
function openTrol(wordn){
  let pic = "url("+cMJ.trollMsg[wordn].pic+")";
  let ventanas = document.getElementById("trololo").querySelectorAll(".trol");
  function trolRecursive(i){
    if(i < 11){
      ventanas[i].style.backgroundImage = pic;
      ventanas[i].style.display = "block";
      setTimeout(()=>{trolRecursive(i+1)},140);
    }
  }
  trolRecursive(0);
}

function addMsg(msg){
  document.getElementById("chatbox").appendChild(theMsg);
}

function cambiardinero(e){
  console.log(e);
  if(e.key=="Enter"){
  let dinerofin= 
  parseInt(document.getElementById("dinerobox").dataset.dinero)
  + document.getElementById("dinero").value;  
  document.getElementById("dinerobox").dataset.dinero=dinerofin;
  document.getElementById("dinero").value= 0;
  localStorage.setItem("dinero",dinerofin);
  console.log(dinerofin);
  }
}



function cargado(that){
  body = that;
  
  //dinerito rico//
  let tengodinero = 0;

  if(localStorage.getItem("dinero")==null){
    localStorage.setItem("dinero",0);
  } else  {
    tengodinero = localStorage.getItem("dinero");
  }
  document.getElementById("dinerobox").dataset.dinero=tengodinero;



  
  
  //chat//

  document.getElementById("apartad").querySelectorAll("a").forEach((li,i)=>{
    let num = i+1;
    li.addEventListener("mouseover",()=>{aviso=num;});
  });
  let ventanasTrol = "";
  for(i=1;i<12;i++){
    ventanasTrol+= '<div class="trol" onclick="closeWindow(this,event)" style="display:none; top: '
    +5*i+'%; left: '
    +5*i+'%;"></div>';
  }
  document.getElementById("trololo").innerHTML = ventanasTrol;

  theMsg = document.createElement("MSG");
  theMsg.setAttribute("t","1");
  addMsg(theMsg);
  words = cMJ.start[0].split(" ");
  startClock = setInterval(()=>{
    if (wordi < words.length){
      theMsg.innerHTML = theMsg.innerHTML + " " + words[wordi];
      wordi++;
    } else {
      wordi=0;
      start++;
      if(start < cMJ.start.length){
        theMsg = document.createElement("MSG");
        theMsg.setAttribute("t","1");
        addMsg(theMsg);
        words = cMJ.start[start].split(" ");
      } else {
        start = -1;
        mode = 2;
        aviso = 0;
        clearInterval(startClock);
        commandMsg();
        systemStarted();
      }
    }
  },50);
}


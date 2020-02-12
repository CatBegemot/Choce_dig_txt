var divLogo = document.createElement("div");
divLogo.id = "divLogo";
document.body.appendChild(divLogo);
  divLogo.style.position = "absolute";
  divLogo.style.zIndex = 1;
  divLogo.style.top = "0px";
  divLogo.style.left = "0px";
  divLogo.style.height = "160px";
  divLogo.style.width = "160px";
  divLogo.style.border = "1px";
  divLogo.style.background = "#f0f0f0";

var divHeader = document.createElement("div");
divHeader.id = "divHeader";
document.body.appendChild(divHeader);
  divHeader.style.position = "absolute";
  divHeader.style.zIndex = 1;
  divHeader.style.top = "0px";
  divHeader.style.left = "160px";
  divHeader.style.height = "160px";
  divHeader.style.width = "640px";
  divHeader.style.border = "1px";
  divHeader.style.background = "#f0f0f0";

var divMenu = document.createElement("div");
divMenu.id = "divMenu";
document.body.appendChild(divMenu);
  divMenu.style.position = "absolute";
  divMenu.style.zIndex = 1;
  divMenu.style.top = "160px";
  divMenu.style.left = "0px";
  divMenu.style.height = "480px";
  divMenu.style.width = "160px";
  divMenu.style.border = "1px";
  divMenu.style.background = "#f0f0f0";

var divMain = document.createElement("div");
divMain.id = "divMain";
document.body.appendChild(divMain);
  divMain.style.position = "absolute";
  divMain.style.zIndex = 1;
  divMain.style.top = "160px";
  divMain.style.left = "160px";
  divMain.style.height = "480px";
  divMain.style.width = "640px";
  divMain.style.border = "1px";
  divMain.style.background = "#ffffff";

  var imgChoice = document.createElement("img");
    divMain.appendChild(imgChoice);
    imgChoice.style.position = "relative";
    imgChoice.style.left = "10%";
    imgChoice.style.top = "10%";
    imgChoice.src = imgPath + "dig1.png";

    imgChoice.onclick = function() {changeSrc()};

  var textBegin = document.createElement("p");
    textBegin.id = "textBegin";
    divMain.appendChild(textBegin);
    textBegin.style.fontFamily = "Arial"; 
    textBegin.style.fontStyle = "Italic"; 
    textBegin.style.fontSize = "45px";
    textBegin.zIndex = 1;
    textBegin.style.position = "relative";
    textBegin.style.top = "-10%";
    textBegin.style.left = "20%";
    textBegin.style.color = "darkblue";
    textBegin.innerHTML = "Number";

    textBegin.onclick = function() {changeTxt()}; 

var divRight = document.createElement("div");
divRight.id = "divRight";
document.body.appendChild(divRight);
    divRight.style.position = "absolute";
    divRight.style.zIndex = 1;
    divRight.style.top = "0px";
    divRight.style.left = "800px";
    divRight.style.height = "800px";
    divRight.style.width = "160px";
    divRight.style.border = "1px";
    divRight.style.background = "#f0f0f0";  

var divFooter = document.createElement("div");
divFooter.id = "divFooter";
document.body.appendChild(divFooter);
  divFooter.style.position = "absolute";
  divFooter.style.zIndex = 1;
  divFooter.style.top = "640px";
  divFooter.style.left = "0px";
  divFooter.style.height = "160px";
  divFooter.style.width = "800px";
  divFooter.style.border = "1px";
  divFooter.style.background = "#f0f0f0";
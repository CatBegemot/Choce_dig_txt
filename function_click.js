function changeTxt() {
    if (textBegin.innerHTML.includes("Number")) {
      textBegin.innerHTML = "Digital";
  } else {
      textBegin.innerHTML = "Number";
  }
  }
  
function changeSrc() {
      if (imgChoice.src.includes(imgPath + "dig1.png")) {
       imgChoice.src = imgPath + "dig2.png";
    } else {
       imgChoice.src = imgPath + "dig1.png";
    }
    }
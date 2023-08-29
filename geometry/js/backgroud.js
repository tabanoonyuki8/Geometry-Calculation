// 1st card
//random colour funcyon
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// let randomBgC=document.getElementByCl("random-bg").addEventListener("mouseenter",function(){
//      const newColor=getRandomColor();
//      document.getElementById("random-bg").style.backgroundColor=newColor;

// })
function backgrouColour(element){
    let randomBgC=document.getElementById(element).addEventListener("mouseenter",function(){
        const newColor=getRandomColor();
        document.getElementById(element).style.backgroundColor=newColor;
   
   })
}


backgrouColour("random-bg");
backgrouColour("random-bg2");
backgrouColour("random-bg3");
backgrouColour("random-bg4");
backgrouColour("random-bg5");
backgrouColour("random-bg6");
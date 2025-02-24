///////////////////////////////////////////////////// loading area
/////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("loading complete");  

  /******************************************************
   ******************************************************/
 let top = document.querySelector("#top");
 let menu = document.querySelector(".menu");
 /******************************************************
  ******************************************************/

  // menu click //
  menu.onclick = ()=>{
    // console.log("click click click");
    top.classList.toggle("on");    
  }; // menu click //
  
  var img = new Image();
  img.src = '../img/back.jpg';
  img.src = '../img/front.jpg';
  img.src = '../img/night.png';
  img.src = '../img/invertEye.jpg';
  img.src = '../img/Sunflower.png';
  img.src = '../img/giveme1.jpg';
  img.src = '../img/giveme2.jpg';
  img.onload = function() {
    console.log("img load");
  };


});////////////////////////////////////////////////// loading area
//////////////////////////////////////////////////////////////////
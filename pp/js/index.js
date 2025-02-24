///////////////////////////////////////////////////// loading area
/////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("loading complete");  
  
    /******************************************************
     ******************************************************/
   let enter = document.querySelector(".go");
   /******************************************************
    ******************************************************/
    enter.onclick =
    ()=>{
      location.href = "html/main.html";
    }

    $(".go").hover(function(){
      $(".bg")
      .toggleClass('on')
      // .css
      // ("background", "url('../img/join2.png')");
    });

    var img = new Image();
    img.src = '../img/join1.png';
    img.src = '../img/join2.png';
    img.src = '../img/effect.png';
    img.onload = function() {
      console.log("img load");
    };

  });////////////////////////////////////////////////// loading area
  //////////////////////////////////////////////////////////////////
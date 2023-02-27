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

    $(".go").mouseover(function(){
      $(".bg")
      .toggleClass('on')
      // .css
      // ("background", "url('../img/join2.png')");
      console.log("a")
    });
    
    $(".go").mouseout(function(){
      $(".bg")
      .toggleClass('on')
      console.log("aa")
    });

  });////////////////////////////////////////////////// loading area
  //////////////////////////////////////////////////////////////////

var counter = document.getElementById("counter");
counter.style.display = "none";
var x = 0;

document.getElementById("login-cont").addEventListener("click", () => {
  x++;
  counter.innerHTML = x;
  if (x == 0) {
    document.getElementById("arrow-g").style.display = "none";
    document.getElementById("arrow").style.transform = "";
    document.getElementById("arrow").style.right = "";
  
} 

else if (x == 1) {
    document.getElementById("arrow-g").style.display = "flex";
    document.getElementById("arrow-g").style.flexDirection = "column";
    document.getElementById("arrow-g").style.justifyContent = "center";
    document.getElementById("arrow-g").style.alignItems = "center";
    document.getElementById("arrow").style.transform = "rotate(180deg)";
    document.getElementById("arrow").style.right = "9px";
  } 
  
  else if (x == 2) {
    document.getElementById("arrow-g").style.display = "none";
    document.getElementById("arrow").style.transform = "";
    document.getElementById("arrow").style.right = "";  
  } 
  
  else {
    document.getElementById("arrow-g").style.display = "flex";
    document.getElementById("arrow-g").style.flexDirection = "column";
    document.getElementById("arrow-g").style.justifyContent = "center";
    document.getElementById("arrow-g").style.alignItems = "center";
    x = 1;
    document.getElementById("arrow").style.transform = "rotate(180deg)";
    document.getElementById("arrow").style.right = "9px";
  }

});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    document.querySelector("header").style.height= "96vh";
    document.querySelector("nav").style.width= "100%";
    document.querySelector(".navbar").style.marginLeft= "155px";
    document.querySelector("nav").style.backgroundColor= "whitesmoke";
    document.querySelector("nav").style.position= "fixed";
    document.querySelector("nav").style.height= "8vh";
    document.querySelector("nav").style.transition= "all .50ms ease-in-out";
  } else {
    document.querySelector("header").style.height= "106vh";
    document.querySelector("nav").style.width= "";
    document.querySelector(".navbar").style.marginLeft= "";
    document.querySelector("nav").style.backgroundColor= "transparent";
    document.querySelector("nav").style.position= "relative";
    document.querySelector("nav").style.height= "";
  };

  if (window.pageYOffset > 600) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// scroll({
//   top: offsetTop,
//   behavior: "smooth"
// });
const toTop = document.querySelector(".to-top");



/* ------------------------ jquery to dynamic nav bar ----------------------- */

// $(document).scroll(function () {
//   if ($(window).scrollTop() > 60) {
//     $("nav").css("width", "100%");
//     $(".navbar").css("margin-left", "155px");
//     $("nav").css("background-color", "whitesmoke");
//     $("nav").css("position", "fixed");
//     $("nav").css("height", "8vh");
//     $("nav").css("transition", "all .50ms ease-in-out");
//   } else {
//     $("nav").css("width", "");
//     $(".navbar").css("margin-left", "");
//     $("nav").css("position", "relative");
//     $("nav").css("height", "");
//     $("nav").css("background-color", "transparent");
//   }
// });
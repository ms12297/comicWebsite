//to toggle sidebar
document.querySelector("body").classList.toggle("active");

var bars = document.querySelector(".bars");
  bars.addEventListener("click", function(){
   document.querySelector("body").classList.toggle("active");
  })

//aos scroll animations
window.addEventListener('load', function() { AOS.init(); });

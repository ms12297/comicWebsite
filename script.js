 //to toggle sidebar
document.querySelector("body").classList.toggle("active");

 var bars = document.querySelector(".bars");
   bars.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
   })

//aos scroll animations
window.addEventListener('load', function() { AOS.init(); });


// Sounds

// declare Sounds

var barkBarking = new Howl({
  src:['sounds/barkBarking.mp3']
});

var singleBark = new Howl({
  src:['sounds/singleBark.mp3']
});

var doorClosing = new Howl({
  src:['sounds/doorClosing.mp3']
});

var sadBark = new Howl({
  src:['sounds/sadBark.mp3']
});

var foodSound = new Howl({
  src:['sounds/foodSound.mp3']
});

var foodPour = new Howl({
  src:['sounds/foodPour.mp3']
});

var knocking = new Howl({
  src:['sounds/knocking.mp3']
});

var mailFalling = new Howl({
  src:['sounds/mailFalling.mp3']
});

var ballSound = new Howl({
  src:['sounds/ballSound.mp3']
});

//bark and ball noise on clicking the ball and ball animation on click

$(document).ready(function(){
  $(".pan1-front").click(function(){
    ballSound.play();
    $(".pan1-front").animate({left: "+=40%"}, "slow");
    });
  $(".pan1-front").click(function(){
    singleBark.play();
    $(".pan1-front").animate({left: "-=40%"}, "slow");
  });
});


//food animation and sound on click

$(document).ready(function(){
  $("#beef").click(function(){
    foodPour.play();
    $("#beef").animate({left: "+=2%"}, "fast");
    });
  $("#beef").click(function(){
    $("#beef").animate({left: "-=2%"}, "fast");
  });
});

$(document).ready(function(){
  $("#chicken").click(function(){
    foodPour.play();
    $("#chicken").animate({left: "+=2%"}, "fast");
    });
  $("#chicken").click(function(){
    $("#chicken").animate({left: "-=2%"}, "fast");
  });
});

$(document).ready(function(){
  $("#fish").click(function(){
    foodPour.play();
    $("#fish").animate({left: "+=2%"}, "fast");
    });
  $("#fish").click(function(){
    $("#fish").animate({left: "-=2%"}, "fast");
  });
});

// show full food bowl and happy bark on click and make them disappear after a set time

$("#beef").click(function(){
  $("#food").show();
  setTimeout(function () {
      $('#food').hide();
  }, 3000);
});

$("#fish").click(function(){
  $("#food").show();
  setTimeout(function () {
    $('#food').hide();
  }, 3000);
});

$("#chicken").click(function(){
  $("#food").show();
  setTimeout(function () {
    $('#food').hide();
  }, 3000);
});

$("#beef").click(function(){
  $("#playful-Bark").show();
  setTimeout(function () {
    $('#playful-Bark').hide();
  }, 3000);
});

$("#fish").click(function(){
  $("#playful-Bark").show();
  setTimeout(function () {
    $('#playful-Bark').hide();
  }, 3000);
});

$("#chicken").click(function(){
  $("#playful-Bark").show();
  setTimeout(function () {
    $('#playful-Bark').hide();
  }, 3000);
});


setTimeout(function() {
  $('#food').fadeOut('fast');
}, 500);



// sound effect on each panel controlled by scroll

var scrollRange = document.body.offsetHeight - window.innerHeight;


function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

var playing = false;
var playing2=false;
var playing3=false;
window.addEventListener('scroll', function(e){
  var y = window.scrollY;
  console.log(window.scrollY);
  console.log(window.innerHeight);
  console.log(document.body.offsetHeight);
  let percent = getScrollPercent();
  if (playing==false && (percent>=0.285)){
    doorClosing.play();
     var timeoutHandle = setTimeout(function(){
        sadBark.play();
      }, 2000);
    playing = true;
  }
  if (playing2==false && (percent>=0.571)){
    knocking.play();
     var timeoutHandle = setTimeout(function(){
        barkBarking.play();
      }, 2000);
    playing2 = true;
  }
  if (playing3==false && (percent>=0.71)){
    barkBarking.stop();
    doorClosing.stop();
    knocking.stop();
    mailFalling.play();
    playing3 = true;
  }


// click to scroll to top

  pan6.addEventListener('click', function(){
    $('html,body').scrollTop(0);
    playing=false;
    playing2=false;
    playing3=false;
 });

});

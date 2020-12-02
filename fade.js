// Noms: Christopher Dip et Maya Bitar
// Date: 2 Décembre 2020

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
script.type = 'text/javascript';

// I used both links to learn how to use fades:
// https://stackoverflow.com/questions/43531747/jquery-fadein-with-opacity0-or-visibilityhidden
// https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166

window.addEventListener("scroll", () => {
  currentScroll = window.pageYOffset
  if (currentScroll <= 400) {
    opacity = 1 - currentScroll / 400;
  } else {
    opacity = 0;
  }
  document.querySelector("#nom_complet").style.opacity = opacity;
  document.querySelector("#emission").style.opacity = opacity;
  if (currentScroll >= 350) {
    $("#carousel-fade").fadeTo("slow",1);
    setInterval(function(){
      $("#info-fade").fadeTo("slow",1);
    }, 500);
  }
  if(currentScroll >= 1100){
    setInterval(function(){
      $("#section-title-2").fadeTo("slow",1);
    }, 250);
    setInterval(function(){
      $("#education-title-1").fadeTo("slow",1);
      $("#education-description-1").fadeTo("slow",1);
      $("#education-season-1").fadeTo("slow",1);
      $("#education-year-1").fadeTo("slow",1);
    }, 750);
    setInterval(function(){
      $("#education-title-2").fadeTo("slow",1);
      $("#education-description-2").fadeTo("slow",1);
      $("#education-season-2").fadeTo("slow",1);
      $("#education-year-2").fadeTo("slow",1);
    }, 1250);

    setInterval(function(){
      $("#education-title-3").fadeTo("slow",1);
      $("#education-description-3").fadeTo("slow",1);
      $("#education-season-3").fadeTo("slow",1);
      $("#education-year-3").fadeTo("slow",1);
    }, 1750);

    setInterval(function(){
      $("#education-title-4").fadeTo("slow",1);
      $("#education-description-4").fadeTo("slow",1);
      $("#education-season-4").fadeTo("slow",1);
      $("#education-year-4").fadeTo("slow",1);
    }, 2250);

  }
  if(currentScroll >= 2200){
    setInterval(function(){
      $("#section-title-3").fadeTo("slow",1);
    }, 250);
    setInterval(function(){
      $("#experience-title-1").fadeTo("slow",1);
      $("#experience-description-1").fadeTo("slow",1);
      $("#experience-img-1").fadeTo("slow",1);
    }, 750);
    setInterval(function(){
      $("#experience-img-2").fadeTo("slow",1);
      $("#experience-title-2").fadeTo("slow",1);
      $("#experience-description-2").fadeTo("slow",1);
    }, 1250);
    setInterval(function(){
      $("#experience-title-3").fadeTo("slow",1);
      $("#experience-description-3").fadeTo("slow",1);
      $("#experience-img-3").fadeTo("slow",1);
    }, 1750);
    setInterval(function(){
      $("#experience-img-4").fadeTo("slow",1);
      $("#experience-title-4").fadeTo("slow",1);
      $("#experience-description-4").fadeTo("slow",1);
    }, 2250);
  }

  if(currentScroll >= 2800){
    $("#section-title-4").fadeTo("slow",1);

    setInterval(function(){
      $("#ouverture-echecs-gif-1").fadeTo("slow",1);
      $("#ouverture-echecs-1").fadeTo("slow",1);
    }, 500);
    setInterval(function(){
      $("#ouverture-echecs-gif-2").fadeTo("slow",1);
      $("#ouverture-echecs-2").fadeTo("slow",1);
    }, 750);
    setInterval(function(){
      $("#ouverture-echecs-gif-3").fadeTo("slow",1);
      $("#ouverture-echecs-3").fadeTo("slow",1);
    }, 1000);
    setInterval(function(){
      $("#ouverture-echecs-gif-4").fadeTo("slow",1);
      $("#ouverture-echecs-4").fadeTo("slow",1);
    }, 1250);
    setInterval(function(){
      $("#ouverture-echecs-gif-5").fadeTo("slow",1);
      $("#ouverture-echecs-5").fadeTo("slow",1);
    }, 1500);
    setInterval(function(){
      $("#ouverture-echecs-gif-6").fadeTo("slow",1);
      $("#ouverture-echecs-6").fadeTo("slow",1);
    }, 1750);
    setInterval(function(){
      $("#ouverture-echecs-gif-7").fadeTo("slow",1);
      $("#ouverture-echecs-7").fadeTo("slow",1);
    }, 2000);
    setInterval(function(){
      $("#ouverture-echecs-gif-8").fadeTo("slow",1);
      $("#ouverture-echecs-8").fadeTo("slow",1);
    }, 2250);
  }


});

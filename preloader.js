// THIS IS NOT MY CODE, I USED IT FROM THE USER ARiyou2000
// LINK https://codepen.io/ARiyou2000/pen/YzyxMOQ
$(document).ready(preloaderFunction());



function preloaderFunction() {

  setTimeout(function() {

    // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)

    // Model 1 - Fast
    document.getElementById("page-top").scrollIntoView();

    // Model 2 - Smooth
    // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});




    // Removing Preloader:

    $('#ctn-preloader').addClass('loaded');
    // Once the preloader has finished, the scroll appears
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // It is so that once the preloader is gone, the entire preloader section will removed
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();

        // If you want to do something after removing preloader:
        afterLoad();

      });
    }
  }, 2000);
}



function afterLoad() {
  // After Load function body!
}




//Code by ARiyou2000

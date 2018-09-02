var pauseButton = document.querySelector("button#pause");
var buildingButton = document.querySelector("button#building");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    shownVid.removeAttribute("autoplay");
    shownVid.pause();
    pauseButton.innerHTML = "Paused";
}


// button's value to video function
$("button.bgOption").click(function() {
    var firedBtnVal = $(this).val();
    // alert(firedBtnVal);
    // videos that are not one with the class of this button's value will remove show id and add hide class
    $("video").not('.'+firedBtnVal).removeAttr('id');
    $("video").not('.'+firedBtnVal).addClass('hide');
    // videos that do have this button's value as a clas will remove hide class and add show id
    $('.'+firedBtnVal).removeClass('hide');
    $('.'+firedBtnVal).attr('id', 'show');
    // plays selected video even if was previously paused, resets button pause/paused
    $('.'+firedBtnVal).get(0).play();
    pauseButton.innerHTML = "Pause";

    // $('video.'+firedBtnVal).play();
    // remove all classes to #container
    $('#container').removeAttr('class');
    // add class named button's blue to #container
    $('#container').addClass(firedBtnVal+'Bg');
    
});


pauseButton.addEventListener("click", function() {
  console.log("pause");
  var shownVid = document.getElementById("show");

  if (shownVid.paused) {
    shownVid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    shownVid.pause();
    pauseButton.innerHTML = "Paused";
  }
});

// $('body').on('click', '.btn', function(e){
//     e.preventDefault();
//     if ( $(this).hasClass('play') ) {
//         $(this).removeClass('play');
//         $(this).addClass('pause');
//     } else {
//         $(this).removeClass('pause');
//         $(this).addClass('play');
//     }
// });


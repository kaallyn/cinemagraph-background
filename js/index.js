// var vid = document.getElementById("show");
// var shownVid = document.getElementById("show");
// var shownVid = document.getElementsByClassName("show");
var x = document.getElementsByClassName("example");
// need to add .this or select video that has class .show
// to add an ID= myPara.setAttribute("id", "id_you_like");
var pauseButton = document.querySelector("button#pause");
var buildingButton = document.querySelector("button#building");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    shownVid.removeAttribute("autoplay");
    shownVid.pause();
    pauseButton.innerHTML = "Paused";
}




// value to video function

// adds classname to current
function SetupDisplay (current) {
   var className = ".nvaigation " + current;
   $(className).css('visibility', 'visible'); 
}


// alert for a button's value
// var bgBtn = document.getElementsByClassName("bgOption");

$("button.bgOption").click(function() {
    var firedBtnVal = $(this).val();
    alert(firedBtnVal);

    // find video with firedbtnval as class
    // $("button").addClass('hide');
    // $("video").not('.'+firedBtnVal).removeClass('show');
    $("video").not('.'+firedBtnVal).removeAttr('id');
    $("video").not('.'+firedBtnVal).addClass('hide');

    $('.'+firedBtnVal).removeClass('hide');
    // $('.'+firedBtnVal).addClass('show');
    $('.'+firedBtnVal).attr('id', 'show');


    // css('visibility', 'visible'); 
});




pauseButton.addEventListener("click", function() {
  console.log("pause");
  // shownVid.classList.toggle("hide");
  // buildingButton.SetupDisplay();
  // console.log()
  var shownVid = document.getElementById("show");


  if (shownVid.paused) {
    shownVid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    shownVid.pause();
    pauseButton.innerHTML = "Paused";
  }
});
// when video button other than currently playing one is clicked, hide currently playing vid
// then show vid of id whose button was clicked
// but hide needs to be class so can be used on multiple vids
// if they click on same video again?

// function that if X clicked, add id show, and all others add hide
// give each button a value that's assigned to a video, pass that value through function
// to test, first try returning button value in consol.log


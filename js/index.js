// var vid = document.getElementById("show");
var shownVid = document.getElementsByClassName("show")[0];
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
$("button").click(function() {
    var firedBtnVal = $(this).val();
    alert(firedBtnVal);

    // find video with firedbtnval as class
    // $("button").addClass('hide');
    $('.'+firedBtnVal).addClass('show');
    $('.'+firedBtnVal).removeClass('hide');
    // css('visibility', 'visible'); 
});




buildingButton.addEventListener("click", function() {
  console.log("building");
  // shownVid.classList.toggle("hide");
  // buildingButton.SetupDisplay();
  // console.log()


  // if (shownVid.paused) {
  //   shownVid.play();
  //   pauseButton.innerHTML = "Pause";
  // } else {
  //   shownVid.pause();
  //   pauseButton.innerHTML = "Paused";
  // }
});
// when video button other than currently playing one is clicked, hide currently playing vid
// then show vid of id whose button was clicked
// but hide needs to be class so can be used on multiple vids
// if they click on same video again?

// function that if X clicked, add id show, and all others add hide
// give each button a value that's assigned to a video, pass that value through function
// to test, first try returning button value in consol.log


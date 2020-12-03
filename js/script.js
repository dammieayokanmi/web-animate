// video controller
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
    btn.style.padding="25px 10px"
  } else {
    video.pause();
    btn.innerHTML = "Play";
    btn.style.padding="20px 10px"

  }
}


AOS.init();
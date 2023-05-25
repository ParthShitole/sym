var videos = ["video1", "video2", "video3"];
var currentVideoIndex = 0;

function playNextVideo() {
  var currentVideo = document.getElementById(videos[currentVideoIndex]);
  currentVideo.style.display = "none";
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  var nextVideo = document.getElementById(videos[currentVideoIndex]);
  nextVideo.style.display = "block";
  nextVideo.play();
  currentVideo.pause();
}

var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", playNextVideo);




var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight= "0px";
function menutoggle()
{
  if (MenuItems.style.maxHeight== "0px")
    {
      MenuItems.style.maxHeight= "200px";  
    }
  else {
      MenuItems.style.maxHeight= "0px";
  }
}
const video = document.querySelector("#video");
console.log(video);

//define the play button

const playButton = document.querySelector("#play-button");
console.log(playButton);

//define the pause button

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

//make play button functional

playButton.addEventListener("click", playVideo);

function playVideo() {
  video.play();
}

//make pause button functional

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  video.pause();
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideo);
function toggleVideo() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

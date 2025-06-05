// get video so we can work with it
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//play pause logic
// 1. get the right button to play and pause the video
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// 2. listen to the click event
playPauseButton.addEventListener("click", toggleVideo);

// 3. write the function
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//mute unmute logic
// 1. get the right button to mute and unmute the video
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// 2. listen to the click event
muteUnmuteButton.addEventListener("click", toggleAudio);

// 3. write the function
function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

//fast forward logic
// 1. get the right button to fast forward the video
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// 2. listen to the click event
fastForwardButton.addEventListener("click", toggleSpeed);

// 3. write the function
function toggleSpeed() {
  if (myVideo.playbackRate === 1) {
    myVideo.playbackRate = 2;
  } else {
    myVideo.playbackRate = 1;
  }
}

//step1 logic
// 1. get the right button to skip to a part of a video
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

// 2. listen to the click event
step1Button.addEventListener("click", step1);

// 3. write the function
function step1() {
  myVideo.currentTime = 17;
}

//step2 logic
// 1. get the right button to skip to a part of a video
const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// 2. listen to the click event
step2Button.addEventListener("click", step2);

// 3. write the function
function step2() {
  myVideo.currentTime = 34;
}

//fullscreen logic
// 1. get the right button
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

myVideo.addEventListener("dblclick", fullscreen);

// 2. listen to the click event
fullscreenButton.addEventListener("click", fullscreen);

// 3. write the function
function fullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//like logic
// 1. get the right button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

const likesContainer = document.querySelector("#likes");
console.log(likesContainer);

let likes = 0;

// 2. listen to the click event
heartButton.addEventListener("click", updateLikes);

// 3. write the function
function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

//progress bar logic
// 1. get the right button
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

// 2. listen to the click event
myVideo.addEventListener("timeupdate", updateProgress);

// 3. write the function
function updateProgress() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = progress + "%";
}

//playlist logic
const playlist = [
  {
    id: 0,
    name: "stardust",
    src: "stardust.mp4",
  },
  {
    id: 1,
    name: "zenscape",
    src: "zenscape.mp4",
  },
];

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
zenscapeButton.addEventListener("click", function chooseZenscape() {
  chooseVideo(1);
});

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
stardustButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
});

function chooseVideo(no) {
  myVideo.src = playlist[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}

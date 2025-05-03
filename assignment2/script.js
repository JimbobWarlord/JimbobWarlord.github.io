//songs list
let i = 0;
const undertale = [
  {
    id: 0,
    name: "01. Once Upon a Time",
    src: "01.mp3",
  },
  {
    id: 1,
    name: "02. Start Menu",
    src: "02.mp3",
  },
  {
    id: 2,
    name: "03. Your Best Friend",
    src: "03.mp3",
  },
];

// get audio so we can work with it
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

//play pause logic
// 1. get the right button to play and pause the video
const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// 2. listen to the click event
playPauseBtn.addEventListener("click", toggleAudio);

// 3. write the function
function toggleAudio() {
  if (myAudio.paused || myAudio.ended) {
    myAudio.play();
    myAudio.volume = 0.5;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//mute unmute logic
// 1. get the right button to mute and unmute the video
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// 2. listen to the click event
muteUnmuteBtn.addEventListener("click", muteAudio);

// 3. write the function
function muteAudio() {
  if (myAudio.muted) {
    myAudio.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myAudio.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

//replay logic
// 1. get the right button to replay the video
const replayBtn = document.querySelector("#replay-btn");
console.log(replayBtn);
const replayImg = document.querySelector("#replay-img");
console.log(replayImg);

// 2. listen to the click event
replayBtn.addEventListener("click", replayAudio);

// 3. write the function
function replayAudio() {
  myAudio.currentTime = 0;
}

//previous song logic
const previousSongBtn = document.querySelector("#previous-song-btn");
console.log(previousSongBtn);
previousSongBtn.addEventListener("click", function playPreviousSong() {
  i = i - 1;
  if (i === -1) {
    i = 0;
  } else {
    playSong(i);
    textbox.innerHTML = undertale[i].name;
  }
});

//next song logic
const nextSongBtn = document.querySelector("#next-song-btn");
console.log(nextSongBtn);
nextSongBtn.addEventListener("click", function playNextSong() {
  i = i + 1;
  if (i === 3) {
    i = 2;
  } else {
    playSong(i);
    textbox.innerHTML = undertale[i].name;
  }
});

function playSong(no) {
  myAudio.src = undertale[no].src;
  console.log(myAudio.src);
  myAudio.load();
  myAudio.play();
  myAudio.volume = 0.5;
}

// Add other functionalities here

//songs list
const undertale = [
  {
    id: 0,
    name: "Once Upon a Time",
    src: "01.mp3",
  },
  {
    id: 1,
    name: "Start Menu",
    src: "02.mp3",
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

//next song logic
const nextSongBtn = document.querySelector("#next-song-btn");
console.log(nextSongBtn);
nextSongBtn.addEventListener("click", function playNextSong() {
  playNextSong(1);
});

function playNextSong(no) {
  myAudio.src = undertale[no].src;
  console.log(myAudio.src);
  myAudio.load();
  myAudio.play();
}

// Add other functionalities here

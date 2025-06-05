//songs list, this list features all 101 songs of the Undertale soundtrack and took a very long time to write out
//I used a counter to change the song id so users can seamlessly switch between songs, with i as the variable
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
  {
    id: 3,
    name: "04. Fallen Down",
    src: "04.mp3",
  },
  {
    id: 4,
    name: "05. Ruins",
    src: "05.mp3",
  },
  {
    id: 5,
    name: "06. Uwa!! So Temperate",
    src: "06.mp3",
  },
  {
    id: 6,
    name: "07. Anticipation",
    src: "07.mp3",
  },
  {
    id: 7,
    name: "08. Unnecessary Tension",
    src: "08.mp3",
  },
  {
    id: 8,
    name: "09. Enemy Approaching",
    src: "09.mp3",
  },
  {
    id: 9,
    name: "10. Ghost Fight",
    src: "10.mp3",
  },
  {
    id: 10,
    name: "11. Determination",
    src: "11.mp3",
  },
  {
    id: 11,
    name: "12. Home",
    src: "12.mp3",
  },
  {
    id: 12,
    name: "13. Home (Music Box)",
    src: "13.mp3",
  },
  {
    id: 13,
    name: "14. Heartache",
    src: "14.mp3",
  },
  {
    id: 14,
    name: "15. sans.",
    src: "15.mp3",
  },
  {
    id: 15,
    name: "16. Nyeh Heh Heh!",
    src: "16.mp3",
  },
  {
    id: 16,
    name: "17. Snowy",
    src: "17.mp3",
  },
  {
    id: 17,
    name: "18. Uwa!! So Holiday",
    src: "18.mp3",
  },
  {
    id: 18,
    name: "19. Dogbass",
    src: "19.mp3",
  },
  {
    id: 19,
    name: "20. Mysterious Place",
    src: "20.mp3",
  },
  {
    id: 20,
    name: "21. Dogsong",
    src: "21.mp3",
  },
  {
    id: 21,
    name: "22. Snowdin Town",
    src: "22.mp3",
  },
  {
    id: 22,
    name: "23. Shop",
    src: "23.mp3",
  },
  {
    id: 23,
    name: "24. Bonetrousle",
    src: "24.mp3",
  },
  {
    id: 24,
    name: "25. Dating Start!",
    src: "25.mp3",
  },
  {
    id: 25,
    name: "26. Dating Tense!",
    src: "26.mp3",
  },
  {
    id: 26,
    name: "27. Dating Fight!",
    src: "27.mp3",
  },
  {
    id: 27,
    name: "28. Premonition",
    src: "28.mp3",
  },
  {
    id: 28,
    name: "29. Danger Mystery",
    src: "29.mp3",
  },
  {
    id: 29,
    name: "30. Undyne",
    src: "30.mp3",
  },
  {
    id: 30,
    name: "31. Waterfall",
    src: "31.mp3",
  },
  {
    id: 31,
    name: "32. Run!",
    src: "32.mp3",
  },
  {
    id: 32,
    name: "33. Quiet Water",
    src: "33.mp3",
  },
  {
    id: 33,
    name: "34. Memory",
    src: "34.mp3",
  },
  {
    id: 34,
    name: "35. Bird That Carries You",
    src: "35.mp3",
  },
  {
    id: 35,
    name: "36. Dummy!",
    src: "36.mp3",
  },
  {
    id: 36,
    name: "37. Pathetic House",
    src: "37.mp3",
  },
  {
    id: 37,
    name: "38. Spooktune",
    src: "38.mp3",
  },
  {
    id: 38,
    name: "39. Spookwave",
    src: "39.mp3",
  },
  {
    id: 39,
    name: "40. Ghouliday",
    src: "40.mp3",
  },
  {
    id: 40,
    name: "41. Chill",
    src: "41.mp3",
  },
  {
    id: 41,
    name: "42. Thundersnail",
    src: "42.mp3",
  },
  {
    id: 42,
    name: "43. Temmie Village",
    src: "43.mp3",
  },
  {
    id: 43,
    name: "44. Tem Shop",
    src: "44.mp3",
  },
  {
    id: 44,
    name: "45. NGAHHH!!",
    src: "45.mp3",
  },
  {
    id: 45,
    name: "46. Spear of Justice",
    src: "46.mp3",
  },
  {
    id: 46,
    name: "47. Ooo",
    src: "47.mp3",
  },
  {
    id: 47,
    name: "48. Alyphs",
    src: "48.mp3",
  },
  {
    id: 48,
    name: "49. It's Showtime!",
    src: "49.mp3",
  },
  {
    id: 49,
    name: "50. Metal Crusher",
    src: "50.mp3",
  },
  {
    id: 50,
    name: "51. Another Medium",
    src: "51.mp3",
  },
  {
    id: 51,
    name: "52. Uwa!! So HEATS!!",
    src: "52.mp3",
  },
  {
    id: 52,
    name: "53. Stronger Monsters",
    src: "53.mp3",
  },
  {
    id: 53,
    name: "54. Hotel",
    src: "54.mp3",
  },
  {
    id: 54,
    name: "55. Can You Really Call This A Hotel",
    src: "55.mp3",
  },
  {
    id: 55,
    name: "56. Confession",
    src: "56.mp3",
  },
  {
    id: 56,
    name: "57. Live Report",
    src: "57.mp3",
  },
  {
    id: 57,
    name: "58. Death Report",
    src: "58.mp3",
  },
  {
    id: 58,
    name: "59. Spider Dance",
    src: "59.mp3",
  },
  {
    id: 59,
    name: "60. Wrong Enemy !?",
    src: "60.mp3",
  },
  {
    id: 60,
    name: "61. Oh! One True Love",
    src: "61.mp3",
  },
  {
    id: 61,
    name: "62. Oh! Dungeon",
    src: "62.mp3",
  },
  {
    id: 62,
    name: "63. It's Raining Somewhere Else",
    src: "63.mp3",
  },
  {
    id: 63,
    name: "64. CORE Approach",
    src: "64.mp3",
  },
  {
    id: 64,
    name: "65. CORE",
    src: "65.mp3",
  },
  {
    id: 65,
    name: "66. Last Episode!",
    src: "66.mp3",
  },
  {
    id: 66,
    name: "67. Oh My...",
    src: "67.mp3",
  },
  {
    id: 67,
    name: "68. Death by Glamour",
    src: "68.mp3",
  },
  {
    id: 68,
    name: "69. For the Fans",
    src: "69.mp3",
  },
  {
    id: 69,
    name: "70. Long Elevator",
    src: "70.mp3",
  },
  {
    id: 70,
    name: "71. Undertale",
    src: "71.mp3",
  },
  {
    id: 71,
    name: "72. Song That Might Play When You Fight Sans",
    src: "72.mp3",
  },
  {
    id: 72,
    name: "73. The Choice",
    src: "73.mp3",
  },
  {
    id: 73,
    name: "74. Small Shock",
    src: "74.mp3",
  },
  {
    id: 74,
    name: "75. Barrier",
    src: "75.mp3",
  },
  {
    id: 75,
    name: "76. Bergentruckung",
    src: "76.mp3",
  },
  {
    id: 76,
    name: "77. ASGORE",
    src: "77.mp3",
  },
  {
    id: 77,
    name: "78. You Idiot",
    src: "78.mp3",
  },
  {
    id: 78,
    name: "79. Your Best Nightmare",
    src: "79.mp3",
  },
  {
    id: 79,
    name: "80. Finale",
    src: "80.mp3",
  },
  {
    id: 80,
    name: "81. An Ending",
    src: "81.mp3",
  },
  {
    id: 81,
    name: "82. She's Playing Piano",
    src: "82.mp3",
  },
  {
    id: 82,
    name: "83. Here We Are",
    src: "83.mp3",
  },
  {
    id: 83,
    name: "84. Amalgam",
    src: "84.mp3",
  },
  {
    id: 84,
    name: "85. Fallen Down (Reprise)",
    src: "85.mp3",
  },
  {
    id: 85,
    name: "86. Don't Give Up",
    src: "86.mp3",
  },
  {
    id: 86,
    name: "87. Hopes and Dreams",
    src: "87.mp3",
  },
  {
    id: 87,
    name: "88. Burn in Despair!",
    src: "88.mp3",
  },
  {
    id: 88,
    name: "89. SAVE the World",
    src: "89.mp3",
  },
  {
    id: 89,
    name: "90. His Theme",
    src: "90.mp3",
  },
  {
    id: 90,
    name: "91. Final Power",
    src: "91.mp3",
  },
  {
    id: 91,
    name: "92. Reunited",
    src: "92.mp3",
  },
  {
    id: 92,
    name: "93. Menu (Full)",
    src: "93.mp3",
  },
  {
    id: 93,
    name: "94. Respite",
    src: "94.mp3",
  },
  {
    id: 94,
    name: "95. Bring it in, Guys!",
    src: "95.mp3",
  },
  {
    id: 95,
    name: "96. Last Goodbye",
    src: "96.mp3",
  },
  {
    id: 96,
    name: "97. But the Earth Refused to Die",
    src: "97.mp3",
  },
  {
    id: 97,
    name: "98. Battle Against a True Hero",
    src: "98.mp3",
  },
  {
    id: 98,
    name: "99. Power of NEO",
    src: "99.mp3",
  },
  {
    id: 99,
    name: "100. MEGALOVANIA",
    src: "100.mp3",
  },
  {
    id: 100,
    name: "101. Good Night",
    src: "101.mp3",
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

//jump to song 24 logic
const jumpTo24Btn = document.querySelector("#jump-to-24-btn");
console.log(jumpTo24Btn);

jumpTo24Btn.addEventListener("click", jumpTo24);

function jumpTo24() {
  i = 23;
  playSong(i);
  textbox.innerHTML = undertale[i].name;
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
}

//jump to song 46 logic
const jumpTo46Btn = document.querySelector("#jump-to-46-btn");
console.log(jumpTo46Btn);

jumpTo46Btn.addEventListener("click", jumpTo46);

function jumpTo46() {
  i = 45;
  playSong(i);
  textbox.innerHTML = undertale[i].name;
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
}

//jump to song 59 logic
const jumpTo59Btn = document.querySelector("#jump-to-59-btn");
console.log(jumpTo59Btn);

jumpTo59Btn.addEventListener("click", jumpTo59);

function jumpTo59() {
  i = 58;
  playSong(i);
  textbox.innerHTML = undertale[i].name;
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
}

//jump to song 77 logic
const jumpTo77Btn = document.querySelector("#jump-to-77-btn");
console.log(jumpTo77Btn);

jumpTo77Btn.addEventListener("click", jumpTo77);

function jumpTo77() {
  i = 76;
  playSong(i);
  textbox.innerHTML = undertale[i].name;
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
}

//jump to song 100 logic
const jumpTo100Btn = document.querySelector("#jump-to-100-btn");
console.log(jumpTo100Btn);

jumpTo100Btn.addEventListener("click", jumpTo100);

function jumpTo100() {
  i = 99;
  playSong(i);
  textbox.innerHTML = undertale[i].name;
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
}

//previous song logic
const previousSongBtn = document.querySelector("#previous-song-btn");
console.log(previousSongBtn);
previousSongBtn.addEventListener("click", function playPreviousSong() {
  //this counter prevents i from hitting numbers below 0, as the id range is between 0-100
  i = i - 1;
  if (i === -1) {
    i = 0;
  } else {
    playSong(i);
    textbox.innerHTML = undertale[i].name;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
});

//next song logic
const nextSongBtn = document.querySelector("#next-song-btn");
console.log(nextSongBtn);
nextSongBtn.addEventListener("click", function playNextSong() {
  //this counter prevents i from hitting numbers above 100, as the id range is between 0-100
  i = i + 1;
  if (i === 101) {
    i = 100;
  } else {
    playSong(i);
    textbox.innerHTML = undertale[i].name;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
});

function playSong(no) {
  myAudio.src = undertale[no].src;
  console.log(myAudio.src);
  myAudio.load();
  myAudio.play();
  myAudio.volume = 0.5;
}

//hope you enjoyed my music player!

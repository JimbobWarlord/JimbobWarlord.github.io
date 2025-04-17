const persona = document.querySelector("#persona");
console.log(persona);

//define the play button

const playButton = document.querySelector("#play-button");
console.log(playButton);

//define the pause button

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

//make play button functional

playButton.addEventListener("click", playAudio);

function playAudio() {
  console.log("Now playing 'Life Goes On' from the Persona 5 Soundtrack.");
  persona.play();
}

//make pause button functional

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  console.log("Audio paused!");
  persona.pause();
}

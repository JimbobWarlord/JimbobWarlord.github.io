function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  const body = document.querySelector("body");
  const outer = document.querySelector(".outer");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("The temperature is", temp);
  if (temp < 10) {
    console.log("Oh god, it's cold!");
    body.style.backgroundColor = "white";
    outer.style.backgroundColor = "powderblue";
  } else if (temp >= 10 && temp < 20) {
    console.log("Not bad for Melbourne");
    body.style.backgroundColor = "lime";
  } else if (temp >= 20 && temp < 30) {
    console.log("Hot and sunny but not awful");
    body.style.backgroundColor = "orange";
  } else {
    console.log("Oh god, it's boiling!");
    body.style.backgroundColor = "red";
  }
}

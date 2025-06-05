const header = document.querySelector("header");
//console.log(header.innerHTML);
//header.innerHTML += "<h1>Club Penguin</h1>";
course = "B0B";
//header.innerHTML += `<h3>this is ${course} </h3>`;
//topHeading.textContent = "This is a new heading";
//topHeading.style.color = "purple";

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", handleClick);

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

function handleClick() {
  console.log("Ouch.");
  //topHeading.textContent="New";
  myCat.classList.toggle("round");
}

const allPara = document.querySelectorAll("p");
console.log(allPara);
for (let i = 0; i < allPara.length; i++) {
  console.log(allPara[i].textContent);
  allPara[i].style.color = "crimson";
}

const firstSub = document.querySelector("#sub1");
console.log(firstSub.textContent);
firstSub.style.border = "2px solid blue";
firstSub.style.color = "white";
firstSub.style.backgroundColor = "black";

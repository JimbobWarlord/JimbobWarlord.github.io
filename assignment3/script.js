//define map
const map = document.querySelector("svg");
const countries = document.querySelector("path");

countries.forEach((country) => {
  country.addEventListener("mouseenter", function () {
    const classList = [...this.classList].join(".");
    console.log(classList);

    const selector = "." + classList;
    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach((el) => (el.style.fill = "c99aff"));
  });

  country.addEventListener("mouseout", function () {
    const classList = [...this.classList].join(".");
    const selector = "." + classList;
    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach((el) => (el.style.fill = "443d4b"));
  });
});

let random;

const randomBtn = document.querySelector("#random");
console.log(randomBtn);
randomBtn.addEventListener("click", function randomNumber() {
  random = Math.floor(Math.random() * 20) + 1;
  document.getElementById("country").innerHTML = random;
});

const australiaclick = document.querySelector(".Australia");
console.log(australiaclick);
australiaclick.addEventListener("click", function Aus() {
  country.innerHTML = "Australia";
});

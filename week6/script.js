const topHeading = document.querySelector("h1");
console.log(topHeading.textContent);
topHeading.textContent = "This is a new heading";
topHeading.style.color = "purple";

const allParas = document.querySelectorAll(".blue-colour");
console.log(allParas);
for (let i = 0; i < allParas.clientHeight; i++) {
  console.log(allParas[i].textContent);
}

const firstSub = document.querySelector("#sub1");
console.log(firstSub);
console.log(firstSub.textContent);

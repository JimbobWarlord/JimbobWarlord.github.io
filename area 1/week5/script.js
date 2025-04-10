console.log("Bread");

let myGame = "Club Penguin!";
console.log("Welcome to", myGame, "Waddle on!");
let msg = `<h1>I love ${myGame}</h1>`;
console.log(msg);
//let myCity = prompt("Where do you live?");
//console.log("I live in", myCity);
//this is a comment, double slash
// () - used in functions, conditions
// [] - used in arrays
// {} - defines scope, used in functions
let a = 1;
let b = 2;
console.log(a / b);

let bluesgood = false;
const saintsgood = true;

const myStudentRecord = {
  name: "James",
  id: 1111,
  home: "Melbourne",
  local: true,
};
console.log(myStudentRecord);
console.log(myStudentRecord.home);

//arrays start at 0
let game1 = "Mario Kart";
let game2 = "Kirby";
let game3 = "Donkey Kong";
let games = [game1, game2, game3];
//console.log(games);
//console.log(games[1]);

for (let i = 0; i < games.length; i++) {
  console.log("A new game was announced for", games[i]);
}

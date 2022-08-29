/*let x = 30;
let fix = x / 3;
let buz = x / 5;
let fixBuz = x / 15;

if (x / 3) {
  console.log(fix);
} else if (x / 5) {
  console.log(buz);
} else if (x / 15) {
  console.log(fizBuzz);
}
*/

//let num = 0;

//for (let i = 1; i < 101; i++) {
//if (i % 15 === 0) {
//console.log("fix buzz");
//} else if (i % 5 === 0) {
// console.log(" buzz");
//} else if (i % 3 === 0) {
// console.log("fiz");
//} else {
// console.log(i);
// }
//}

let books = ("moby", "my love journey", "lie ape", "heros den", "jark bee");

//console.log(books.length);
let count = 0;
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
  if (books[i] === "my love lourney") {
    count = count + 1;
    console.log(count);
  }
}

//object
const user = {
  name: "godswill",
  lastName: "udemba",
  pets: false,
};
console.log(user.name);

//object in array
const users = [
  {
    userName: "anie",
    followers: 34,
    is_followed: false,
  },
  {
    userName: "joe",
    followers: 64,
    is_followed: true,
  },
  {
    userName: "dannys",
    followers: 48,
    is_followed: true,
  },
];

console.log(users[0].is_followed);

//for (let i = 0; i < users.length; 1++) {
//if (users[1] .is_followed === true) {
//console.log('hello,' + users[1].userName + 'long time no speak!');
//}
//}

for (let i = 0; i < users.length; i++) {
  if (users[i].is_followed === true) {
    console.log("hi, " + users[i].userName + "long time no speak!");
  }
}

//Function
//camelcase for naming functions= best practise
function sendText(name, time) {
  console.log(
    "hey " + name + " baby do you wwant to hand out at " + time + "?"
  );
}
sendText("danny", "10pm");

//while loop
/*
let i = 1;
while (i < 101) {
  console.log(i + "beer is on the wall");
  i++;
}
*/
//strings
const string = "say cheese";
const string2 = " udemba";
console.log(string.concat(string2));

//Arrays
// this method does not change the existing arrays
//it returns a new array

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const newArray = array1.concat(array2);
console.log(newArray);

//Join
//returns a new string

/*const textDisplay = doccument.querrySelector(".text");

const emotion = ["happy", "confidence", "sad"];
console.log(emotion.join(""));

textDisplay.innerHTML = "text";
*/

//POP
//pop methods changes the length of an array and dose not creat any one'.
/*
const display = document.querrySelctor(".display");
const movies =
  //{}{}{}//notethatall the movies name should be in  curly bracket
  [("argo", "aliean", "fears")];
console.log(movies);
movies.pop();
display.innerHTML = movies;

//SHIFT
//changes the length of array

const display = document.querrySelctor(".display");
const movie = ["clue", "ganger", "herian"];
movies.shift;
display.innerHTML = display;

//unshift
//this add an ellement at the beging of an array
const display = document.querrySelctor(".display");
const plays = ["hamilton"];
plays.unshift("wicked");
//console.log(plays)
display.innerHTML = plays;

//.push
//changes the original array
const display = document.querrySelctor(".display");
const actors = ["bradi"];
actors.push("rihanna");
display.innerHTML = actors;
*/

//slice
//it does not change the array
//it produces new ones

//ForEach
//we picked a class from style sheet and changed the background color of each.

/*const circle = document.querySelectorAll(".circle");

console.log(circles);
circles.forEach(glob=>glob.Style.backgroundColor='red')
*/
const names = ["anie", "bobby", "hana", "julliet"];
names.forEach((name) => console.log(name));

/*const scores = [2, 12, 33, 44, 55, 66, 77];
scores.forEach((score) => console.log(score * 2));
*/
//some

//map
//creats a new array
const ages2018 = [21, 33, 43, 55, 67, 87];

const age2021 = ages2018.map((age) => age + 3);
console.log(age2021);

//mapping using object
const housemates2018 = [
  {
    name: "amed",
    age: 24,
  },
  {
    name: "josh",
    age: 55,
  },
  {
    name: "hassan",
    age: 37,
  },
];
const housemates2021 = housemates2018.map((housemate) => housemate.age + 3);
console.log(housemates2021);

//filter
//it creats a new array

/*const shows = ["lupin", "cobra", "24", "netor robert"];

const displayShows = shows.filter((word) => word.length <= 5);
console.log(displayShows);*/

const shows = [
  {
    name: "lupin",
    series: 3,
    episode: 23,
  },
  {
    name: "cobra",
    series: 9,
    episode: 83,
  },
  {
    name: "24",
    series: 88,
    episode: 8,
  },
  {
    name: "netor robert",
    series: 31,
    episode: 238,
  },
];
displayShow = shows.filter((shows) => shows.series <= 40);
console.log(displayShow);

//.REDUCE
//score.reduce((accumulator, currentValue)=>accumelator +currentValue)

const scores = [11, 75, 12, 21];
const total = scores.reduce((totalScore, score) => totalScore + score);
console.log(total);

//EVERY
//if every thing in array matches a rule or statment
//returns true otherwise returns false

const testResult = [65, 83, 22, 75, 82];
console.log(testResult.every((result) => result > 20));

const animal = ["cat", "dog", "lizard"];

console.log(animal.every((animal) => animal.length === 3));

//split
const sentence = "come baby her goes mamaid odugwu";
const word = sentence.split(" ");
console.log(word[3]);

//ARRAY work
//using map write a function that converts farenheit to celcius
//getcelcius([23,140,212,41])=>[-5,60,100,5]

const farenheit = [23, 140, 212, 41];

function getcelcius() {
  return farenheit.map((value) => ((value - 32) * 5) / 9);
}
console.log(getcelcius());

//using 'some' write a function that checks an array for a 'falsey'
//e.g check for falsey([11, [], NAN,'Angelas'])=>true

/*
const words = [11, [], "nan", "Angelas"];

words.some(checkWords);
function checkWords(words) {
  console.log(word <= 9);
}
*/
//or check if they are all items of the same cartigory

const Words = [11, [], "nan", "Angelas"];
function checkForFalsey() {
  return array1.some((item) => !item);
}
console.log(checkForFalsey());

// using reduce write a function that will return the total number
//of characters in an array of string
//eg gettotal['rabbit','football','cracking']=>22

const numberOfWords = ["rabbit", "football", "cracking"];
const getTotalNumber = numberOfWords.reduce(
  (getTotalNumber, numberOfWords) => getTotalNumber + numberOfWords
);

{
  console.log(getTotalNumber.length);
}

/* using 'every' write a function that checks whether every number in an array is a square number.
e.g checkSquares([9,16,81])=> true
 */

const nums = [9, 16, 81];
function checkSquares() {
  return nums.every((num) => Math.sqrt(num) % 1 === 0);
}
console.log(checkSquares());

//using an array method,write a function that return the string
//element of an array that have a given length or larger
//eg getwords(['florida', 'dog','phone'],s)=>['florida','phone']

const Word = ["florida", "dog", "phone"];
const number = 5;
const getWord = Word.filter((Word) => Word.length >= number);

console.log(getWord);

/*
using an arry method, write a function that converts an array of cm values
as a string, in to an array of number.
e.g getValue(["23cm","5.6cm","1000cm"])=>[23,5.6,1000]
*/
const cmValues = ["23cm", "5.6cm", "1000cm"];
function getValue() {
  return cmValues.map((value) => parseFloat(value));
}
console.log(getValue());

/*
using split and filter, write a function that counts the number of
vowels in a sentence
e.g getVowelCount('In west philaselpha, born and raised')=>12

*/

const saying = "In west philaselpha, born and raised";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function getVowelcount() {
  return saying.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(getVowelcount());

/*
using split, map and join write a function that capitalises the
first letter of each word in a sentence

e.g capitalise('the queens gambit') => 'The Queens Gambit'
*/
const title = "the queens gambit";
function capitalise() {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");
}
console.log(capitalise());

/* Addeventlistener */

//add date

const today = new Date();
console.log(today);

const isoString = today.toISOString();
console.log(isoString);

//SETTIME OUT
//setTimeOut(function, milliseconds) it appears and disappear given the asigned time
/*
const speechBuble = document.querySelector(".bubble");
const time = 3000;

function showText() {
  speechBuble.innerHTML = "HEY DUDE";
}

setTimeout(showText,time)
setTimeout(dunction(){speechBuble.innerHTML=''}, 10000)
*/

//SET INTERVALS

//KEY
//to either move an item left,right, up or down on our web page.

const circle = document.querySelector(".circle");
function control(e) {
  /*if (e.key === "ArrowLeft") {
    console.log("pressed left");
  } else if (e.key === "ArrowRight") {
    console.log("pressed right");
  } else if (e.key === "ArrowUp") {
    console.log("pressed Up");
  } else if (e.key === "ArrowDown") {
    console.log("pressed down");
  }*/

  switch (e.key) {
    case "ArrowLeft":
      console.log("pressed left");
      break;
    case "ArrowRight":
      console.log("pressed right ");
      break;
    case "ArrowUp":
      console.log("pressed up ");
      break;
    case "ArrowDown":
      console.log("pressed down ");
      break;
    default:
      console.log("key not recognised");
  }
}
document.addEventListener("keyDown", control);

//USING FETCH API
//TO GET--REQUEST
/*
function getData() {
  fetch("https://restcountries.com/v3.1/all").then((resonse) =>
    Response.json()
  ),
    then((data) => {
      console.log(data);
      const name = data[0].name;
      console.log(name);
    });
}
*/
const beerDisplay = document.querySelector(".name");
const button = document.querySelector(".button");

function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const randomNumber = Math.random() * data.length;
      const randomInteger = Math.floor(randomNumber);

      const name = data[randomInteger].name;
      console.log(name);
      beerDisplay.innerHTML = name;
    });
}

button.addEventListener("click", getData);

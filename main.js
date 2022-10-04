let alphaLtr = "abcdefghijklmnopqrstuvwxyz";
let ltrArray = Array.from(alphaLtr);
let alphaLtrDiv = document.querySelector(".alpha-letters");
ltrArray.forEach((ltr) => {
  let span = document.createElement("span");
  let spanTxt = document.createTextNode(ltr);
  span.appendChild(spanTxt);
  span.className = "ltr";
  alphaLtrDiv.appendChild(span);
});
/////////////////
const keyWord = {
  movie: [
    "Three Idiots",
    "Fight Club",
    "Django",
    "Up",
    "Titanic",
    "Avatar",
    "The Lion King",
    "Frozen",
    "Avengers",
    "Spider Man",
    "Cinderella",
    "Beauty and the Beast",
    "Finding Dory",
    "Iron Man",
    "Joker",
    "Aladdin",
    "Finding Nemo",
    "The Godfather",
    "Parasite",
    "Gladiator",
    "Departed",
    "Prestige",
    "Memento",
    "Toy Story",
    "Coco",
    "Taxi Driver",
    "Heat",
    "Batman",
    "Sherlock",
  ],
  "famous person": [
    "Jackie Chan",
    "Al Pacino",
    "Robert De Niro",
    "Will Smith",
    "Tom Hanks",
    "Morgan Freeman",
    "Charle Chaplin",
    "Brad Pitt",
    "Leonardo DiCaprio",
    "Johnny Depp",
    "Jim Carrey",
  ],
  "historical characterr": [
    "ALbert Einstein",
    "Tesla",
    "Socrates",
    "James Madison",
    "Alexander",
    "Thomas Edison",
    "Newton",
    "Columbus",
    "Victoria",
    "Adolf Hitler",
    "Muhammad",
    "Napoleon",
  ],
  city: [
    "alexandria",
    "Barcelona",
    "Seoul",
    "Pattaya",
    "Shanghai",
    "Las Vegas",
    "Osaka",
    "Agra",
    "Los Angeles",
    "Amsterdam",
    "Miami",
    "Mecca",
    "Prague",
    "Antalya",
    "Rome",
    "Tokyo",
    "Delhi",
    "Istanbul",
    "Kuala Lumpur",
    "New York City",
    "Dubai",
    "Paris",
    "Singapore",
    "London",
    "Hong Kong",
  ],
  ///frute /// vigtables /
  country: [
    "Palestine",
    "Syria",
    "Saudi Arabia",
    "Egypt",
    "Spain",
    "Japan",
    "India",
    "USA",
    "China",
    "Thailand",
    "South Korea",
    "Netherlands",
    "Taiwan",
    "Turkey",
    "Italy",
    "Emirates",
    "France",
    "United Kingdom",
    "Malaysia",
    "Germany",
    "Brazil",
    "Argentina",
    "Cameroon",
    "Belgium",
    "Denmark",
    "Portugal",
    "Croatia",
    "Gabon",
    "Serbia",
    "Uruguay",
    "Sweden",
    "Colombia",
    "Palestine",
    "Algeria",
    "Angola",
    "Armenia",
    "Australia",
    "Bahamas",
    "Bahrain",
    "Canada",
    "Chad",
    "Costa Rica",
    "Cuba",
    "Guatemala",
    "Iceland",
    "	Iraq",
    "Lebanon",
    "Libya",
    "Madagascar",
    "Mauritania",
    "Mexico",
    "Morocco",
    "Oman",
    "Russia",
  ],
  "football player": [
    "Messi",
    "Ronaldo",
    "Xavi",
    "Iniesta",
    "Ibrahimovic",
    "Falcao",
    "Pirlo",
    "Neymar",
    "Thiago",
    "Suarez",
    "Ramos",
    "Pique",
    "Dembele",
    "Fabregas",
    "Marcelo",
    "Jordi Alba",
    "Rodriguez",
    "Robben",
    "Aguero",
    "Cavani",
    "Ozil",
    "Ribery",
    "Di Maria",
    "Mo Salah",
    "Drogba",
    "Kroos",
  ],
};
let keys = Object.keys(keyWord);
let keyRandom = Math.floor(Math.random() * keys.length);
let keyRandomWord = keys[keyRandom];
let wordsInKey = keyWord[keyRandomWord];
let wordsRandom = Math.floor(Math.random() * wordsInKey.length);
let theChoosen = wordsInKey[wordsRandom];
///////////////////
document
  .querySelector(".key-word-span")
  .appendChild(document.createTextNode(keyRandomWord));
/////////////////
let success = 0;
/////////////////
let letterGuessDiv = document.querySelector(".letters-guess");
let wordArray = Array.from(theChoosen.toLowerCase());
wordArray.forEach((letter) => {
  let span = document.createElement("span");
  letterGuessDiv.appendChild(span);
  if (letter === " ") {
    span.className = "space";
    success++;
  }
});
//////////////////
let wrongTries = 0;

let drow = document.querySelector(".drow");
let letterGuessSpan = document.querySelectorAll(".letters-guess span");
document.addEventListener("click", (e) => {
  /////////////////////////////////////////
  let arrayMistakeMsg = [
    "hey man, no kidding !!!",
    "seriously",
    "No kidding, I'm gonna die here",
    "oh god...help!",
    "are you trying to kill me ?",
    "whaattt!!!",
    "I could swear that your IQ is below zero",
    "Hey... I'm trying to live here",
    "oh shit here we go again",
    "please god help, he is so stupid",
    "human stupidity is infinite",
    "You never stop surprising me",
    "hey man... i have kids, please",
    "really!!!",
    "$#@!&#$",
    "use this small brain to think",
    "are you kidding me ?",
    "i don't wanna die (':",
    "Wow... I'm shocked",
  ];
  let randomMsg =
    arrayMistakeMsg[Math.floor(Math.random() * arrayMistakeMsg.length)];
  /////////////////
  function mistake() {
    document.querySelector(".choosen-msg").innerHTML = `${randomMsg}`;
  }
  ///////////////////////////////////////
  let arrayCorrectMsg = [
    "haha woooow",
    "oooh yeah",
    "i'll live, i'll live",
    "my bed, i'll come soon ",
    "i love you, go ahead",
    "ooh yeah baby",
    "comon ooh comon",
  ];
  let randomCorrectMsg =
    arrayCorrectMsg[Math.floor(Math.random() * arrayCorrectMsg.length)];
  function correct() {
    document.querySelector(".choosen-msg").innerHTML = `${randomCorrectMsg}`;
  }
  ///////////////////////////////////////
  function gameOver() {
    document.querySelector(
      ".choosen-msg"
    ).innerHTML = `The word Is [ ${theChoosen} ] ...Genius (':`;
  }
  ///////////////////////////////////////

  let status = false;
  if (e.target.className === "ltr") {
    e.target.classList.add("done");
    let doneLtr = e.target.innerHTML.toLowerCase();
    wordArray.forEach((ltr, ltrindx) => {
      if (doneLtr == ltr) {
        status = true;
        letterGuessSpan.forEach((span, spnindx) => {
          if (ltrindx === spnindx) {
            success++;
            span.innerHTML = doneLtr;
          }
        });
      }
    });
    if (success === wordArray.length) {
      alphaLtrDiv.classList.add("game-over");
      document.getElementById("win").play();
      document.querySelector(".play-again").style.display = "block";
    }
    if (status === false) {
      wrongTries++;
      mistake();
      document.getElementById("wrong").play();
      drow.classList.add(`w-${wrongTries}`);
      if (wrongTries === 6) {
        alphaLtrDiv.classList.add("game-over");
        gameOver();
        document.getElementById("game-over").play();
        document.querySelector(".play-again").style.display = "block";
      }
    } else {
      correct();
      document.getElementById("correct").play();
    }
  }
});
document.querySelector(".play-again").addEventListener("click", (e) => {
  window.location.reload();
});

var random1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + random1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;

document.querySelector("img")[0].setAttribute("src", randomImageSource);

var random2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + random2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;

document.querySelector("img")[1].setAttribute("src", randomImageSource2);










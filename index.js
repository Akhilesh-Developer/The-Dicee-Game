var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSelector = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSelector);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomimageSelector2 = "Images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimageSelector2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "✌1️⃣Player 1 wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "✌2️⃣Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "😝Match Draw!"
}


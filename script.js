var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");

function handling(key) {
  switch (key) {
    case "a":
      tom1.play();
      break;
    case "s":
      tom2.play();
      break;
    case "d":
      tom3.play();
      break;
    case "f":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kickBass.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    handling(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  handling(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

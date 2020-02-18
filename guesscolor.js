var numbersOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay')
var msgDisplay = document.querySelector("#msg")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset" );
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// mode Buttons event listenner
	for (var i = 0; i < modeButtons.length; i++) {
	  modeButtons[i].addEventListener("click", function() {
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
		  this.classList.add("selected");
       
          this.textContent === "Easy" ? numbersOfSquares = 3: numbersOfSquares = 6;

	reset();

	  });
    };

    for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
	squares[i].addEventListener("click", function() {
	  // grab color of clicked square
	  var clickedColor = this.style.background;
	  // compare color to pickedColor
	  if (clickedColor === pickedColor) {
		  msgDisplay.textContent = "CORRECT!";
		  resetButton.textContent = "play Again?"
		  changeColors(clickedColor);
		  h1.style.background = clickedColor;
	  } else {
		  this.style.background = "#232323";
          msgDisplay.textContent = "Try Again";
	}
	});

	reset();
}
}



function reset() {
	// generate all new colors
	colors = generateRandomColors(numbersOfSquares);
	// picka new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors"
	msgDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none"
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});



function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
	// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr =[];
	// repeat num times
	for (var i = 0; i < num; i++) {
	    // get random color and push into arr 
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g =Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
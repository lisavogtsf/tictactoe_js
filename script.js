
// javascript for tic tac toe
// by Lisa Vogt, https://github.com/lisavogtsf/tictactoe_js

window.onload = function() {

	//alert("javascript");
	// true is X's turn
	var turn = true;
	var reset = document.getElementById("reset");
	var displayNext = document.getElementById("displayNext");
	displayNext.innerHTML = "X";
	// put box elements into array
	var boxes = document.getElementsByClassName("box");

	// reset affects class
	reset.onclick = function(event) {
		//	alert("reset");
		for(var j = 0; j < boxes.length; j++){
			boxes[j].className = "box";
			boxes[j].innerHTML = "";
		}
		displayNext.innerHTML = "X";
	}

	// actions for when boxes are clicked on
	// for loop makes sure all boxes are listening
	for(var i = 0; i < boxes.length; i++){
		boxes[i].onclick = function() {
			// react to clicks by marking X or O using class
			// once x or o class has been added, the item 
			// no longer has className box, it is box x
			// so a mark only goes up if the box is empty
			if (this.className === "box") {
				// put an X
				if (turn === true) {
					this.className += " x";
					this.innerHTML = "X";
					turn = false;
				} else {
					//put an O
					this.className += " o";			
					this.innerHTML = "O";
					turn = true;
				}
			}
			// displaying next player	
			if (turn === true) {
				displayNext.className += " x";
				displayNext.innerHTML = "X";
			} else if (turn === false) {
				displayNext.className += " o";			
				displayNext.innerHTML = "O";
			}
		}

	}















}

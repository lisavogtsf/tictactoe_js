
// javascript for tic tac toe

window.onload = function() {

	//alert("javascript");
	// true is X's turn
	var turn = true;
	var reset = document.getElementById("reset");
	var displayNext = document.getElementById("displayNext");
	// put box elements into array
	var boxes = document.getElementsByClassName("box");

// reset affects class
	reset.onclick = function(event) {
		//	alert("reset");
		for(var j = 0; j < boxes.length; j++){
			boxes[j].className = "box";
			boxes[j].innerHTML = "";
		}
	}


	for(var i = 0; i < boxes.length; i++){
		boxes[i].onclick = function() {

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

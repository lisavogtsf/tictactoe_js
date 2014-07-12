
// javascript for tic tac toe

window.onload = function() {

	//alert("javascript");
	// true is X's turn
	var turn = true;

	var boxes = document.getElementsByClassName("box");

	// boxes[0].onclick = function() {
	// 	this.innerHTML = "O";
	// };
	// boxes[1].onclick = function() {
	// 	this.innerHTML = "X";
	// };

	boxes[0].onclick = function() {
		// put an X
		if (turn == true) {
			this.class = "x";
			this.innerHTML = "X";
			turn = false;
		} else {
			//put an O
			this.class = "o";			
			this.innerHTML = "O";
			turn = true;
		}
	};














}

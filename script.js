alert("javascript");

window.onload = function() {
	var boxes = document.getElementsByClassName("box");

	boxes[0].onclick = function() {
		this.innerHTML = "O";
	};
}

(() => {
	console.log('fired');

	const theButton = document.querySelector("buttonHolder img");

	window.addEventListener("load", changeHeadline);

	function changeHeadline(){
		document,querySelector("h1"),textContent ="Hey there from JS";
		document,querySelector("p"),textContent ="this is the subhead";
	}
	// set up the puzzle pieces and boards
	// 
	theButton.addEventListener("click",changeHeadline);
	
})();


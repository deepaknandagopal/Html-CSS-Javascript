var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
	for(var i=0;i<numberOfFaces;i++)
	{
		var imgs = document.createElement("img");
		imgs.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		imgs.style.top = Math.floor(Math.random()*((theBody.clientHeight-100)/2));
		imgs.style.left = Math.floor(Math.random()*((theBody.clientWidth-200)/2));
		theLeftSide.appendChild(imgs);
	}
	var leftSideImages  = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
	theLeftSide.lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();
		numberOfFaces +=5;
		while(theLeftSide.lastChild)
		{
			theLeftSide.removeChild(theLeftSide.lastChild);
		}
		while(theRightSide.lastChild)
		{
			theRightSide.removeChild(theRightSide.lastChild);
		}
		generateFaces();
	}
	theBody.onclick = function gameOver() {
		alert("Game Over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;

	}

}
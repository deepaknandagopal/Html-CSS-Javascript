var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;
var colors =[ "aqua", "black", "cyan","darkgray","ivory",
"khaki","lightblue","lime","maroon","orange",
"red","white","yellow"];

var allcolors ="";

for(var i=0;i<colors.length; i++)
{
	if(i==0)
		allcolors = colors[i];
	else
		allcolors = allcolors + ", " + colors[i];
}

console.log(allcolors);

function do_game() {
	var random_number = Math.random() * 12;
	var random_number_integer = Math.floor(random_number);
	target = colors[random_number_integer];

	alert("The color i am thinking is:\n\n"+target);

	while (!finished) {
		guess_input_text = prompt("I am thinking of one these colors:\n\n"+
								  allcolors+"\n\n"+
								  "What color am I thinking of");
		guesses += 1;
		finished = check_guess();
	}
}

function check_guess() {
	var regonizedColor = false;
	for(var i=0;i<colors.length; i++) {
		if (guess_input_text == colors[i])
		{
			regonizedColor = true;
		}
	}
	if(regonizedColor==false)
	{
		alert("I don’t recognize that color!");
		return false;
	}
	else if(target < guess_input_text)
	{
		alert("Your input is alphabetically higher than mine!");
		return false;
	}
	else if (target > guess_input_text) {
		alert("Your input is alphabetically lower than mine!");
		return false;
	}
	else if(target==guess_input_text) {
		alert("Congratulations! You have guessed the color!" +
			"\n\nIt took you " + guesses + " to finish the game! \n\n" +
			"You can see the color in the background.");
		myBody = document.getElementsByTagName("body")[0];
		myBody.style.background = target;
		return true;
	}
}
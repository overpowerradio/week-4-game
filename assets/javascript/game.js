// Creating a variable for all 4 characters to choose from
var charList = []; 

//Creating a variable for the character the user chooses/clicks on
var myCharacter;

//Creating a variable to store the remaining 3 characters as enemies
var enemyLineUp = [];

//Creating a variable/boolean (true/false) I can use to limit/lock in a function (below). Once I clicks a character it becomes "My Character" and is moved to the appropriate <div>. A boolean (true/false) variable will help me classify the user's character choice and write conditional statements (if, else if, else) so that if another character is clicked afterwards, it will not become "My Characacter". 

var isPicked = false; //means nothing has been picked

var battlingNow = false; //means there is no enemy in the fight section of the game.

var opponent;

//(dot each) .each  is a simple to way to write a loop using jQuery. I can still use "i" as a variable to loop through arrays and strings by their index. 
$(".characters").each(function (i) {

	charList[i] = $(this)
		//This is assigning all of the image files in the .characters class to my (charList) variable.

		// console.log(i);
		// console.log($(this).attr("src"));
})



//Here is where I write conditional statements, so when I click on a character in (charList), the character will become "myCharacter" and move to <div id="yourCharacter"> on the html page and simultaneiouly defining the enemyLineUp and putting the enemy images in their appropriate <div>

$(".characters").on("click", function() {
	

	if (isPicked === false){
		// Only if isPicked = false (meaning, I haven't chosen a character), will the system allow the next step.. 

		myCharacter = $(this);

		//...to make the character that I click on become (myCharacter).
		

		isPicked = true;

		// Now that I've picked a character, I can state [isPicked = true] and write 'for loops', conditionals, and functions that only applies once a character has been selected.

		for (var i = 0; i < charList.length; i++) {

		// If an index in the array of charList is not equal to what I clicked on, I want those arrays to be pushed into the variable I created for my (enemyLineUp).  ** I had to ad id tags on each image, because without it jQuery wasn't able compare the images and determine if they were different or equal, so...

				if ( charList[i].attr("id") !== $(this).attr("id") ) {
			
				enemyLineUp.push(charList[i])

				}
		}
		//console.log(enemyLineUp); to check that it works
		//console.log(myCharacter); to check that it works

		$("#enemies").append(enemyLineUp); 
		//Once the click is executed, this appends the #enemies <div> and puts the enemyLineUp images there.
		$("#yourCharacter").append(myCharacter); 
		//Once the click is executed, this appends the #yourCharacter <div> and puts the enemyLineUp images there.

		$(".characters").on("click", function() {

		for (var i = 0; i < enemyLineUp.length; i++) {

			if (battlingNow === false || ispicked === true || $(this).attr("id") === enemyLineUp[i].attr("id") || $(this).attr("id") !== myCharacter.attr("id")){

			opponent = $(this);

			battlingNow = true;
			
			alert("you're battling now!");
			
			$("#offender").append(opponent);
			
			}

		}

	})

		//Here I'm attempting to utilize variable to isolate the opponent and move the select image to the <div id="offender">.
		
	}
	//else { code to run on all subsequent clicks }
	

}) 


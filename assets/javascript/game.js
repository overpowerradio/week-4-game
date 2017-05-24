
var charList = []; // all images within the .character class
var enemyLineUp = [];
 //whatever image we clicked on
var myCharacter;
var isPicked = false;

$(".characters").each(function (i) {
//All the images in the .character class should be put into the charList variable.
charList[i] = $(this)
//charList = (this);
	// console.log(i);
	// console.log($(this).attr("src"));
})

console.log(charList);

//When a character is clicked
//That character should become "myCharacter"
//And move to the "#yourCharcter" div
$(".characters").on("click", function() {
	if (isPicked === false){
		myCharacter = $(this);
		isPicked = true;
		for (var i = 0; i < charList.length; i++) {

			if ( charList[i].attr("id") !== $(this).attr("id") ) {
				//this will only run IF it is NOT myCharacter
				enemyLineUp.push(charList[i])

			}
		}
		console.log(enemyLineUp);
		console.log(myCharacter);
		$("#Enemies").append(enemyLineUp);
		$("#yourCharacter").append(myCharacter);

	//else {
		//code to run on all subsequent clicks
	//}
	}


})

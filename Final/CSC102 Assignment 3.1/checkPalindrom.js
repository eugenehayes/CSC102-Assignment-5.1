//Palindrom Checker ie: if a string is a palindrom or not
function checkPalindrom() {

// gets user input that was put into text field
    let input = document.getElementById("userInput").value; 

// we want to remove capitolization and spaces to normalize text
    let correctedText = input.replace(/\s+/g, '').toLowerCase(); // removes one or more instances of whitespaces and continues througout string. Makes the string ONLY letters and makes all characters lowecase

// create a variable for the altered text but backwards
    let backwardsInput = correctedText.split('').reverse().join(''); // split turns the string into an array of substrings, reverse the order of the array, put the string back together

// check if the corrected input is the same as the backwards input
    if(correctedText === backwardsInput) {
        alert("That's correct! " + "'" + input + "'" + " is a palindrom. You can enter another if you want and I'll check it.");
    } else {
        alert("Sorry, " + "'" + input + "'" + " is not a palindrom. You can try again if you want and I'll check it.");
    }

// Clear the text field so the user can enter another palindrom
    document.getElementById("userInput").value = '';

}
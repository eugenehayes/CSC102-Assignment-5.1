//Palindrom Checker ie: if a string is a palindrom or not
function checkPalindrom() {

// gets user input that was put into text field
    let input = document.getElementById("userInput").value; 

// we want to remove capitolization and spaces to normalize text
    let correctedText = input.replace(/\s+/g, '').toLowerCase(); // removes one or more instances of whitespaces and continues througout string. Makes the string ONLY letters and makes all characters lowecase

// create a variable for the altered text but backwards
    let backwardsInput = correctedText.split('').reverse().join(''); // split turns the string into an array of substrings, reverse the order of the array, put the string back together

// hidden button element
    let secretButton = document.getElementById("secretButton");

// check if the corrected input is the same as the backwards input
    if(correctedText === backwardsInput) {
        alert("That's correct! " + "'" + input + "'" + " is a palindrom. You can enter another if you want and I'll check it.");
        secretButton.style.display = "block";
    } else {
        alert("Sorry, " + "'" + input + "'" + " is not a palindrom. You can try again if you want and I'll check it.");
    }

// Clear the text field so the user can enter another palindrom
    document.getElementById("userInput").value = '';

}

// To reveal secret section on display
function revealSecret() {
    let hiddenSection = document.getElementById("hiddenSection");

    hiddenSection.style.display = "block";
    header.style.display = "none";
    palindromBob.style.display = "none";
    normal.style.display = "none";
}

// Checking first and last name
function checkInfo() {
    let firstName = document.getElementById("nameInput").value;

    let lastName = document.getElementById("lastName").value;

    let zipCode = document.getElementById("zipCode").value;

    let fullName = (firstName + lastName);

    let realName = fullName.replace(/\s+/g, '').toLowerCase();

    if(realName.length > 20) {
        alert("Shorten your name to be under 20 characters.");
    }else {
        hiddenZipCode.style.display = "block";
    }
}

// checking zipcode to ensure 5 digits and all numbers
function checkZip() {
    let zipCode = document.getElementById("zipCode").value;

    let firstName = document.getElementById("nameInput").value;

    let lastName = document.getElementById("lastName").value;

    let fullName = (firstName + " " + lastName);

    let realName = fullName.replace(/\s+/g, '').toLowerCase();

//if  statement  for  zipcode and print secret message
    if (!/^[0-9]{5}$/.test(zipCode)) {
    }else {
        overall.style.display = "none";
        
        printToHtml(firstName, lastName, zipCode);

    }
}
//function for secret message
function printToHtml(firstName, lastName, zipCode) {
            document.getElementById("secretMessage").innerHTML = "Hello, " + firstName + " " + lastName + " from " + zipCode + ". Here's your message: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. the mets will win the world series, place your bets.'";
        }



    



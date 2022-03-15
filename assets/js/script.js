// Turns start btn into generate btn
var generateBtn = document.querySelector('#start');

// Setting variables for available password characters
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '_', '<', '>', '.', '/',]; 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  
// Function initiates password generation process
function inputPassword() {
    // Prompt user for desired password length
    var input = parseInt(prompt('How long would you like your password to be?'));
  
    // Check user inputs
      // Is user input is at least 8 characters?
      // Combine if statements for refactoring
    if (input < 8 || input > 128) {
        // If not
      alert('ERROR\n(Password must contain 8-128 characters)');
      return null;
    }
  
    // Is user input a number?
    if (Number.isNaN(input)) {
        // If not
        alert('Please enter a valid number (8-128)');
        return null;
    }

    // Confirmation windows for user to specify password characters
    var hasSpecialChar = confirm('Would you like special characters? Click OK to confirm.');

    var hasNumbers = confirm('Would you like numbers? Click OK to confirm.');
  
    var haslowercase = confirm('Would you like lowercase characters? Click OK to confirm.');
  
    var hasUppercase = confirm('Would you like uppercase characters? Click OK to confirm.');
  
    // Conditional to check if user has selected at least one type of character
    if (
      hasSpecialChar === false &&
      hasNumbers === false &&
      haslowercase === false &&
      hasUppercase === false
    ) {
      alert('Please select at least one character type');
      return null;
    }
  
    // stores user input
    var passwordOptions = {
      length: input,
      hasSpecialChar: hasSpecialChar,
      hasNumbers: hasNumbers,
      haslowercase: haslowercase,
      hasUppercase: hasUppercase,
    };
  
    return passwordOptions;
  }
  
  // Randomizes the selection of elements from array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  // generate password based on user's password criteria
  function generatePassword() {
    var options = inputPassword();
    // Array of 
    var present = [];
  
    // Array of potential passwords based on criteria
    var potentialPW = [];
  
    // Array containing final password based on criteria
    var finalPW = [];
  
    // Check if an options object exists, if not exit the function
    if (!options) return null;
  
    // If user accepts specialCharacters, include the array
    if (options.hasSpecialChar) {
      potentialPW = potentialPW.concat(specialChar);
    //   Adds special characters to final password array
      finalPW.push(getRandom(specialChar));
    }
  
    // If user accepts numbers, include the array
    if (options.hasNumbers) {
      potentialPW = potentialPW.concat(numbers);
    //   Adds numbers to final password array
      finalPW.push(getRandom(numbers));
    }
  
    // If user accepts lowercase letters, include the array
    if (options.haslowercase) {
      potentialPW = potentialPW.concat(lowercase);
    //   Adds lowercase letters to final password array
      finalPW.push(getRandom(lowercase));
    }
  
    // If user accepts uppercase letters, include the array
    if (options.hasUppercase) {
      potentialPW = potentialPW.concat(uppercase);
      finalPW.push(getRandom(uppercase));
    }
  
    // Selects random elements from the potential passwords array and adds them to our results
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(potentialPW);
  
      present.push(possibleCharacter);
    }
  
    // Adds least one of each input character from the finalPW to the result
    for (var i = 0; i < finalPW.length; i++) {
      present[i] = finalPW[i];
    }
  
    // turns results into a string
    return present.join('');
  }
  
  // Display results in textbox
  function writePassword() {
    var password = generatePassword();
    var passwordContent = document.querySelector('#password');
  
    passwordContent.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
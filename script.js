// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = String(lowerCase).toUpperCase().split(",");
var special = ["!", "?", "#", "@", "^", "%", "&", "*", "(", ")", "|", "}"];
var number = ["1", "2", "3", "4", "5", "6","7", "8", "9", "0"];
var password = [];
var finalPassword = [];

//length of password
var length = prompt("How long do you want your password to be? Choose a whole number between 8 and 128"); 

 //Randomly generates from array
 function random(char) {
return Math.floor(Math.random() * (char.length - 1));
    }
 
// creates the random variables
//var randomls = random(lowerCase);
// var randomuc = random(UpperCase);
// var randomspec = random(special);
//var randomnum = random(number);

function confirmFunction() {
    
  var x =  confirm("Do you want lower characters?");
  if(x === true) {
    //   find target array, choose method, content to be pushed into array
    //    target = password, method = push, content = randomls
      password.push(lowerCase);
      //confirmUpperCase();
      //confirmSpecial();
      //confirmNumber();
      return password;
  } else {
      console.log("run next quesiton function");
  }
}

function confirmUpperCase() {
    var y = confirm("Do you want uppercase characters?");
    if (y === true) {
        password.push(UpperCase);
        return password;
    }
}

function confirmSpecial() {
    var y = confirm("Do you want special characters?");
    if (y === true) {
        password.push(special);
        return password;
    }
}

function confirmNumber() {
    var y = confirm("Do you want numerical characters?");
    if (y === true) {
        password.push(number);
        return password;
    }
}

confirmFunction()
confirmUpperCase();
confirmSpecial();
confirmNumber();


console.log(password);

for (var i = 0; i < length; i++) {
   var finalRandom = Math.floor(Math.random() * 4);
   console.log("This is" + finalRandom);
   //this is next
    if (finalRandom === 0 ) {
    var randomnum = random(number);
     if (password.indexOf('1')) {
     finalPassword.push(number[randomnum]);
    }
    }
    else if (finalRandom === 1) {
        var randomls = random(lowerCase);
        if (password[lowerCase].indexOf("a") === -1 ) {
        finalPassword.push(lowerCase[randomls]);
        }
    }
    else if (finalRandom === 2) {
        var randomuc = random(UpperCase);
        finalPassword.push(UpperCase[randomuc]);
    }
    else if (finalRandom === 3) {
        var randomspec = random(special);
        finalPassword.push(special[randomspec]);
    }
   
}
// and array password contains variable (maybe use a,A,!,1) look at farm loop that used "c" || "o"

console.log(length);
console.log(password);
console.log(finalPassword);

// if whatever > number choices keep looping


// Write password to the #password input
//function writePassword() {
  //if (length === >7 && length === <129) {
  //alert(finalPassword)

  //passwordText.value = password;
  //}
  //else {
    //alert("Please choose a valid password length");
  //}

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

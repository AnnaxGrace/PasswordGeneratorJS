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
    
  var yesLower =  confirm("Do you want lower characters?");
  if(yesLower === true) {
      password.push(lowerCase);
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
   
    if (finalRandom === 0 ) {
      var randomnum = random(number);
      var numArray = false;
      for (var n = 0; n < password.length; n++) {
        if (password[n].indexOf("1") > -1 ) {
        numArray = true
        }
      }
      if (numArray === true) {
        finalPassword.push(number[randomnum]);
      }
      else {
       i--
      }
      
    }
    
    else if (finalRandom === 1) {
        var randomls = random(lowerCase);
        var lowerArray = false;
        for (var j = 0; j < password.length; j++) {
          if (password[j].indexOf("a") > -1 ) {
            lowerArray = true;
          }

        }
        if (lowerArray === true) {
        finalPassword.push(lowerCase[randomls]);
        }
        else {
          i--;
        }
    }
        
    
    else if (finalRandom === 2) {
        var randomuc = random(UpperCase);
        var upperArray = false;
        for (var k = 0; k < password.length; k++) {
          if (password[k].indexOf("A") > -1 ) {
            upperArray = true
          }

        }
        if (upperArray === true) {
        finalPassword.push(UpperCase[randomuc]);
        }
        else {
          i--
        }
    }

    else if (finalRandom === 3) {
        var randomspec = random(special);
        var specialArray = false;
        for (var m = 0; m < password.length; m++) {
          if (password[m].indexOf("!") > -1 ) {
            specialArray = true
          }

        }
        if (specialArray === true) {
        finalPassword.push(special[randomspec]);
        }
        else {
          i--
        }
    }
        
}

console.log(length);
console.log(password);
console.log(finalPassword);


var generate = String(finalPassword).split(",");


function writePassword() {
  if (length > 7 && length < 129) {
  alert(generate);
  }
  else {
    alert("Please choose a valid password length");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

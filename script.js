

var generateBtn = document.querySelector("#generate");

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = String(lowerCase).toUpperCase().split(",");
var special = ["!", "?", "#", "@", "^", "%", "&", "*", "(", ")", "|", "}"];
var number = ["1", "2", "3", "4", "5", "6","7", "8", "9", "0"];

var password = [];
var finalPassword = [];




function random(char) {
  return Math.floor(Math.random() * (char.length - 1));
}

function confirmFunction() {
    
  var yesLower =  confirm("Do you want lowercase characters?");
  if(yesLower === true) {
      password.push(lowerCase);
      return password;
  }
}

function confirmUpperCase() {
    var yesUpper = confirm("Do you want uppercase characters?");
    if (yesUpper === true) {
        password.push(UpperCase);
        return password;
    }
}

function confirmSpecial() {
    var yesSpecial = confirm("Do you want special characters?");
    if (yesSpecial === true) {
        password.push(special);
        return password;
    }
}

function confirmNumber() {
    var yesNumber = confirm("Do you want numerical characters?");
    if (yesNumber === true) {
        password.push(number);
        return password;
    }
}





generateBtn.addEventListener("click", function() {
  var length = prompt("How long do you want your password to be? Choose a whole number between 8 and 128"); 
  confirmFunction()
  confirmUpperCase();
  confirmSpecial();
  confirmNumber();
  if (password < 1) {
    alert("You must choose one, please start over");
    
  }
  else {
  for (var i = 0; i < length; i++) {
   var finalRandom = Math.floor(Math.random() * 4);
   
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

  var generate = finalPassword.join("");
  if (length > 7 && length < 129) {
    alert("Your password is " + generate);
    }
  else {
    alert("Please choose a valid password length");
    }
      
  }
  

});









//1. command line input to variable

var password = process.argv[2];


//2. create obfuscate function and result var

let obfuscate = function(password) {

  var result = "";

//3. replace a with 4, replace e with 3, replace o with 0, replace l with 1

  for (var i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      result += "4";
    }
    else if (password[i] === "e") {
      result += "3";
    }
    else if (password[i] === "o") {
      result += "0";
    }
    else if (password[i] === "l") {
      result += "1";
    } else {
      result += password[i];
    }
  }
  return result;
};

console.log(obfuscate(password));

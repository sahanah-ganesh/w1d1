//1. command line input to variable

var password = process.argv[2];


var replacements = {a: "4",
                    e: "3",
                    o: "0",
                    l: "1"};

var replacementCharacter = function(char) {
  return (replacements[char] || char);
};


//2. create obfuscate function and result var

let obfuscate = function(password) {

  var result = "";

//3. replace a with 4, replace e with 3, replace o with 0, replace l with 1

  for (var i = 0; i < password.length; i++) {
    result += replacementCharacter(password[i]);
  }
  return result;
};

console.log(obfuscate(password));

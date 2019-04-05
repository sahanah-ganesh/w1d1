var input = process.argv.slice(2);

var inputArr = [];

for (var i = 0; i < input.length; i++) {
  inputArr.push(translatePig(input[i]));
}

console.log(inputArr.join(" "));

function translatePig(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}



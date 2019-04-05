var input = process.argv.slice(2);

function reverseSubStr(input) {
  var end = input.length - 1;
  var reversedSubStr = "";
  while (end >= 0) {
    reversedSubStr += input[end];
    end--;
  }
  return reversedSubStr;
}

function reverseStr(input) {
  var firstStr = input;
  var newStr = "";
  var subStr = "";
  for (var i = 1; i <= firstStr.length; i++) {
    subStr += firstStr[i - 1];
    newStr += reverseSubStr(subStr) + " ";
    subStr = "";
  }
  return newStr += subStr;
}
console.log(reverseStr(input));

/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
//var conceptList = [];


var joinList = function (conceptList) {

  var result = "";

  for (var i = 0; i < conceptList.length - 1; i++) {
    result += conceptList[i] + ", ";
  }
  result += conceptList[conceptList.length - 1];

  return result;
};

console.log("Today I learned about " + joinList(conceptList) + ".");


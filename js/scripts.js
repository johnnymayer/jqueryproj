//Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

var sentence = prompt("Please enter a sentence.");

var letterOne = sentence.charAt(0).toUpperCase();
var letterTwo = sentence.charAt(sentence.length-1).toUpperCase();

var sentence3 = letterOne+letterTwo;

/*
var firstLetter = sentence2().empty(/^(\w)/, function(v) { return v.toUpperCase(); })
var secondLetter = sentence2().empty(/\w(?=[^\w]*$)/, function(v) { return v.toUpperCase(); })
var sentence3 = firstLetter + secondLetter;
*/

$(document).ready(function() {
  $("body").append(sentence3);
});

// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

var sentence = prompt("Please enter a sentence.");

var sentence2 = sentence
  .replace(/^(\w)/, function(v) { return v.toUpperCase(); })
  .replace(/\w(?=[^\w]*$)/, function(v) { return v.toUpperCase();

});

/*
var firstLetter = sentence2().empty(/^(\w)/, function(v) { return v.toUpperCase(); })
var secondLetter = sentence2().empty(/\w(?=[^\w]*$)/, function(v) { return v.toUpperCase(); })
var sentence3 = firstLetter + secondLetter;

$(document).ready(function() {
  $("body").append(sentence3);
});
  //Create another function that will reverse the order of these two letters and return the result.
    //match and replace $1 for $2 and vice versa
    //can you store matches as variables


/*
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("body").hover(function() {

    $("body").css("transform", "rotate("+i+"deg)");
  });
});

$('img').each(function () {
  var hovered = false;
  var loop = window.setInterval(function () {
    if (hovered) {
      $("img").css("transform", "rotate("+i+"deg)");
      i = i + 1;
    }
  }, 250);

  $(this).hover(
    function () {
      hovered = true;
    },
    function () {
      hovered = false;
    }
  );
});


var i = 0;
function doSomethingRepeatedly(){
  $("img").css("transform", "rotate("+i+"deg)");
  i = i + .01;
 }

 var intervalId;

 $(document).ready(function () {

   $("img").ready(function () {
     var intervalDelay = 1;
     // call doSomethingRepeatedly() function repeatedly with 10ms delay between the function calls
     intervalId = setInterval(doSomethingRepeatedly, intervalDelay);
   }, function () {
     // cancel calling doSomethingRepeatedly() function repeatedly
     clearInterval(intervalId);
   });

 });
*/

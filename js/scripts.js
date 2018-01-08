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

/*
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

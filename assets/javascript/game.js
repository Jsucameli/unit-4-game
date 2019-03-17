var randomNum = Math.floor(Math.random() *(120 - 19) + 19);
var wins = 0;
var losses = 0;
var scoreCounter = 0;
console.log(randomNum)

var blue = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var purple = Math.floor(Math.random() * 12) + 1;
var rainbow = Math.floor(Math.random() * 12) + 1;

$("#targetScore").text("Target Score: " +  randomNum);
console.log(randomNum)

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

$("#blueCrystal").on("click", function(){
  scoreCounter += blue;
  $("#yourScore").text("Your score: " + scoreCounter)
  wlCounter()
  console.log(blue)
})
$("#greenCrystal").on("click", function(){
  scoreCounter += green;
  $("#yourScore").text("Your score: " + scoreCounter)
  wlCounter()
  console.log(green)
})
$("#purpleCrystal").on("click", function(){
  scoreCounter += purple;
  $("#yourScore").text("Your score: " + scoreCounter)
  wlCounter()
  console.log(purple)
})
$("#rainbowCrystal").on("click", function(){
  scoreCounter += rainbow;
  $("#yourScore").text("Your score: " + scoreCounter)
  wlCounter()
  console.log(rainbow)
})

function wlCounter() {
  if(scoreCounter == randomNum){
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("you win");
    console.log(wins);
    reset();
  }
  if(scoreCounter > randomNum){
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("you lose");
    console.log(losses);
    reset();
  }
}
function reset() {
  var randomNum = Math.floor(Math.random() *(120 - 19) + 19)
  console.log(randomNum);
  var blue = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var purple = Math.floor(Math.random() * 12) + 1;
  var rainbow = Math.floor(Math.random() * 12) + 1;
  scoreCounter = 0;
  $("#targetScore").text("Target Score: " +  randomNum);
}

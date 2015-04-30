var counter = 0
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var reset = document.querySelector("#reset")

var intervalCount

start.addEventListener('click', startTimer)
function startTimer(){
   intervalCount = setInterval(function(){
    document.querySelector("h1").innerHTML = "Time Elapsed: " + counter
  //   if (pause.addEventListener('click', function(){
  //     return counter
  //           }))
  // {
  //     counter
  //   }else{
      counter++
  //
  }, 1000)
}

// pause.addEventListener('click', pauseTimer)
// function pauseTimer(){
//   var pausedCounter = counter
//   document.querySelector("h1").innerHTML = "Time Elapsed: " + pausedCounter
// }
//
pause.addEventListener('click', pauseTimer )
function pauseTimer(){
  clearInterval(intervalCount)
}

reset.addEventListener('click', resetTimer )
function resetTimer(){
  clearInterval(intervalCount)
  document.querySelector("h1").innerHTML = "Stop Watch"
  counter = 0
}

// clearInterval(intervalCount)
//User presses start
  //seconds begin to count upward where the stop watch text is
//User presses pause
  //the seconds counter pauses
//User presses reset
  //this will clear the seconds counter located at the top to...?

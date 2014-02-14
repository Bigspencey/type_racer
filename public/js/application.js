window.addEventListener("load", initialize)

function initialize() {
  Game.listen()
}


//Closure
var Game = (function() {
  var correctCounter = 0


  return {
    listen: function () {
      console.log("this is me outside event listener", this)
      var self = this
      var input = document.getElementById('input-field')
        console.log("this is me inside event listener", this)
        input.addEventListener('keypress', self.keyPressed)
    },

    keyPressed: function (event) {
      var total = document.getElementsByTagName('span').length
      console.log("This is the total ammount of letters    " + total)
      var letter = document.getElementsByTagName('span')[correctCounter]
      if (event.keyCode === letter.innerText.charCodeAt(0)) {
        correctCounter += 1
        console.log(true)
        if (correctCounter === total) {
          window.location.href = "http://movies.netflix.com/WiMovie/House_of_Cards/70178217?trkid=13462050"

        }
      } else {
        console.log(false)
      }
    }
  }
})()
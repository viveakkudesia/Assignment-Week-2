// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startCounter() {
  for (let i = 0; i <= 10; i++) { // Change 10 to however many counts you want
    setTimeout(function() {
      console.log(i);
    }, i* 1000); // Delay is i seconds (1000 milliseconds per second)
  }
}

startCounter();






































































(Hint: setTimeout)

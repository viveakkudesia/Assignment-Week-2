## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
##Code 
function counter(n){
  
  let IntervalID=setInterval(function(){
    console.log(n);
    n--;
    if(n<0){
      clearInterval(IntervalID);
    }
  },1000);
}

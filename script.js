/* clousure questino 1 */  
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// clousure question 2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();

//closure question 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }
/*4.Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.*/
function length(l){
    function width(w){
        return l*w;
    }
    return width(10)
}
let Area_of_rectangle=length(10)
console.log("Area_of_rectangle",Area_of_rectangle);

/* 5.Take a variable in outer function and create an inner function to increase the counter every time it is called*/
function outer()
{
    let counter=0;
    function inner(){
     return counter+=1;
    }
    return inner;
}
let counter=outer()
console.log(counter());
console.log(counter());
console.log(counter());

/* closure question 6*/
var a = 12;
(function () {
  alert(a);
})();

/* closure question 7*/

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
/* closure question 8*/
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

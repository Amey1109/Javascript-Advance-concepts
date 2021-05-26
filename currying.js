//* Currying is build with the help of closures

//* Currying function has  'n' number of arguments and function

//! This is Simple Closure
function addFirst(first) {
  function addSecond(second) {
    return first + second;
  }

  return addSecond;
}

//!  Currying using Bind
function multiply(x, y) {
  return x * y;
}

let multiplyByTwo = multiply.bind(this, 2); //* Creating the copy of the Multiply Method
// console.log(multiplyByTwo(3));

//! Currying using function Closure
function divide(denomenator) {
  function number(numerator) {
    return numerator / denomenator;
  }

  return number;
}

let divideBy2 = new divide(2);

// 


function A(...n) {
  function B(...m) {
    return n.concat(m);
  }

  return B;
}

let ListA = new A(1, 2);

console.log(ListA(3, 4));

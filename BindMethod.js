//! Returns me a function

let num_data = {
  num1: 1,
};

function add(n) {
  return this.num1 + n;
}

let addTwo = add.bind(num_data, 2); //returns a copy of the function

let addThree = add.bind(num_data, 3);


console.log(addTwo());
console.log(addThree());


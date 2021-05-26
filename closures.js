//* In JS anything defined outside is available in inside the function beacuase the JS uses lexical scoping
//! These are closure (Any variable that we're using from outside the scope is the simplest form of closure)

// var passed = 3;
// const addTo = () => {
//   let inner = 2;
//   return inner + passed;
// };
// console.log(addTo());

const addTo = function (passed) {
  const add = function (inner) {
    return passed + inner;
  };

  return add;
};

var addTwo = new addTo(2);
var addFour = new addTo(4);


// console.log(addTwo(1));
// console.log(addFour(1));



// function addSalutaion(salutation) {
//   function getName(name) {
//     return salutation + "." + name;
//   }

//   return getName;
// }

// var Mr = new addSalutaion("MR")
// var Ms = new addSalutaion("MS")

// console.log(Mr("Amey Bhogaonkar"))
// console.log(Ms("Kate Winslet"))



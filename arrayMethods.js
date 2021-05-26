const items = [
  { name: "Bike", price: 100 },
  { name: "Computer", price: 200 },
  { name: "TV", price: 90 },
  { name: "Book", price: 150 },
  { name: "Keyboard", price: 50 },
  { name: "Speaker", price: 30 },
  { name: "Mouse", price: 45 },
];

//! FILTER
// The Filter takes in a function which return true or false base don the conditon
// in the function below the items are ony returned whose price greater or equal to 100
//It makes an new array
const filteredItems = items.filter((item) => item.price >= 100);

//! MAP
//Adding a new field to the items array which is Purchased which is a boolean field
const buyedItems = items.map((item) => {
  return { ...item, purchased: false };
});

// toggling the purchased field for Computer,Keyboard,Mouse
const purchased = buyedItems.map((item) => {
  if (
    item.name == "Computer" ||
    item.name == "Keyboard" ||
    item.name == "Mouse"
  ) {
    return { ...item, purchased: true };
  } else {
    return item;
  }
});

//! FIND
//Returns the first found item from the array
const foundItem = items.find((item) => {
  return item.name === "Bike";
});

//! FOR EACH
// Does not return Anything
items.forEach((item) => {
  //console.log(item.name);
});

//! SOME
// It returns us the true or false values if anything in the array satisfies the conditon
//It's like an any method it will return true if any of the items satisfies the conditon or it'll return false
const hasExpensiveItems = items.some((item) => {
  return item.price >= 100;
});

// console.log(hasExpensiveItems);

//! EVERY
//Unlike Some it checks with all the items and return true or false based on that
const hasEveryItemLessThanEqualsTo100 = items.every((item) => {
  return item.price <= 100;
});

// console.log(hasEveryItemLessThanEqualsTo100);

//! REDUCE

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

// console.log(total);

//? Takes 'n' number of argument which is in the form of list
function getAverage(...n) {
  let average =
    n.reduce((currentTotal, item) => {
      return currentTotal + item;
    }, 0) / n.length; //* Returns the average of n numbers

  return average;
}

let cars = ["BMW", "Mercedes", "Toyota", "Mazda"];

Array.prototype.AppendIndex = function () {
  for(let i = 0 ; i< this.length ; i++){

    this[i] = i

  }
};


console.log(cars.AppendIndex())
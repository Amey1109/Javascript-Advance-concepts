let name_data = {
  firstName: "Amey",
  lastName: "Bhogaonkar",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// name_data.printFullName(); //* the printFullName is pointing to the name_data's firstName and lastName

let name = {
  firstName: "Sandesh",
  lastName: "Kadam",
};

// name_data.printFullName.call(name)  //* the printFullName is pointing to the name's firstName and lastName

let num_Data = {
  num1: 1,
  num2: 2,
};

function addThreeNumbers(third) {
  return this.num1 + this.num2 + third;
}

console.log(addThreeNumbers.call(num_Data, 1)); //! num_data is the object on which the function is called

//? <Function_name>.call(<Object on which you want to call the function>, (***optional {Function Parameters}))

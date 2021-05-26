//* Functions are First class Objects

let insideFunction = function()  {
  console.log("I'm called inside the function");
};

let outerFunction = function(callback)  {
    console.log("Inside outer Function")
    callback();
};


outerFunction(insideFunction)
const todos = [
  { task: "Water all the plants", completed: false },
  { task: "Get Groceries", completed: false },
  { task: "Cut Veggies", completed: false },
  { task: "Drink More water", completed: false },
];

let deleteTask = (items, value) => {
  updatedArray = items.filter((item) => {
    return item.task !== value;
  });

  return updatedArray;
};

let updateTask = (items, value) => {
  updatedArray = items.map((item) => {
    if (item.task == value) {
      return { ...item, completed: !item.completed };
    } else {
      return item;
    }
  });

  return updatedArray;
};


let analyticsData = [
  { date: "2021-03-16", Count: 4 },
  { date: "2021-03-17", Count: 3 },
  { date: "2021-03-18", Count: 3 },
  { date: "2021-03-19", Count: 2 },
  { date: "2021-04-16", Count: 1 },
];


let analyzedDate = analyticsData.map((item)=>{
  return item.date
})


let analyzedCount = analyticsData.map((item)=>{
  return item.Count
})


console.log("Dates: ", analyzedDate)
console.log("Count: ", analyzedCount)


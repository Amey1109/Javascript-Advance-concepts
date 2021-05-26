// let promiseToCleanRoom = new Promise(function (resolve, reject) {

//   isClean = true;
//   if (isClean) {
//     resolve("Clean");
//   } else {
//     reject("Not clean");
//   }

// });

// promiseToCleanRoom
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function cleanRoom() {
  const cleanRoomPromise = new Promise(function (resolve, reject) {
    isClean = true;
    if (isClean) {
      resolve("Room was Cleaned");
    } else {
      reject("Room was Not Cleaned");
    }
  });

  return cleanRoomPromise;
}

function throwGarbage(Message) {
  const throwGarbagePromise = new Promise(function (resolve, reject) {
    isGarbageThrown = true;
    if (isGarbageThrown) {
      resolve(Message + " and" + " Garbage was Removed");
    } else {
      reject(Message + " and" + " Garbage was Not Thrown");
    }
  });

  return throwGarbagePromise;
}

cleanRoom()
  .then((res) => {
    return throwGarbage(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

//! Example For movie Theatre
console.log("Person 1 : Shows Ticket");
console.log("Person 2 : Shows Ticket");

const FriendBringingTicket = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Person 3 : Shows Ticket");
  }, 3000);
});

FriendBringingTicket.then((response) => {
  console.log(response);
}).then((res) => console.log(res));

console.log("Person 4 : Shows Ticket");
console.log("Person 5 : Shows Ticket");

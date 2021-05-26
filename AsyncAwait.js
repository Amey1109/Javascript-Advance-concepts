function makeRequest(location) {
  let makeRequest = new Promise(function (resolve, reject) {
    console.log(`Making Request to ${location}`);

    if (location === "Google") {
      resolve("You've Reached Google");
    } else {
      reject("Google Cannot be Reached at the moment");
    }
  });

  return makeRequest;
}

function processRequest(response) {
  let processRequest = new Promise(function (resolve, reject) {
    console.log("Processing Request");

    resolve("Information => " + response);
  });

  return processRequest;
}

// makeRequest("Google")
//   .then((res) => {
//     console.log("Response Received");
//     return processRequest(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e));

// async function doWork() {
//   try {
//     const response = await makeRequest("Facebook");
//     console.log("Response was recevied");
//     const processedResponse = await processRequest(response);
//     console.log(processedResponse);
//   } catch (error) {
//     console.log(error);
//   }
// }

// doWork();

//* Which Problem Does ASYNC AWAIT solves ??
//? If there is async you should await

const A = () => {
  return "A is the First Alphabet";
};

const B = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B is the second Alphabet");
    }, 3000);
  });
};

const C = () => {
  return "C is the third Alphabet";
};

const getAlphabets = async () => {
  let ValueA = A();
  console.log(ValueA);

  let ValueB = await B();
  console.log(ValueB);

  let ValueC = C();
  console.log(ValueC);
};

getAlphabets();

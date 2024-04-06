//EX 1
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence. Start with a number, then add 5, multiply by 3, and finally subtract 2.

// Function to add 5 to a string
function addFive(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject("Input is not a string");
    } else {
      const result = num + 5;
      console.log(`Adding 5 to ${num}: ${result}`);
      resolve(result);
    }
  });
}

// Function to multiply a string by 3
function multiplyByThree(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject("Input is not a string");
    } else {
      const result = num * 3;
      console.log(`Multiplying ${num} by 3: ${result}`);
      resolve(result);
    }
  });
}

// Function to subtract 2 from a string
function subtractTwo(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject("Input is not a string");
    } else {
      const result = num - 2;
      console.log(`Subtracting 2 from ${num}: ${result}`);
      resolve(result);
    }
  });
}

// Starting string
const startingstring = 30;

// Chain of promises
// addFive(startingstring)
//   .then(multiplyByThree)
//   .then(subtractTwo)
//   .then((finalResult) => {
//     console.log("Final result EX1:", finalResult);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//EX2
// Write a promise chain that takes a string, converts it to uppercase, then reverses it, and finally appends the string "-finished" at the end. Log the final result.

function convertoUpperCase(string) {
  return new Promise((resolve, reject) => {
    if (!isNaN(string)) {
      reject("Input is not a string");
    } else {
      const result = string.toUpperCase();
      console.log(`To upperCase ${string}: ${result}`);
      resolve(result);
    }
  });
}

function reverse(string) {
  return new Promise((resolve, reject) => {
    if (!isNaN(string)) {
      reject("Input is not a string");
    } else {
      const result = string.split("").reverse().join("");
      console.log(`Reversing ${string}: ${result}`);
      resolve(result);
    }
  });
}

function appendFinish(string) {
  return new Promise((resolve, reject) => {
    if (!isNaN(string)) {
      reject("Input is not a string");
    } else {
      const result = string + " -finished";
      console.log(`Append to ${string}: ${result}`);
      resolve(result);
    }
  });
}

// Starting string
const string = "Hello";

// convertoUpperCase(string)
//   .then(reverse)
//   .then(appendFinish)
//   .then((finalResult) => {
//     console.log("Final result EX2:", finalResult);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//EX3
// Write a function compareToNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10 (reject otherwise)

const compareToNum = ({ num, isAboveNum }) => {
  return new Promise((resolve, reject) => {
    if (isAboveNum < num) {
      reject("Number is less than value");
    } else {
      resolve("Number is greater than value");
    }
  });
};
// compareToNum({ num: 10, isAboveNum: 5 }) //will reject
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//EX 4
// Simulate a delayed greeting with promises. First, wait 2 seconds, then log "Hello", wait another second, and log "World!". Each step should be done in a separate .then().

function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration < 0) {
        reject("Invalid duration");
      } else {
        resolve();
      }
    }, duration);
  });
}

// wait(2000)
//   .then(() => {
//     alert("Hello");
//     return wait(1000);
//   })
//   .then(() => {
//     alert("World");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//EX5
// Create a promise chain that attempts to parse JSON data. Use a try/catch block within a .then() method to handle JSON parsing errors. If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// Bonus
// Make an async await version

const jsonData = `{
    "company": "Apple",
    "location": "San Francisco",
    "employees": [
      {"name": "John", "position": "Engineer"},
      {"name": "Alice", "position": "Data Scientist"},
      {"name": "Bob", "position": "Researcher"}
    ],
    "foundedYear": 2015
  }`;

const parseJsonPromise = new Promise((resolve, reject) => {
  try {
    const parsedData = JSON.parse(jsonData);
    resolve(parsedData);
  } catch (error) {
    reject(error);
  }
});

parseJsonPromise
  .then((parsedData) => {
    console.log("Parsed JSON:", parsedData);
  })
  .catch((error) => {
    console.error("Invalid JSON");
  });

// Async version

async function parseJsonAsync(jsonData) {
  try {
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  } catch (error) {
    return error;
  }
}

async function handleParsing() {
  try {
    const parsedData = await parseJsonAsync(jsonData);
    console.log("Parsed JSON:", parsedData);
  } catch (error) {
    console.error("Invalid JSON");
  }
}

// Call the function to handle parsing
handleParsing();

//EX6

function resolveImmediate() {
  return Promise.resolve(25);
}

function resolveDelayed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(17);
    }, 2000);
  });
}
function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}
combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});

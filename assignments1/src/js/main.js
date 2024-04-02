import { contacts } from "../data/contacts.js";
console.log(contacts);
function sortedByLastName(array) {
  array.sort((el1, el2) =>
    el1.name.last.toUpperCase() > el2.name.last.toUpperCase() ? 1 : -1
  );
  return array;
}
const sortedArray = sortedByLastName(contacts.results);
console.log(sortedArray);

function reverseArray(array) {
  const result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
}
console.log(reverseArray(contacts.results));

function returnFirst5(array) {
  const result = array.slice(0, 5);
  return result;
}
console.log(returnFirst5(sortedArray));

function uniqueNames(array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    !result.includes(array[index].name.first) &&
      result.push(array[index].name.first);
  }
  return result;
}
console.log(uniqueNames(contacts.results));

function concatNames(array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(array[index].name.first + " " + array[index].name.last);
  }
  return result;
}
console.log(concatNames(contacts.results));

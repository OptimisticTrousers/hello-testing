function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
  }

  return [sum / array.length, min, max, array.length];
}

module.exports = {
  analyzeArray,
  reverseString,
  capitalize,
};

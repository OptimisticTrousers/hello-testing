const checkIfString = element => typeof element === "string"

const caesarCipher = (string) => {
    if(!checkIfString(string)){
        return 'ERROR'
    }
  const stringArray = string.split("");

  stringArray.forEach((element, index) => {
    if (element !== " ") {
      stringArray[index] = String.fromCharCode(string.charCodeAt(index) + 1);
    } if (element === "z") {
      stringArray[index] = "a";
    } if (element === "Z") {
      stringArray[index] = "A";
    }
  });

  return stringArray.join("");
};


module.exports = caesarCipher;

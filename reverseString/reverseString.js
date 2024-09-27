const reverseString = (string) => {

    if(typeof string === "string"){

        return string.split("").reverse().join("");
    }

    return 'ERROR';

};
module.exports = reverseString;

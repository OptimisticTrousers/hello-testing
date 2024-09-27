const calculator = {
  checkIfValid(x, y) {
    if (
      (typeof x !== "string" && typeof x !== "number") ||
      (typeof y !== "number" && typeof y !== "string")
    ) {
      return false;
    }
    return true;
  },
  add(x, y) {
    if (this.checkIfValid(x, y)) {
      return Number(x) + Number(y);
    }
    return "ERROR";
  },
  subtract(x, y) {
    if (this.checkIfValid(x, y)) {
      return Number(x) - Number(y);
    }
    return "ERROR";
  },
  multiply(x, y) {
    if (this.checkIfValid(x, y)) {
      return Number(x) * Number(y);
    }
    return "ERROR";
  },
  divide(x, y) {
    if (this.checkIfValid(x, y)) {
      return Number(x) / Number(y);
    }
    return "ERROR";
  },
};

module.exports = calculator;

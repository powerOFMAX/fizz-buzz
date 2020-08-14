/**
 *
 * @param {Array<number>} intsArray
 * @returns {Array<string>}
 */
function fizzer(intsArray = []) {
  const final = intsArray.map((item) => algorithm(item));
  return final;
}

const algorithm = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  if (n % 3 === 0 || (n + "").indexOf("3") > -1) {
    return "fizz";
  }
  if (n % 5 === 0 || (n + "").indexOf("5") > -1) {
    return "buzz";
  }
  return null;
};

module.exports = fizzer;

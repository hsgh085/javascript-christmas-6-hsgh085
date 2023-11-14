const numberUtils = {
  isNumber(value) {
    return !Number.isNaN(Number(value));
  },

  isNaturalNumber(value) {
    const number = parseFloat(value);
    return Number.isInteger(number) && number > 0;
  },
};
export default numberUtils;

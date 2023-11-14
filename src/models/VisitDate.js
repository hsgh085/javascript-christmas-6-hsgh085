import DATE from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';
import InputError from '../error/InputError';
import numberUtils from '../utils/numberUtils';

class VisitDate {
  #date;

  constructor(date) {
    this.#date = this.validateDate(date);
  }

  validateDate() {
    if (!numberUtils.isNumber(this.#date) || !this.#isIntegerInRange()) {
      throw new InputError(ERROR_MESSAGE.DATE);
    }
  }

  #isIntegerInRange() {
    return (
      Number.isInteger(this.#date) &&
      this.#date >= DATE.MIN &&
      this.#date <= DATE.MAX
    );
  }
}
export default VisitDate;

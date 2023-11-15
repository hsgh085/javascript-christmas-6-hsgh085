import { DATE } from '../constants/Constraints';
import Validation from './Validation';

class VisitDate {
  #date;

  constructor(date) {
    Validation.validateDate(date);
    this.#date = date;
  }

  getDate() {
    return this.#date;
  }

  checkWeekOrWeekend() {
    if (DATE.WEEKEND.includes(this.#date)) {
      return 'weekend';
    }
    return 'weekday';
  }

  isSpecialDate() {
    return DATE.SPECIAL.includes(this.#date);
  }

  isChristmasEventDate() {
    return this.#date >= DATE.MIN && this.#date <= DATE.CHRISTMAS;
  }
}
export default VisitDate;

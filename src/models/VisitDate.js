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
    if (this.#date in DATE.WEEKEND) {
      return 'weekend';
    }
    return 'weekday';
  }

  isSpecialDate() {
    return this.#date in DATE.SPECIAL;
  }

  isChristmasEventDate() {
    return this.#date >= DATE.MIN && this.#date <= DATE.CHRISTMAS;
  }
}
export default VisitDate;

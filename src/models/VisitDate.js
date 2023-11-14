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
}
export default VisitDate;

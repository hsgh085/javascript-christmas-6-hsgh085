import Validation from './Validation';

class VisitDate {
  #date;

  constructor(date) {
    this.#date = Validation.validateDate(date);
  }
}
export default VisitDate;

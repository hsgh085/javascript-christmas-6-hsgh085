import Menu from '../models/Menu';
import VisitDate from '../models/VisitDate';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class EventController {
  #date;

  #menu;

  #event;

  async order() {
    OutputView.printIntro();
    const date = InputView.readDate();
    this.#date = new VisitDate(date);
    const [menuArray, countArray] = InputView.readOrderMenu();
    this.#menu = new Menu(menuArray, countArray);
  }
}
export default EventController;

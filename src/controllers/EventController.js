import Date from '../models/Date';
import Menu from '../models/Menu';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class EventController {
  #date;

  #menu;

  #event;

  async order() {
    OutputView.printIntro();
    const date = InputView.readDate();
    this.#date = new Date(date);
    const [menuArray, countArray] = InputView.readOrderMenu();
    this.#menu = new Menu(menuArray, countArray);
  }
}
export default EventController;

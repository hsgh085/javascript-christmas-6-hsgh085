import Menu from '../models/Menu';
import Validation from '../models/Validation';
import VisitDate from '../models/VisitDate';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class EventsController {
  #date;

  #menu;

  #events;

  async order() {
    OutputView.printIntro();
    const date = await InputView.readDate();
    this.#date = new VisitDate(date);
    const [menuArray, countArray] = await InputView.readOrderMenu();
    this.#menu = new Menu(menuArray, countArray);
  }

  async guideEventCaution() {
    Validation.validateMenuTotalCount(this.#menu.getTotalCount());
  }
}
export default EventsController;

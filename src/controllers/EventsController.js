import Menu from '../models/Menu';
import Validation from '../models/Validation';
import VisitDate from '../models/VisitDate';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class EventsController {
  #date;

  #categoryCount = {};

  #events;

  async order() {
    OutputView.printIntro();
    const date = await InputView.readDate();
    this.#date = new VisitDate(date);
    const [menuArray, countArray] = await InputView.readOrderMenu();
    const menu = new Menu(menuArray, countArray);
    Validation.validateMenuTotalCount(menu.getTotalCount());
    this.#categoryCount = menu.getCountMenuByCategory();
    Validation.validateOnlyBeverageMenu(this.#categoryCount);
  }
}
export default EventsController;

import Menu from '../models/Menu';
import Validation from '../models/Validation';
import VisitDate from '../models/VisitDate';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class EventsController {
  #date;

  #menu;

  #categoryCount = {};

  #events;

  async order() {
    OutputView.printIntro();
    await this.inputVisitDate();
    await this.inputOrderMenu();
  }

  showOrder() {
    OutputView.printEventPreview(this.#date.getDate());
    OutputView.printMenu(this.#menu.getMenu());
    OutputView.printPriceBefore(this.#menu.getTotalPrice());
  }

  async inputVisitDate() {
    const date = await InputView.readDate();
    try {
      this.#date = new VisitDate(date);
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      await this.inputVisitDate();
    }
  }

  async inputOrderMenu() {
    const [menuArray, countArray] = await InputView.readOrderMenu();
    try {
      this.#menu = new Menu(menuArray, countArray);
      Validation.validateMenuTotalCount(this.#menu.getTotalCount());
      this.#categoryCount = this.#menu.getCountMenuByCategory();
      Validation.validateOnlyBeverageMenu(this.#categoryCount);
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      await this.inputOrderMenu();
    }
  }
}
export default EventsController;

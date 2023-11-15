import Events from '../models/Events';
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
    await this.inputVisitDate();
    await this.inputOrderMenu();
  }

  showOrder() {
    OutputView.printEventPreview(this.#date.getDate());
    OutputView.printMenu(this.#menu.getMenu());
    OutputView.printPriceBefore(this.#menu.getTotalPrice());
  }

  applyEvents() {
    this.#events = new Events(this.#menu.getTotalPrice());
    if (!this.#events.isApplyEvent()) return;
    this.#events.applyGiftEvent();
    this.applyWeekOrWeekendEvent();
    this.applySpecialEvent();
    this.applyChristmasEvent();
  }

  showEventsApplyDetails() {
    OutputView.printGiftMenu(this.#events.getGiftCount());
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
      Validation.validateOnlyBeverageMenu(
        this.#menu.getTotalCount(),
        this.#menu.getCountCategory('BEVERAGE'),
      );
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      await this.inputOrderMenu();
    }
  }

  applyWeekOrWeekendEvent() {
    if (this.#date.checkWeekOrWeekend() === 'weekday') {
      this.#events.applyWeekOrWeekendEvent(
        'weekday',
        this.#menu.getCountCategory('DESSERT'),
      );
    }
    if (this.#date.checkWeekOrWeekend() === 'weekend') {
      this.#events.applyWeekOrWeekendEvent(
        'weekend',
        this.#menu.getCountCategory('MAIN'),
      );
    }
  }

  applySpecialEvent() {
    if (this.#date.isSpecialDate()) {
      this.#events.applySpecialEvent();
    }
  }

  applyChristmasEvent() {
    if (this.#date.isChristmasEventDate()) {
      this.#events.applyChristmasEvent(this.#date.getDate());
    }
  }
}
export default EventsController;

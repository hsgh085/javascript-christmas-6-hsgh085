import EventsController from './controllers/EventsController';

class App {
  #eventsController;

  async run() {
    this.#eventsController = new EventsController();
    await this.#eventsController.order();
    this.#eventsController.showOrder();
    this.#eventsController.applyEvents();
    this.#eventsController.showEventsApplyDetails();
  }
}

export default App;

import EventsController from './controllers/EventsController';

class App {
  #eventsController;

  async run() {
    this.#eventsController = new EventsController();
    await this.#eventsController.order();
    this.#eventsController.showOrder();
  }
}

export default App;

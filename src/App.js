import EventsController from './controllers/EventsController';

class App {
  #eventsController;

  async run() {
    this.#eventsController = new EventsController();
    await this.#eventsController.order();
    await this.#eventsController.guideEventCaution();
  }
}

export default App;

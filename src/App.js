import EventsController from './controllers/EventsController';

class App {
  #eventsController;

  async run() {
    this.#eventsController = new EventsController();
    await this.#eventsController.order();
  }
}

export default App;

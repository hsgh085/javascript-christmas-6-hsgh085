import EventController from './controllers/EventController';

class App {
  #eventController;

  async run() {
    this.#eventController = new EventController();
    await this.#eventController.order();
  }
}

export default App;

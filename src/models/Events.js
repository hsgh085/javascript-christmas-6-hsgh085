import { PRICE } from '../constants/Constraints';

class Events {
  #totalPrice;

  #eventsPrice;

  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
    this.#eventsPrice = {
      christmas: 0,
      weekday: 0,
      weekend: 0,
      special: 0,
      gift: 0,
    };
  }

  isApplyEvent() {
    return this.#totalPrice >= PRICE.EVENT_MIN;
  }
}
export default Events;

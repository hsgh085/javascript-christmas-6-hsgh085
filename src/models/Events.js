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

  applyGiftEvent() {
    if (this.#totalPrice >= PRICE.GIFT_MIN) {
      this.#eventsPrice.gift = PRICE.GIFT_DISCOUNT;
    }
  }

  applyWeekOrWeekendEvent(day, count) {
    if (day === 'weekday') {
      this.#eventsPrice.weekday = count * PRICE.WEEKDAY_DISCOUNT;
      return;
    }
    this.#eventsPrice.weekend = count * PRICE.WEEKEND_DISCOUNT;
  }
}
export default Events;

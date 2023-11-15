import { DATE, PRICE } from '../constants/Constraints';

class Events {
  #totalPrice;

  #eventsDiscount;

  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
    this.#eventsDiscount = {
      christmas: 0,
      weekday: 0,
      weekend: 0,
      special: 0,
      gift: 0,
    };
  }

  getEventsDiscount() {
    return this.#eventsDiscount;
  }

  getGiftCount() {
    return this.#eventsDiscount.gift / -PRICE.GIFT_DISCOUNT;
  }

  getTotalDiscount() {
    return Object.values(this.#eventsDiscount).reduce((acc, cur) => acc + cur);
  }

  isApplyEvent() {
    return this.#totalPrice >= PRICE.EVENT_MIN;
  }

  applyGiftEvent() {
    if (this.#totalPrice >= PRICE.GIFT_MIN) {
      this.#eventsDiscount.gift -= PRICE.GIFT_DISCOUNT;
    }
  }

  applyWeekOrWeekendEvent(day, count) {
    if (day === 'weekday') {
      this.#eventsDiscount.weekday -= count * PRICE.WEEKDAY_DISCOUNT;
      return;
    }
    this.#eventsDiscount.weekend -= count * PRICE.WEEKEND_DISCOUNT;
  }

  applySpecialEvent() {
    this.#eventsDiscount.special -= PRICE.SPECIAL_DISCOUNT;
  }

  applyChristmasEvent(date) {
    this.#eventsDiscount.christmas -=
      PRICE.CHRISTMAS_DISCOUNT +
      PRICE.CHRISTMAS_PER_DISCOUNT * (date - DATE.MIN);
  }
}
export default Events;

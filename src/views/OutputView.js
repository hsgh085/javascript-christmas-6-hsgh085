import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message';
import stringUtils from '../utils/stringUtils';
import { EVENT_NAME } from '../constants/Constraints';

const OutputView = {
  printIntro() {
    Console.print(OUTPUT_MESSAGE.INTRO);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printEventPreview(date) {
    Console.print(`12월 ${date}일에 ${OUTPUT_MESSAGE.PREVIEW}`);
  },

  printMenu(menu) {
    Console.print(OUTPUT_MESSAGE.MENU.ORDER);
    Object.entries(menu).forEach(([key, value]) => {
      Console.print(`${key} ${value}개`);
    });
  },

  printPriceBefore(price) {
    Console.print(OUTPUT_MESSAGE.PRICE.BEFORE);
    Console.print(`${stringUtils.formatNumberWithCommas(price)}원`);
  },

  printGiftMenu(count) {
    Console.print(OUTPUT_MESSAGE.MENU.GIFT);
    if (count === 0) {
      this.printNone();
      return;
    }
    Console.print(`${OUTPUT_MESSAGE.GIFT} ${count}개`);
  },

  printBenefitDetails(events) {
    Console.print(OUTPUT_MESSAGE.BENEFIT_DETAILS);
    if (Object.values(events).every((discount) => discount === 0)) {
      this.printNone();
      return;
    }
    Object.entries(events).forEach(([eventName, discountAmount]) => {
      if (discountAmount !== 0) {
        this.printDiscountByEvent(eventName, discountAmount);
      }
    });
  },

  printPriceBenefit(price) {
    Console.print(OUTPUT_MESSAGE.PRICE.BENEFIT);
    Console.print(`${stringUtils.formatNumberWithCommas(price)}원`);
  },

  printPriceAfter(price) {
    Console.print(OUTPUT_MESSAGE.PRICE.AFTER);
    Console.print(`${stringUtils.formatNumberWithCommas(price)}원`);
  },

  printNone() {
    Console.print(OUTPUT_MESSAGE.NONE);
  },

  printDiscountByEvent(eventName, discountAmount) {
    Console.print(
      `${
        EVENT_NAME[eventName.toUpperCase()]
      } : ${stringUtils.formatNumberWithCommas(discountAmount)}원`,
    );
  },
};
export default OutputView;

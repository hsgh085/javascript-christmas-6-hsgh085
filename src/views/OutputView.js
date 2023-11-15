import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message';
import stringUtils from '../utils/stringUtils';

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
    const formatPrice = stringUtils.formatNumberWithCommas(price);
    Console.print(`${OUTPUT_MESSAGE.PRICE.BEFORE}${formatPrice}원`);
  },

  printGiftMenu(count) {
    Console.print(OUTPUT_MESSAGE.MENU.GIFT);
    if (count === 0) {
      Console.print(OUTPUT_MESSAGE.NONE);
      return;
    }
    Console.print(`${OUTPUT_MESSAGE.GIFT} ${count}개`);
  },
};
export default OutputView;

import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message';

const OutputView = {
  printIntro() {
    Console.print(OUTPUT_MESSAGE.INTRO);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  // ...
};
export default OutputView;

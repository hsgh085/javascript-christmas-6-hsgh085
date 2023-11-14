import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Message';
import Validation from '../models/Validation';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.DATE);
    return date;
  },

  async readOrderMenu() {
    const menuArray = [];
    const countArray = [];
    const orderMenus = await Console.readLineAsync(INPUT_MESSAGE.MENU);
    orderMenus.split(',').forEach((order) => {
      Validation.validateOrderFormat(order);
      const [menu, count] = order.split('-');
      menuArray.push(menu.trim());
      countArray.push(count.trim());
    });
    return [menuArray, countArray];
  },
};
export default InputView;

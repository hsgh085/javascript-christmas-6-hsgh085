import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/InputMessage';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.DATE);
    return date;
  },
};
export default InputView;

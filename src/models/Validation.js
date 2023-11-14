import { DATE, MENU_PRICE } from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';
import InputError from '../error/InputError';
import numberUtils from '../utils/numberUtils';

class Validation {
  static validateDate(date) {
    if (!numberUtils.isNumber(date) || !Validation.isIntegerInRange()) {
      throw new InputError(ERROR_MESSAGE.DATE);
    }
  }

  static validMenuName(menuArray) {
    if (
      !Validation.isMenuNameExist(menuArray) ||
      Validation.isDuplicateMenuName(menuArray)
    ) {
      throw new InputError(ERROR_MESSAGE.MENU);
    }
  }

  static isIntegerInRange(date) {
    return Number.isInteger(date) && date >= DATE.MIN && date <= DATE.MAX;
  }

  static isMenuNameExist(menuArray) {
    return menuArray.every((menuName) => menuName in MENU_PRICE);
  }

  static isDuplicateMenuName(menuArray) {
    return new Set(menuArray).size !== menuArray.length;
  }
}
export default Validation;

import { MENU_PRICE } from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';
import InputError from '../error/InputError';

class Validation {
  static validMenuName(menuArray) {
    if (
      !Validation.isMenuNameExist(menuArray) ||
      Validation.isDuplicateMenuName(menuArray)
    ) {
      throw new InputError(ERROR_MESSAGE.MENU);
    }
  }

  static isMenuNameExist(menuArray) {
    return menuArray.every((menuName) => menuName in MENU_PRICE);
  }

  static isDuplicateMenuName(menuArray) {
    return new Set(menuArray).size !== menuArray.length;
  }
}
export default Validation;

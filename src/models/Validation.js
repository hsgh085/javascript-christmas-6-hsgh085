import { DATE, MENU, MENU_PRICE } from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';
import InputError from '../error/InputError';
import numberUtils from '../utils/numberUtils';

class Validation {
  static validateDate(date) {
    if (!numberUtils.isNumber(date) || !Validation.isIntegerInRange(date)) {
      throw new InputError(ERROR_MESSAGE.DATE);
    }
  }

  static validateMenuName(menuArray) {
    if (
      !Validation.isMenuNameExist(menuArray) ||
      Validation.isDuplicateMenuName(menuArray)
    ) {
      throw new InputError(ERROR_MESSAGE.MENU);
    }
  }

  static validateMenuCount(countArray) {
    if (
      !Validation.isNumberMenuCount(countArray) ||
      !Validation.isNaturalMenuCount(countArray)
    ) {
      throw new InputError(ERROR_MESSAGE.MENU);
    }
  }

  static validateOrderFormat(order) {
    const pattern = /^[^\d]+-.+$/u;
    if (!pattern.test(order)) {
      throw new InputError(ERROR_MESSAGE.MENU);
    }
  }

  static validateMenuTotalCount(count) {
    if (count > MENU.TOTAL_COUNT) {
      throw new InputError(ERROR_MESSAGE.TOTAL_COUNT);
    }
  }

  static validateOnlyBeverageMenu(totalCount, beverageCount) {
    if (totalCount === beverageCount) {
      throw new InputError(ERROR_MESSAGE.BEVERAGE);
    }
  }

  static isIntegerInRange(date) {
    const numberDate = Number(date);
    return (
      Number.isInteger(numberDate) &&
      numberDate >= DATE.MIN &&
      numberDate <= DATE.MAX
    );
  }

  static isMenuNameExist(menuArray) {
    return menuArray.every((menuName) => menuName in MENU_PRICE);
  }

  static isDuplicateMenuName(menuArray) {
    return new Set(menuArray).size !== menuArray.length;
  }

  static isNumberMenuCount(countArray) {
    return countArray.every((count) => numberUtils.isNumber(count));
  }

  static isNaturalMenuCount(countArray) {
    return countArray.every((count) => numberUtils.isNaturalNumber(count));
  }
}
export default Validation;

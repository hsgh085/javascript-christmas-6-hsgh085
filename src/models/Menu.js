import { MENU_CATEGORY, MENU_PRICE } from '../constants/Constraints';
import Validation from './Validation';

class Menu {
  #menu = {};

  constructor(menuArray, countArray) {
    Validation.validateMenuName(menuArray);
    Validation.validateMenuCount(countArray);
    for (let i = 0; i < menuArray.length; i += 1) {
      this.#menu[menuArray[i]] = Number(countArray[i]);
    }
  }

  getMenu() {
    return this.#menu;
  }

  getTotalCount() {
    return Object.values(this.#menu).reduce((acc, cur) => acc + cur);
  }

  getCountMenuByCategory() {
    const categoryCount = {};
    Object.keys(MENU_CATEGORY).forEach((category) => {
      const categoryMenu = MENU_CATEGORY[category];
      let categoryTotal = 0;
      categoryMenu.forEach((menuName) => {
        if (this.#menu[menuName]) {
          categoryTotal += this.#menu[menuName];
        }
      });
      categoryCount[category] = categoryTotal;
    });
    return categoryCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    Object.entries(this.#menu).forEach(([menuName, count]) => {
      totalPrice += MENU_PRICE[menuName] * count;
    });
    return totalPrice;
  }
}
export default Menu;

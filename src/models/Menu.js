import { MENU_CATEGORY } from '../constants/Constraints';
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
}
export default Menu;

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

  getTotalCount(){
    return Object.values(this.#menu).reduce((acc, cur) => acc + cur);
  }
}
export default Menu;

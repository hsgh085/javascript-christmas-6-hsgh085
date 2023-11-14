class Menu {
  #menu = {};

  constructor(menuArray, countArray) {
    for (let i = 0; i < menuArray.length; i += 1) {
      this.#menu[menuArray[i]] = Number(countArray[i]);
    }
  }

  getMenu() {
    return this.#menu;
  }
}
export default Menu;

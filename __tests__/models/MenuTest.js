import Menu from '../../src/models/Menu';

describe('Menu 모델 테스트', () => {
  test('주문 메뉴를 입력받으면 메뉴 객체가 생성된다', () => {
    //given
    const menuArray = ['양송이수프', '타파스', '제로콜라'];
    const countArray = [2, 3, 4];
    const result = { 양송이수프: 2, 타파스: 3, 제로콜라: 4 };
    //when
    const menu = new Menu(menuArray, countArray);
    //then
    expect(menu.getMenu()).toEqual(result);
  });

  test('주문 메뉴의 총 개수를 반환한다', () => {
    const menuArray = ['양송이수프', '타파스', '제로콜라'];
    const countArray = [2, 3, 4];
    //when
    const menu = new Menu(menuArray, countArray);
    //then
    expect(menu.getTotalCount()).toBe(9);
  });

  test('주문 메뉴의 카테고리별 개수를 반환한다', () => {
    const menuArray = ['양송이수프', '타파스', '제로콜라'];
    const countArray = [2, 3, 4];
    const result = { APPETIZER: 5, MAIN: 0, DESSERT: 0, BEVERAGE: 4 };
    //when
    const menu = new Menu(menuArray, countArray);
    //then
    expect(menu.getCountMenuByCategory()).toEqual(result);
  });

  test('주문 메뉴의 총 가격을 반환한다', () => {
    const menuArray = ['양송이수프', '타파스', '제로콜라'];
    const countArray = [2, 3, 4];
    //when
    const menu = new Menu(menuArray, countArray);
    //then
    expect(menu.getTotalPrice()).toBe(40500);
  });
});

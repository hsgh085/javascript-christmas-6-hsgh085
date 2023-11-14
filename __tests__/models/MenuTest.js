import Menu from '../../src/models/Menu';

describe('Menu 모델 테스트', () => {
  test('주문 메뉴를 입력받으면 메뉴 객체가 생성된다', () => {
    //given
    const menuArray = ['피자', '햄버거', '치킨'];
    const countArray = [2, 3, 4];
    const result = { 피자: 2, 햄버거: 3, 치킨: 4 };
    //when
    const menu = new Menu(menuArray, countArray);
    //then
    expect(menu.getMenu()).toEqual(result);
  });
});

import Validation from '../../src/models/Validation';

describe('Validation 모델 테스트', () => {
  test('주문 메뉴가 존재하지 않는다면 에러가 발생한다', () => {
    //given
    const menuArray = ['양송이수프', '치킨'];

    //then
    expect(() => Validation.validMenuName(menuArray)).toThrow('[ERROR]');
  });

  test('주문 메뉴가 중복되면 에러가 발생한다', () => {
    //given
    const menuArray = ['양송이수프', '제로콜라', '양송이수프'];

    //then
    expect(() => Validation.validMenuName(menuArray)).toThrow('[ERROR]');
  });
});

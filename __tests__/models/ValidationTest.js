import Validation from '../../src/models/Validation';

describe('Validation 모델 테스트', () => {
  describe('방문 날짜 검증 테스트', () => {
    test('방문 날짜가 숫자가 아니라면 에러가 발생한다', () => {
      //given
      const date = '1일';

      //then
      expect(() => Validation.validateDate(date)).toThrow('[ERROR]');
    });

    test.each([[0], [32], [1.5]])(
      '방문 날짜가 1 이상 31 이하의 정수가 아니라면 에러가 발생한다',
      (date) => {
        //then
        expect(() => Validation.validateDate(date)).toThrow('[ERROR]');
      },
    );
  });

  describe('주문 메뉴 이름 검증 테스트', () => {
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
});

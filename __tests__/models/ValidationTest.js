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
      expect(() => Validation.validateMenuName(menuArray)).toThrow('[ERROR]');
    });

    test('주문 메뉴가 중복되면 에러가 발생한다', () => {
      //given
      const menuArray = ['양송이수프', '제로콜라', '양송이수프'];

      //then
      expect(() => Validation.validateMenuName(menuArray)).toThrow('[ERROR]');
    });
  });

  describe('주문 메뉴 개수 검증 테스트', () => {
    test('주문 메뉴 개수가 숫자가 아니라면 에러가 발생한다', () => {
      //given
      const countArray = ['1개'];

      //then
      expect(() => Validation.validateMenuCount(countArray)).toThrow('[ERROR]');
    });

    test.each([[['0']], [['1.5']]])(
      '주문 메뉴 개수가 자연수가 아니라면 에러가 발생한다',
      (countArray) => {
        //then
        expect(() => Validation.validateMenuCount(countArray)).toThrow(
          '[ERROR]',
        );
      },
    );
  });

  test.each([['양송이수프-'], ['양송이수프1'], ['양송이수프~1']])(
    '주문 형식이 올바르지 않다면 에러가 발생한다',
    () => {
      //then
      expect((order) => Validation.validateOrderFormat(order)).toThrow(
        '[ERROR]',
      );
    },
  );

  test('주문 메뉴의 총 개수가 20개를 초과한다면 에러가 발생한다', () => {
    //given
    const count = 21;

    //then
    expect(() => Validation.validateMenuTotalCount(count)).toThrow('[ERROR]');
  });

  test('주문 메뉴가 음료만 있다면 에러가 발생한다', () => {
    //given
    const categoryCount = { APPETIZER: 0, MAIN: 0, DESSERT: 0, BEVERAGE: 3 };

    //then
    expect(() => Validation.validateOnlyBeverageMenu(categoryCount)).toThrow(
      '[ERROR]',
    );
  });
});

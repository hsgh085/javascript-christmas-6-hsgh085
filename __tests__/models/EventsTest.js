import Events from '../../src/models/Events';

describe('Events 모델 테스트', () => {
  test('총 금액 만원 이상이면 true를 반환한다.', () => {
    //given
    const totalPrice = 10000;
    //when
    const events = new Events(totalPrice);
    //then
    expect(events.isApplyEvent()).toBeTruthy();
  });
});

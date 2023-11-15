import Events from '../../src/models/Events';

describe('Events 모델 테스트', () => {
  test('총 금액 12만원 이상이면 샴페인 1개(25,000원) 증정한다', () => {
    //given
    const totalPrice = 120000;
    //when
    const events = new Events(totalPrice);
    events.applyGiftEvent();
    //then
    expect(events.getEventsDiscount().gift).toBe(-25000);
  });

  const totalPrice = 10000;
  let events;

  beforeEach(() => {
    events = new Events(totalPrice);
  });

  test('총 금액 만원 이상이면 true를 반환한다.', () => {
    expect(events.isApplyEvent()).toBeTruthy();
  });

  test('평일 이벤트면 디저트 1개당 2,023원 할인한다', () => {
    //given
    const day = 'weekday';
    const dessert_count = 2;
    //when
    events.applyWeekOrWeekendEvent(day, dessert_count);
    //then
    expect(events.getEventsDiscount().weekday).toBe(-4046);
  });

  test('주말 이벤트면 메인 1개당 2,023원 할인한다', () => {
    //given
    const day = 'weekend';
    const main_count = 2;
    //when
    events.applyWeekOrWeekendEvent(day, main_count);
    //then
    expect(events.getEventsDiscount().weekend).toBe(-4046);
  });

  test('특별 할인 이벤트면 천원 할인한다', () => {
    events.applySpecialEvent();
    expect(events.getEventsDiscount().special).toBe(-1000);
  });

  test('크리스마스 이벤트면 1000원 할인에서 하루 지날수록 100원씩 추가 할인한다.', () => {
    //given
    const date = 25;
    //when
    events.applyChristmasEvent(date);
    //then
    expect(events.getEventsDiscount().christmas).toBe(-3400);
  });

  test('증정 할인이 0원이면 증정 메뉴 개수는 0이다.', () => {
    expect(events.getGiftCount()).toBe(-0);
  });

  test('총 혜택 금액이 0원이면 할인 전 총주문 금액과 할인 후 예상 결제 금액은 같다', () => {
    expect(events.getTotalDiscount()).toBe(0);
    expect(events.getAfterDiscountPrice()).toBe(totalPrice);
  });
});

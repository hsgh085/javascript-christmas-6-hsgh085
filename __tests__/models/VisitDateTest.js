import VisitDate from '../../src/models/VisitDate';

describe('VisitDate 모델 테스트', () => {
  test('주중이면 weekday를 반환한다.', () => {
    const date = new VisitDate(3);
    expect(date.checkWeekOrWeekend()).toBe('weekday');
  });
  test('주말이면 weekend를 반환한다.', () => {
    const date = new VisitDate(1);
    expect(date.checkWeekOrWeekend()).toBe('weekend');
  });
});

import Badge from '../../src/models/Badge';

describe('Badge 모델 테스트', () => {
  const testBadge = (totalBenefitPrice, expectedBadge) => {
    // when
    const badge = new Badge(totalBenefitPrice);
    // then
    expect(badge.getBadge()).toBe(expectedBadge);
  };

  test.each([
    [20000, '산타'],
    [10000, '트리'],
    [5000, '별'],
  ])('총 혜택 금액이 %d 이상이면 %s 배지를 부여한다.', testBadge);

  test('총 혜택 금액이 5천원 미만이면 배지를 부여하지 않는다.', () => {
    testBadge(1000, '');
  });
});

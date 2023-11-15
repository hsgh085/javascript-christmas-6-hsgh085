import { BADGE } from '../constants/Constraints';

class Badge {
  #badge = '';

  constructor(totalBenefitPrice) {
    if (totalBenefitPrice > BADGE.PRICE.FIRST) {
      this.#badge = BADGE.RANK.FIRST;
      return;
    }
    if (totalBenefitPrice > BADGE.PRICE.SECOND) {
      this.#badge = BADGE.RANK.SECOND;
      return;
    }
    if (totalBenefitPrice > BADGE.PRICE.THIRD) {
      this.#badge = BADGE.RANK.THIRD;
    }
  }

  getBadge() {
    return this.#badge;
  }
}
export default Badge;

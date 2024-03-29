const DATE = Object.freeze({
  MIN: 1,
  MAX: 31,
  CHRISTMAS: 25,
  WEEKEND: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  SPECIAL: [3, 10, 17, 24, 25, 31],
});

const PRICE = Object.freeze({
  EVENT_MIN: 10000,
  GIFT_MIN: 120000,
  WEEKDAY_DISCOUNT: 2023,
  WEEKEND_DISCOUNT: 2023,
  SPECIAL_DISCOUNT: 1000,
  GIFT_DISCOUNT: 25000,
  CHRISTMAS_DISCOUNT: 1000,
  CHRISTMAS_PER_DISCOUNT: 100,
});

const MENU_PRICE = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,

  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,

  초코케이크: 15000,
  아이스크림: 5000,

  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

const MENU_CATEGORY = Object.freeze({
  APPETIZER: ['양송이수프', '타파스', '시저샐러드'],
  MAIN: ['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타'],
  DESSERT: ['초코케이크', '아이스크림'],
  BEVERAGE: ['제로콜라', '레드와인', '샴페인'],
});

const MENU = Object.freeze({
  TOTAL_COUNT: 20,
});

const EVENT_NAME = Object.freeze({
  CHRISTMAS: '크리스마스 디데이 할인',
  WEEKDAY: '평일 할인',
  WEEKEND: '주말 할인',
  SPECIAL: '특별 할인',
  GIFT: '증정 이벤트',
});

const BADGE = Object.freeze({
  RANK: {
    FIRST: '산타',
    SECOND: '트리',
    THIRD: '별',
  },

  PRICE: {
    FIRST: 20000,
    SECOND: 10000,
    THIRD: 5000,
  },
});

export { DATE, MENU_PRICE, MENU_CATEGORY, MENU, PRICE, EVENT_NAME, BADGE };

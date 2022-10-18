/**
 * Тип чека
 */
export enum ReceiptType {
  COMING = 1,
  REFUND_COMING = 2,
  EXPENCE = 3,
  REFUND_EXPENSE = 4,
}

/**
 * Типизация типа чека
 */
export type TReceiptType = 1 | 2 | 3 | 4;

// *************************************************************************

/**
 * Налогообложение
 */
export enum Taxation {
  ORN = 1,
  USN = 2,
  USNDR = 4,
  ESN = 16,
  PSN = 32,
}

/**
 * Типизация налогообложения
 */
export type TTaxation = 1 | 2 | 4 | 16 | 32;

// *************************************************************************

/**
 * НДС
 */
export enum Vat {
  _20 = 1,
  _10 = 2,
  _20_120 = 3,
  _10_110 = 4,
  _0 = 5,
  WITHOUT = 6,
}

/**
 * Типизация налогообложения
 */
export type TVat = 1 | 2 | 4 | 5 | 6;

// *************************************************************************

/**
 * Тип позиции чека
 */
export enum ItemType {
  PRODUCT = 1,
  WORK = 3,
  SERVICE = 4,
  PAYMENT = 10,
  OTHER = 13,
}

/**
 * Типизация позиции чека
 */
export type TItemType = 1 | 3 | 4 | 10 | 13;

// *************************************************************************

/**
 * Способ расчета позиции чека
 */
export enum PaymentMethod {
  PREPAYMENT_FULL = 1,
  PREPAYMENT_PART = 2,
  ADVANCE = 3,
  PAYMENT_FULL = 4,
  CREDIT_PART = 5,
  CREDIT_FULL = 6,
  CREDIT_PAY = 7,
}

/**
 * Типизация способа расчета позиции чека
 */
export type TPaymentMethod = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// *************************************************************************

/**
 * Единица измерения позиции чека
 */
export enum ItemUnit {
  PIECES = 0,
  GRAM = 10,
  KILOGRAM = 11,
  TON = 12,
  CENTIMETR = 20,
  DECIMETER = 21,
  METER = 22,
  SQUARE_CENTIMETER = 30,
  SQUARE_DECIMETER = 31,
  SQUARE_METER = 32,
  MILLILITER = 40,
  LITRE = 41,
  CUBIC_METER = 42,
  KILOWATT_HOUR = 50,
  GIGACALORIES = 51,
  DAY = 70,
  HOUR = 71,
  MINUTE = 72,
  SECOND = 73,
  KILOBYTES = 80,
  MEGABYTES = 81,
  GIGABYTES = 82,
  TERABYTES = 83,
  DEFAULT = 255,
}

/**
 * Типизация единицы измерения позиции чека
 */
export type TItemUnit = 1
| 10 | 11 | 12
| 20 | 21 | 22
| 30 | 31 | 32
| 40 | 41 | 42
| 50 | 51
| 70 | 71 | 72 | 73
| 80 | 81 | 82 | 83
| 255;

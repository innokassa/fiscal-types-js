import {
  TItemType, ItemType, ItemUnit, TItemUnit, TPaymentMethod, PaymentMethod, TVat, Vat,
} from './Enums';

/**
 * Позиция чека
 */
export default class Item {
  type: TItemType = ItemType.OTHER;

  name = '';

  price = 0.0;

  quantity = 0.0;

  amount = 0.0;

  unit: TItemUnit = ItemUnit.DEFAULT;

  payment_method: TPaymentMethod = PaymentMethod.PREPAYMENT_FULL;

  vat: TVat = Vat.WITHOUT;
}

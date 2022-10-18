import Amount from './Amount';
import Customer from './Customer';
import {
  TReceiptType, ReceiptType, TTaxation, Taxation,
} from './Enums';
import Notify from './Notify';
import ItemCollection from './ItemCollection';
import Loc from './Loc';

/**
 * Чек
 */
export default class Receipt {
  type: TReceiptType = ReceiptType.COMING;

  items: ItemCollection = new ItemCollection();

  taxation: TTaxation = Taxation.ORN;

  amount: Amount = new Amount();

  notify: Notify = new Notify();

  loc: Loc = new Loc();

  customer?: Customer;
}

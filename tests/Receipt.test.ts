import { describe, expect, test } from '@jest/globals';
import {
  Receipt,
  ReceiptType,
  Taxation,
  ItemType,
  PaymentMethod,
  Vat,
  ItemUnit,
} from '../src/Index';

describe('receipt test', () => {
  test('literal', () => {
    const receipt: Receipt = {
      type: ReceiptType.COMING,
      items: [
        {
          name: 'asas',
          type: ItemType.PRODUCT,
          price: 100.0,
          quantity: 1,
          amount: 100.0,
          payment_method: PaymentMethod.PAYMENT_FULL,
          vat: Vat.WITHOUT,
          unit: ItemUnit.HOUR,
        },
      ],
      taxation: Taxation.USN,
      amount: { cashless: 100.0 },
      notify: { emails: ['box@domain.zone'] },
      loc: { billing_place: 'https://example.com/' },
    };

    expect(JSON.stringify(receipt)).toBe(
      JSON.stringify({
        type: ReceiptType.COMING,
        items: [
          {
            name: 'asas',
            type: ItemType.PRODUCT,
            price: 100.0,
            quantity: 1,
            amount: 100.0,
            payment_method: PaymentMethod.PAYMENT_FULL,
            vat: Vat.WITHOUT,
            unit: ItemUnit.HOUR,
          },
        ],
        taxation: Taxation.USN,
        amount: { cashless: 100.0 },
        notify: { emails: ['box@domain.zone'] },
        loc: { billing_place: 'https://example.com/' },
      }),
    );
  });

  test('instance', () => {
    const receipt = new Receipt();
    receipt.type = ReceiptType.COMING;
    receipt.items.push(
      {
        name: 'asas',
        type: ItemType.PRODUCT,
        price: 100.0,
        quantity: 1,
        amount: 100.0,
        payment_method: PaymentMethod.PAYMENT_FULL,
        vat: Vat.WITHOUT,
        unit: ItemUnit.HOUR,
      },
    );
    receipt.taxation = Taxation.USN;
    receipt.amount = { cashless: 100.0 };
    receipt.notify.emails = ['box@domain.zone'];
    receipt.loc.billing_place = 'https://example.com/';

    expect(JSON.stringify(receipt)).toBe(
      JSON.stringify({
        type: ReceiptType.COMING,
        items: [
          {
            name: 'asas',
            type: ItemType.PRODUCT,
            price: 100.0,
            quantity: 1,
            amount: 100.0,
            payment_method: PaymentMethod.PAYMENT_FULL,
            vat: Vat.WITHOUT,
            unit: ItemUnit.HOUR,
          },
        ],
        taxation: Taxation.USN,
        amount: { cashless: 100.0 },
        notify: { emails: ['box@domain.zone'] },
        loc: { billing_place: 'https://example.com/' },
      }),
    );
  });
});


# Fiscal types JS/TS

Библиотека с минимальным набором классов для представления фискального чека с последующей передачей в [Pangaea API V2](https://api.innokassa.ru/v2/doc).

## Использование

[Index.ts](/src/Index.ts) экспортирует все необходимое:
* [Receipt.ts](/src/Receipt.ts) - чек
  * [ItemCollection.ts](/src/ItemCollection.ts) коллекция [Item.ts](/src/Item.ts)
  * [Customer.ts](/src/Customer.ts) - покупатель
  * [Amount.ts](/src/Amount.ts) - сумма рассчета
  * [Loc.ts](/src/Loc.ts) - адрес места расчетов
  * [Notify.ts](/src/Notify.ts) - адреса клиентов для уведомлений
* [Enums.ts](/src/Enums.ts) - набор `enum`'ов и типов для некоторых полей чека (тип, налогообложение, прочее) и позиций чека (тип, НДС, прочее)

Примеры использования содержатся в [тестах](/tests/Receipt.test.ts) (литерал и экземпляр класса).

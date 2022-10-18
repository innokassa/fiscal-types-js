import { describe, expect, test } from '@jest/globals';
import Notify from '../src/Notify';

describe('notify test', () => {
  test('optional phone', () => {
    const notify: Notify = {
      emails: ['box@domain.zone'],
    };
    expect(JSON.stringify(notify)).toBe(
      JSON.stringify({ emails: ['box@domain.zone'] }),
    );
  });

  test('optional emails', () => {
    const notify: Notify = {
      phone: '+79998887766',
    };
    expect(JSON.stringify(notify)).toBe(
      JSON.stringify({ phone: '+79998887766' }),
    );
  });
});

import { unixtimeToDate } from '../index';

describe('unixtimeToDate', () => {
  test('zero', () => {
    expect(unixtimeToDate(0)).toStrictEqual(
      new Date('1970-01-01T00:00:00.000Z')
    );
  });

  test('2021-10-10', () => {
    expect(unixtimeToDate(1633860000)).toStrictEqual(
      new Date('2021-10-10T10:00:00.000Z')
    );
  });
});

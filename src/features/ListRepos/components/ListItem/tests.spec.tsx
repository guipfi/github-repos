import { formatStars, formatDate, formatText } from './index';

describe('star formatation', () => {
  it('should format greater than bilion numbers', () => {
    expect(formatStars(1000000000000)).toBe('+999Bi');
  });

  it('should format bilion numbers', () => {
    expect(formatStars(8800000000)).toBe('8Bi');
  });

  it('should format milion numbers', () => {
    expect(formatStars(203009887)).toBe('203Mi');
  });

  it('should format thousand numbers', () => {
    expect(formatStars(1001)).toBe('1k');
  });

  it('should not change others numbers', () => {
    expect(formatStars(504)).toBe('504');
  });
});

describe('date formatation', () => {
  beforeAll(() => {
    const mockedDate = new Date(2022, 1, 1, 10, 30, 15);
    jest.spyOn(global, 'Date').mockImplementation(() => mockedDate as unknown as string);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const compareTime1 = new Date(2022, 1, 1, 10, 30, 15);
  it('should show now', () => {
    expect(formatDate(compareTime1)).toBe('now');
  });

  const compareTime2 = new Date(2022, 1, 1, 10, 0, 10);
  it('should show the past minutes', () => {
    expect(formatDate(compareTime2)).toBe('30 minutes ago');
  });

  const compareTime3 = new Date(2022, 1, 1, 10, 29, 15);
  it('should show the past minutes in singular', () => {
    expect(formatDate(compareTime3)).toBe('1 minute ago');
  });

  const compareTime4 = new Date(2022, 1, 1, 8, 30, 5);
  it('should show the past hours', () => {
    expect(formatDate(compareTime4)).toBe('2 hours ago');
  });

  const compareTime5 = new Date(2022, 1, 1, 9, 30, 15);
  it('should show the past hours in singular', () => {
    expect(formatDate(compareTime5)).toBe('1 hour ago');
  });

  const compareTime6 = new Date(2021, 12, 29, 0, 0, 0);
  it('should show the past days', () => {
    expect(formatDate(compareTime6)).toBe('3 days ago');
  });

  const compareTime7 = new Date(2021, 12, 31, 10, 30, 15);
  it('should show the past days in singular', () => {
    expect(formatDate(compareTime7)).toBe('1 day ago');
  });

  const compareTime8 = new Date(2020, 1, 1, 10, 30, 15);
  it('should show the past years', () => {
    expect(formatDate(compareTime8)).toBe('2 years ago');
  });

  const compareTime9 = new Date(2021, 1, 1, 10, 30, 15);
  it('should show the past years in singular', () => {
    expect(formatDate(compareTime9)).toBe('1 year ago');
  });
});

describe('reduce text formatation', () => {
  it('should format greater than desired lenght', () => {
    expect(formatText('Hello', 2)).toBe('He...');
  });

  it('should not format if lenght is less/equal than desired', () => {
    expect(formatText('Hello', 5)).toBe('Hello');
  });
});

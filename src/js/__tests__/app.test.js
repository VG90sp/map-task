import ErrorRepository from '../app';

test('проверка при наличии кода', () => {
  const error = new ErrorRepository();
  expect(error.translate('404')).toBe('Not Found');
});

test('проверка при отсутствии кода', () => {
  const error = new ErrorRepository();
  expect(error.translate('403')).toBe('Unknown error');
});
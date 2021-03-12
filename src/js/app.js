export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      ['400', 'Bad Request'],
      ['404', 'Not Found'],
      ['414', 'URI Too Long'],
      ['500', 'Internal server error'],
      ['508', 'Loop Detected'],
    ]);
  }

  translate(code) {
    if (this.map.get(code)) {
      return this.map.get(code);
    }
    return ('Unknown error');
  }
}

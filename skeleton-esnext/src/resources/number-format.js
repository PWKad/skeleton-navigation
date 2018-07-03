export class NumberFormatValueConverter {
  fromView(value) {
    if (value) {
      return parseInt(value, 10);
    }
    return value;
  }
}

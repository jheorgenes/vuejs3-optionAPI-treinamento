export default function currency(value, locale, currency, style = 'currency') {
  return new Intl.NumberFormat(locale, { style, currency }).format(value);
}
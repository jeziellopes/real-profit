
export function currency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL',
  }).format(value);
}

export function currencyString(value: number) {
  return ((value).toFixed(2)).replace('.', ',');
}

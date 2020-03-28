// eslint-disable-next-line import/named
import { assetProfit, percent, percentdecimal, treasuryProfit } from '../../src/services/dataset';

test('rentabilidade acumulada em reais (float)', () => {
  const investment = 2000;
  const priceclose = 30000;
  const pricebuy = 20000;

  const result = assetProfit(investment, pricebuy, priceclose);

  expect(result).toBe(3000);
});

test('rentabilidade acumulada em decimal (float)', () => {
  const investment = 2000;
  const priceclose = 30000;
  const pricebuy = 20000;

  const result = percentdecimal(investment, priceclose, pricebuy);

  expect(result).toBe(0.5);
});

test('rentabilidade acumulada em por cento (string)', () => {
  const profit = 0.5;

  const result = percent(profit);

  expect(result).toBe('50%');
});

test('rentabilidade tesouro direto prefixado 365 dias em reais (decimal)', () => {
  const result = treasuryProfit(365);

  expect(result).toBe(0.1);
});

test('rentabilidade tesouro direto prefixado 200 dias em reais (decimal)', () => {
  const result = treasuryProfit(200);

  expect(result).toBe(0.053613);
});

test('rentabilidade tesouro direto prefixado 100 dias em reais (decimal)', () => {
  const result = treasuryProfit(100);

  expect(result).toBe(0.026456);
});


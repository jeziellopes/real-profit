
interface Dataset {
  time: number
  high: number,
  low: number,
  open: number,
  volumefrom: number,
  volumeto: number,
  close: number,
  conversionType: string,
  conversionSymbol: string,
}

export interface AssetProfitData {
  data: Dataset[]
  investment: number
  pricebuy: number
}

export function average(values: Array<number>) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function percent(decimal: number) {
  return Number(decimal).toLocaleString('en-US', {
    style: 'percent',
  });
}

export const assetPercentProfit = (params: AssetProfitData) => params.data.map((data) => ({
  time: data.time, profit: percent(((data.close / params.pricebuy) - 1)),
}));

export const assetPriceProfit = (params: AssetProfitData) => params.data.map((data) => ({
  time: data.time, profit: String.prototype.concat('R$ ', ((params.investment * data.close) / params.pricebuy).toFixed(2)),
}));

export function currency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL',
  }).format(value);
}

export function treasuryProfit(period: number, position: number) {
  return (0.0261 * position) / 100;
}

export const treatData = (dataarray: Dataset[], investment: number, pricebuy: number) => dataarray.map((data) => ({
  time: data.time,
  open: data.open,
  close: data.close,
  profit: data.close - pricebuy,
  profitcurrency: currency(data.close - pricebuy),
  profitpercent: ((data.close / pricebuy) - 1),
  profitpercentformated: percent((data.close / pricebuy) - 1),
  bitcoin: parseFloat((((data.close / pricebuy) - 1) * 100).toFixed(2)),
  bitcoinformatted: percent((data.close / pricebuy) - 1),
  treasury: parseFloat((treasuryProfit(dataarray.length, dataarray.indexOf(data) + 1) * 100).toFixed(2)),
  treasuryformatter: percent(treasuryProfit(dataarray.length, dataarray.indexOf(data) + 1)),
}));

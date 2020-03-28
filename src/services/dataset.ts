import { AssetsNameData } from '../store/ducks/SimulatorData/types';

interface APICoinInfoData {
  Id: string
  Name: string
  FullName: string
  Internal: string
  ImageUrl: string
  Url: string
  Algorithm: string
  ProofType: string
  Rating: {
    Weiss: {
      Rating: string
      TechnologyAdoptionRating: string
      MarketPerformanceRating: string
    }
  },
  NetHashesPerSecond: number
  BlockNumber: number
  BlockTime: number
  BlockReward: number
  Type: number
  DocumentType: string
}

interface APIAssetsData {
  CoinInfo: APICoinInfoData
  RAW: any
  DISPLAY: any
}

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

export function percentdecimal(investment: number, close: number, pricebuy: number) {
  return (close / pricebuy) - 1;
}

export function percent(decimal: number) {
  return Number(decimal).toLocaleString('en-US', {
    style: 'percent',
  });
}

export function formatFloat(value: number, decimals: number) {
  return Math.round(parseFloat(value.toFixed(decimals)) * 1000000) / 1000000;
}

export function assetProfit(investment: number, pricebuy: number, close: number) {
  return formatFloat(investment * (close / pricebuy), 2);
}

export function treasuryProfit(position: number) {
  return formatFloat((((((1) + (0.1))) ** (((position) / (365))))) - (1), 7);
}

export function realizedTreasury(investment: number, position: number) {
  return formatFloat(investment * (treasuryProfit(position) + 1), 2);
}

export const treatData = (dataarray: Dataset[], investment: number, pricebuy: number, asset: AssetsNameData) => dataarray.map((data) => ({
  title: asset.title,
  time: data.time,
  open: data.open,
  close: data.close,
  profitpercent: formatFloat(((data.close / pricebuy) - 1), 2),
  assetone: assetProfit(investment, pricebuy, data.close),
  treasury: realizedTreasury(investment, dataarray.indexOf(data) + 1),
}));

export const treatAssets = (assets: APIAssetsData[]) => assets.map((asset: APIAssetsData) => ({
  key: asset.CoinInfo.Name,
  title: asset.CoinInfo.FullName,
}));


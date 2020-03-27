/**
 * Action Types
 */
export enum SimulatorDataTypes {
  ASSETS_REQUEST = '@simulatorData/ASSETS_REQUEST',
  ASSETS_SUCCESS = '@simulatorData/ASSETS_SUCCESS',
  LOAD_REQUEST = '@simulatorData/LOAD_REQUEST',
  LOAD_SUCCESS = '@simulatorData/LOAD_SUCCESS',
  LOAD_FAILURE = '@simulatorData/LOAD_FAILURE',
  SET_PARAMS = '@simulatorData/SET_PARAMS',
  SET_ASSET = '@simulatorData/SET_ASSET',
  SET_DATE = '@simulatorData/SET_DATE',
  SET_INVESTMENT = '@simulatorData/SET_INVESTMENT',
  SET_PRICE_BUY = '@simulatorData/SET_PRICE_BUY',
  SET_SIMULATOR = '@simulatorData/SET_SIMULATOR',
}

/**
* Data Types
*/
export interface AssetData {
  title: string
  time: number
  high: number
  low: number
  open: number
  volumefrom: number
  volumeto: number
  close: number
  conversionType: string
  conversionSymbol: string
}

export interface DataToParams {
  date: number
  asset: string
}

export interface ParamsData {
  fromsymbol: string
  tosymbol: string
  limit: number
  totimestamp: string
}

export interface AssetSimulationData {
  time: number
  open: number
  close: number
  profit: number
  profitpercent: number
}

export interface SimulatorData {
  assetone: AssetSimulationData
  treasury: AssetSimulationData
}

export interface AssetsNameData {
  key: string
  title: string
}

/**
 * State type
 */
export interface SimulatorDataState {
 data: AssetData[]
 params: ParamsData
 investment: number
 pricebuy: number
 asset: AssetsNameData
 date: number
 assets: AssetsNameData[]
 simulator: boolean
 loading: boolean
 error: boolean
}

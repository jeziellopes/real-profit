/**
 * Action Types
 */
export enum SimulatorDataTypes {
  LOAD_REQUEST = '@simulatorData/LOAD_REQUEST',
  LOAD_SUCCESS = '@simulatorData/LOAD_SUCCESS',
  LOAD_FAILURE = '@simulatorData/LOAD_FAILURE',
  SET_PARAMS = '@simulatorData/SET_PARAMS',
  SET_INVESTMENT = '@simulatorData/SET_INVESTMENT',
  SET_PRICE_BUY = '@simulatorData/SET_PRICE_BUY',
}

/**
* Data Types
*/
export interface AssetData {
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

/**
 * State type
 */
export interface SimulatorDataState {
 data: AssetData[]
 params: ParamsData
 investment: number
 pricebuy: number
 loading: boolean
 error: boolean
}

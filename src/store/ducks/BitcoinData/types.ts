/**
 * Action Types
 */
export enum BitcoinDataTypes {
   LOAD_REQUEST = '@bitcoinDataList/LOAD_REQUEST',
   LOAD_SUCCESS = '@bitcoinDataList/LOAD_SUCCESS',
   LOAD_FAILURE = '@bitcoinDataList/LOAD_FAILURE',
 }

/**
 * Data Types
 */
export interface BitcoinData {
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

/**
  * State type
  */
export interface BitcoinDataState {
  data: BitcoinData[]
  loading: boolean
  error: boolean
}

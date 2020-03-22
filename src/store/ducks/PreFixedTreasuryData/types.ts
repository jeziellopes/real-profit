/**
 * Action Types
 */
export enum PreFixedTreasuryDataTypes {
  LOAD_REQUEST = '@simulator/LOAD_REQUEST',
  LOAD_SUCCESS = '@simulator/LOAD_SUCCESS',
  LOAD_FAILURE = '@simulator/LOAD_FAILURE',
}

/**
* Data Types
*/
export interface PreFixedTreasuryData {
 Success: string
 Data: object
}

/**
 * State type
 */
export interface PreFixedTreasuryDataState {
 data: PreFixedTreasuryData[]
 loading: boolean
 error: boolean
}

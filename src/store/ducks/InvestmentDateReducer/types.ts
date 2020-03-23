
/**
 * Action Types
 */
export enum InvestmentDateTypes {
  CLICK_SET_INVESTMENT_DATE = '@investmentDate/CLICK_SET_INVESTMENT_DATE',
}

/**
* Data Types
*/
export interface InvestmentDate {
 date: string
}

/**
 * State type
 */
export interface InvestmentDateState {
 data: InvestmentDate
}

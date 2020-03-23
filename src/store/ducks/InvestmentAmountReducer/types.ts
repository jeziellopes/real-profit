
/**
 * Action Types
 */
export enum InvestmentAmountTypes {
  CLICK_SET_INVESTMENT_AMOUNT = '@investmentAmount/CLICK_SET_INVESTMENT_AMOUNT',
}

/**
* Data Types
*/
export interface InvestmentAmount {
 amount: number
}

/**
 * State type
 */
export interface InvestmentAmountState {
 data: InvestmentAmount
}

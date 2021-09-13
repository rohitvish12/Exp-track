
import * as actionType from '../constants/transactionConstants';

export const getTransactionReducer = (state={transactions: [] }, action) => {
    switch (action.type) {
        case actionType.GET_TRANSACTION_SUCCESS:
            return{
                products:action.payload
            }
        case actionType.GET_TRANSACTION_FAIL:
            return{
                error:action.payload
            }
        default:
            return state;
    }

};

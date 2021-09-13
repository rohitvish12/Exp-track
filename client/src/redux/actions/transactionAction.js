import axios from 'axios';
import * as action from '../constants/transactionConstants.js';
const url = 'http://localhost:5000';

export const getTransactions = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/transaction`);
        console.log(data);
        dispatch({type: action.GET_TRANSACTION_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: action.GET_TRANSACTION_FAIL, payload: error.response})
    }
}
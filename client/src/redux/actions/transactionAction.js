import axios from 'axios';
import * as action from '../constants/transactionConstants';
const url = 'http://localhost:5000';

export const getTransaction = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}`);
        dispatch({type: action.GET_TRANSACTION_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: action.GET_TRANSACTION_FAIL, payload: error.response})
    }
}
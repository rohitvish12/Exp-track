import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';
import {getTransactionReducer} from './reducers/transactionReducer'

const reducer = combineReducers({
    getTransactions: getTransactionReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
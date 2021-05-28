import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories';
import products from './products';

const reducers = combineReducers({ categories, products });

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();

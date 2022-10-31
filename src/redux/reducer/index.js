import amountReducer from './handleCart';
import { combineReducers} from 'redux';
const reducer = combineReducers({
    product: amountReducer

})
export default reducer;
import {combineReducers} from 'redux';
import { loginReducer } from './Reducer/loginReducer';
import { loginUserDataReducer } from './Reducer/loginUserDataReducer';
import {dataReducer} from './Reducer/dataReducer'
import { bookingReducer } from './Reducer/bookingReducer';

export default combineReducers({
  login:loginReducer,
  userdata:loginUserDataReducer,
  locationdata : dataReducer,
  bookingdata:bookingReducer
})
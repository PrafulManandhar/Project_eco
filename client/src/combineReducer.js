import {combineReducers} from 'redux';
import { loginReducer } from './Reducer/loginReducer';
import { loginUserDataReducer } from './Reducer/loginUserDataReducer';
import {dataReducer} from './Reducer/dataReducer'

export default combineReducers({
  login:loginReducer,
  userdata:loginUserDataReducer,
  locationdata : dataReducer
})
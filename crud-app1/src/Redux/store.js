import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authReducer} from "./authReducer/reducer"
import thunk from 'redux-thunk'
import { reducer as productReducer } from "./productReducer/reducer";
const rootReducer=combineReducers({
   authReducer,
   productReducer

})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
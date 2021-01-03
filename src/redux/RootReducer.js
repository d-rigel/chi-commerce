import { combineReducers } from "redux"
import reducer from "./reducer"

const RootReducer = combineReducers({
    shopBasket: reducer
})

export default RootReducer
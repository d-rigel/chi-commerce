import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import RootReducer from "./redux/RootReducer"


// const store = createStore(RootReducer, composeWithDevTools(
//     applyMiddleware(thunk)
// ))

 const initialState = {};

const middleware = [thunk];

const store = createStore(
    RootReducer,
     initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f

        
    )
)

export default store

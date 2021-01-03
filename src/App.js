import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { SET_USER } from "./redux/constants"
import Home from "./Home"
import Header from './Header';
import Checkout from './Checkout';
import Login from "./Login"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "./firebase"

function App() {
   const user = useSelector(state => state.shopBasket.user)
  const dispatch = useDispatch()

    useEffect( () => {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch({
            type: SET_USER,
            user: authUser
          })
        } else {
          dispatch({
            type: SET_USER,
            user: null
          })
        }
      })

      return () => {
        unsubscribe()
      }
    }, [])
  return (
    <Router>  
    <div className="App">
    <Switch>
    <Route exact path="/" >
      <Header />
      <Home />
      <Footer />
    </Route>
    <Route path="/checkout">
    <Header />
    <Checkout />
    <Footer />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

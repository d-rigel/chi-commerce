import React from "react"
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import { useSelector } from "react-redux"
import { getBasketTotal } from "./redux/reducer"

function Subtotal() {
    const basket = useSelector(state => state.shopBasket.basket)
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                 <p>
                   Subtotal ({basket.length} item): <strong>{` ${value}`}</strong>
               </p>
               <small className="subtotal__gift" >
                   <input type="checkbox" /> This order contains a gift
               </small>
                </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
               />
               <button>Proceed to checkout</button> 
            
        

        </div>
    )
}

export default Subtotal
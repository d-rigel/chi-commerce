import React from "react"
import "./Checkout.css"
import { useSelector } from "react-redux"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"


function Checkout() {
    const basket = useSelector(state => state.shopBasket.basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__adsContainer">
                <img className="checkout__ads" src="https://cdn.shopify.com/s/files/1/0013/3424/7498/articles/hair-extension-marketing-the-ultimate-guide_800x800.jpg?v=1579631495" alt="" />
                <img className="checkout__ads" src="https://media.pri.org/s3fs-public/styles/amp_metadata_content_image_min_696px_wide/public/images/2019/03/2019-3-25-zeldahairbrooklyn.jpg?itok=YsAsJ9uL" alt="" />
                </div>
                {basket.length === 0 ? (
                    <div className="checkout__empty">
                         <h1>Your selection list is empty</h1>
                    <p>You have no item in your list. To buy one or more items,
                     click "Add to list" next to the item.</p>
                    </div>
                ) : (
                    <div className="checkout__title">
                    <h1>Your selected items</h1>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>  
                ) }
                         
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            
        </div>
    )
}


export default Checkout
import React from "react";
import "./Product.css";
//import { connect } from "react-redux"
// import { addToBasket } from "./redux"
import { useDispatch } from "react-redux"
import { ADD_TO_BASKET } from "./redux/constants"

function Product({id, title, price, rating, image}) {
    const dispatch = useDispatch()

    const addToBasket = () => {
        return {
            type: ADD_TO_BASKET,
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
        }
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₦</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => {
                            return <p><span>🌟</span></p>
                        })
                    }
                </div>
            </div>
            <img src={image} alt=""  />
            <button onClick={() => dispatch(addToBasket())}>Add to list</button>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addToBasket: () => dispatch(addToBasket())
//     }
// }



export default Product
import React from 'react';
import {ProductConsumer} from "../../context/Context";
import product from "../Product/Product";
import {Link} from "react-router-dom";
import SubTitle from "../SubTitle/SubTitle";


function Cart(props) {

    const {cartOpen,closeNavCart, handleCartNav, shipping} = props.valueProps;

    return (
       <SubTitle>
        <ProductConsumer>
            {value => {

                const {cart,total, deleteItem,increaseItem,decreaseItem}=value

                return (
                    <ul className={cartOpen? "newCartNav cartNav cartItem":"cartNav cartItem"}>

                        {cart.length===0 ?

                            <div>
                                <span className="inside-btn" onClick={handleCartNav}> X </span>
                                <div className="empty">
                                    cart is currently empty
                                </div>
                            </div>

                            :

                            <div className="cartItem" key={product.id}>
                                <span className="inside-btn" onClick={handleCartNav}>X</span>

                                {cart.map(product=>{

                                    return(
                                        <div className="cart-center">
                                            <div className="img-cart">
                                                <img src={product.image} alt=""/>
                                            </div>

                                            <div className="item-cart">
                                                <h4>{product.name}</h4>
                                            </div>

                                            <div>
                                                <h4>€{product.price}</h4>
                                            </div>

                                            <div className="inc-dec-cart">
                                                <button onClick={()=>decreaseItem(product.id)}>-</button>
                                                {product.count}
                                                <button onClick={()=>increaseItem(product.id)}>+</button>
                                            </div>


                                            <div className="del-item" onClick={()=>deleteItem(product.id)}>
                                                <i className="fa fa-trash"></i>
                                            </div>

                                        </div>
                                    )
                                })}


                                {/*total*/}
                                <div className="extra-info">
                                    <h3><span>amount:</span>€{total}</h3>
                                </div>

                                <div className="shipping">
                                    <h3><span>shipping:</span>{total>90?"free":`+${shipping}`}</h3>
                                </div>

                                <h3><span>total amount:</span>${total>90 ?total: total+shipping}</h3>

                                <div className="payment" onClick={closeNavCart}><Link to="/payment">Payment</Link></div>

                            </div>


                        }

                    </ul>
                )
            }}

        </ProductConsumer>
       </SubTitle>

    );
}

export default Cart;




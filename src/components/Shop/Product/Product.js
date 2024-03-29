/*// === Product itself ===*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../context/Context"; // ProductConsumer which as word say consumes the data from context

export default class Product extends Component {
  render(props) {
    const { name, image, price, id, isInCart } = this.props.data;

    const { closeNavCart, addToCart } = this.props;

    return (
      <ProductConsumer>
        {function (value) {
          return (
            <div className="product">
              <Link to={`/details/${id}`} onClick={closeNavCart}>
                <div className="img-div">
                  <img src={image} alt="" />
                </div>
              </Link>

              <div className="details">
                <h3>{name}</h3>
                <p>€{price}</p>
              </div>

              <div className="cartBtn">
                <button
                  onClick={addToCart}
                  className={isInCart ? "disabled" : ""}
                >
                  <i className="fas fa-shopping-cart"></i>
                  {isInCart ? "Already in the cart" : "Add to cart"}
                </button>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

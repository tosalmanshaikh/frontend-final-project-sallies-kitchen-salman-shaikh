/*// === Products - all the products displayed when you click the shop in the navigation bar  ===*/

import React from "react";
import Product from "../Product/Product";
import "./Products.css";
import Banner from "../../Others/Banner/Banner";
import SubTitle from "../../StyledComponents/SubTitle/SubTitle";
import { ProductConsumer } from "../../../context/Context";

function Products() {
   return (
      <ProductConsumer>
         {function (value) {
            const { data, closeNavCart, addToCart } = value;

            return (
               <div className="product-container">
                  <section className="heading-home-page">
                     <SubTitle>
                        <Banner title="Shop" />
                        <Banner sub="welcome to our shop!" />
                     </SubTitle>
                  </section>

                  <div className="products">
                     <div className="products-center">
                        {data.map((data) => {
                           return (
                              <Product
                                 key={data.id}
                                 data={data}
                                 closeNavCart={closeNavCart}
                                 addToCart={() => addToCart(data.id)}
                              />
                           );
                        })}
                     </div>
                  </div>
               </div>
            );
         }}
      </ProductConsumer>
   );
}

export default Products;

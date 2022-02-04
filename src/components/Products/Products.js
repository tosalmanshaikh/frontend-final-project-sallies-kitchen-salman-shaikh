import React from 'react';
import {ProductConsumer} from "../../context/Context";
import product from "../Product/Product";
import Product from "../Product/Product";

function Products() {
    return (

        <ProductConsumer>

            {function (value) {
                const {data, closeNavCart} = value;


                return (

                    <div className="products">
                        <h2>Products</h2>

                        <div className="products-center">
                            {data.map(data => {
                                return <Product key={data.id} data={data} closeNavCart={closeNavCart}/>
                            })}
                        </div>
                    </div>


                )
            }}
        </ProductConsumer>
    );
}

export default Products;

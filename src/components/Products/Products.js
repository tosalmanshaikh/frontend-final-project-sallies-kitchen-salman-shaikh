import React from 'react';
import {ProductConsumer} from "../../context/Context";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import SubTitle from "../SubTitle/SubTitle";

function Products() {
    return (

        <ProductConsumer>

            {function (value) {
                const {data, closeNavCart} = value;


                return (

                    <div className="product-container">

                            <section className="heading-home-page">
                                <SubTitle>
                                    <Banner title="Products"/>
                                    <Banner sub="Lets get you all sorted!"/>
                                </SubTitle>
                            </section>



                            <div className="products">

                                <div className="products-center">
                                    {data.map(data => {
                                        return <Product key={data.id} data={data} closeNavCart={closeNavCart}/>
                                    })}
                                </div>
                            </div>

                    </div>

                )
            }}
        </ProductConsumer>

    );
}

export default Products;

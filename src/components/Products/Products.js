import React from 'react';
import {ProductConsumer} from "../../context/Context";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import SubTitle from "../SubTitle/SubTitle";
import classes from './Products.module.css'

function Products() {
    return (

        <ProductConsumer>

            {function (value) {
                const {data, closeNavCart,addToCart} = value;


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
                                        return <Product key={data.id} data={data} closeNavCart={closeNavCart} addToCart={()=>addToCart(data.id)}/>
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

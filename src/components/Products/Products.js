import React from 'react';
import {ProductConsumer} from "../../context/Context";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import SubTitle from "../SubTitle/SubTitle";


function Products() {
    return (

        <ProductConsumer>

            {function (value) {
                const {data, closeNavCart,addToCart} = value;


                return (

                    <div className="product-container">

                            <section className="heading-home-page">
                                <SubTitle>
                                    <Banner title="Shop"/>
                                    <Banner sub="welcome to our shop!"/>
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

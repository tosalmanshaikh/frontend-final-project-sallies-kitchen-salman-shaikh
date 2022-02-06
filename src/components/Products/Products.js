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

                    <>
                        {/*<SubTitle>*/}


                            <section className="heading-product-page">

                                <Banner title="Products"/>
                                {/*<Banner sub="lets get you all sorted!"/>*/}

                            </section>



                            <div className="products">

                                <div className="products-center">
                                    {data.map(data => {
                                        return <Product key={data.id} data={data} closeNavCart={closeNavCart}/>
                                    })}
                                </div>
                            </div>

                        {/*</SubTitle>*/}
                    </>

                )
            }}
        </ProductConsumer>
    );
}

export default Products;

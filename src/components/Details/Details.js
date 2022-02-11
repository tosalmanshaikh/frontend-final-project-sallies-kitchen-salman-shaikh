import React, {Component} from 'react';
import {ProductConsumer} from "../../context/Context";
import {Link} from "react-router-dom";
import SubTitle from "../SubTitle/SubTitle";


export default class Details extends Component {

    render(props) {
        return (
            <ProductConsumer>
                {value => {

                    const {data, addToCart} = value;
                    console.log(this.props.match.params.id);

                    //parseInt:(this.props.match.params.id) is a string and it order to see it as a number we should use parseInt
                    let results = data.find(data => data.id === parseInt(this.props.match.params.id));

                    return (

                        <SubTitle>
                            <div className="det">
                                <div className="inside-container">
                                    <section>
                                        <h2>Product details</h2>
                                    </section>

                                    <div className="det-center">

                                        <div className="det-img">
                                            <img src={`${results.image}`} alt={results.name}/>
                                        </div>

                                        <div className="det-info">
                                            <section>
                                                <h2>{results.name}</h2>
                                            </section>

                                            <section>
                                                <p>{results.flavour}</p>
                                            </section>

                                            <section>
                                                <h3>price: <span>€{results.price}</span></h3>
                                            </section>

                                            <div className="but-options">
                                                <button className="add-toCart" onClick={() => addToCart(results.id)}>Add
                                                    to the cart
                                                </button>
                                            </div>
                                            <section>
                                                <p><Link to="/products"> Go back the products?</Link></p>
                                            </section>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SubTitle>

                    )
                }}

            </ProductConsumer>

        );
    }
}


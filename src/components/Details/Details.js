import React from 'react';
import  {ProductConsumer} from "../../context/Context";

function Details(props) {
    return (
        <ProductConsumer>
            {value => {

                const {data}=value;
                console.log(this.props.match.params.id);
                return (
                    <div>
                        Hello from details
                    </div>
                )
            }}
        </ProductConsumer>
    );
}

export default Details;

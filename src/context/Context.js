import  React, { Component } from 'react';
import {Data} from "../components/Data/Data"


// provider: provides all the data and generally gives us access to data from context

// consumer which as word say consumes the data from context


const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={

        navOpen:false,
        cartOpen: false,
        data:Data,
        cart:[],
        total:0,
        shipping:10

    }


    // for open close

    handleNav=()=>{
        console.log("handleNav");


        if(this.state.cartOpen===true){

            this.setState({
                cartOpen:false,
            })

        }


        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    //for open close cart

    handleCartNav=()=>{
        if(this.state.navOpen===true){
            this.setState({
              navOpen:false
            })
        }

        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }




    // if cart is open we want to be closed

    closeNavCart=()=>{
        if(this.state.navOpen===true || this.state.cartOpen===true){
            this.setState({
                navOpen:false,
                cartOpen:false,
            })
        }

    }


    render() {
        return (
            <ProductContext.Provider value={{

                ...this.state,
                handleNav:this.handleNav,
                closeNavCart:this.closeNavCart,
                handleCartNav:this.handleCartNav,


            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}




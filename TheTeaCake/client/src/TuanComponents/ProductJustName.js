import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeFromCart } from '../actions/cart';
class ProductJustName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
             <div className="center">
                    <div className="num-cart">
                        {this.props.product.amount}
                    </div>
                    <div className="right">
                    <b>{this.props.product.name}</b>

                     </div>
                     <div style={{cursor:"pointer"}} onClick={()=>this.props.removeFromCart(this.props.product._id)}>
                     <i class="fa fa-trash" aria-hidden="true"></i>
                     </div>
             </div> 
           
    </div> );
    }
}
 const mapDispatchToProps=dispatch=>({
     removeFromCart:(_id)=>dispatch(removeFromCart(_id))
 })
export default connect(null,mapDispatchToProps) (ProductJustName);
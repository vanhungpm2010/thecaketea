import React, { Component } from 'react';
import './payment.css'
import Order from './Order';
import InfoCart from './InfoCart';
import MyEnhancedForm from './FormCustomer';
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            address:'',
            user:'',
            phone:'',
            desc:''
         }
    }
    // changeAddress=(e)=>{
    //     this.setState({
    //         address:e.target.value
    //     })
    // }
    // changeUser=(e)=>{
    //     this.setState({
    //         user:e.target.value
    //     })
    // }
    // changePhone=(e)=>{
    //     this.setState({
    //         phone:e.target.value
    //     })
    // }
    // changeDesc=(e)=>{
    //     this.setState({
    //         desc:e.target.value
    //     })
    // }
    render() { 

        return ( 
            <div  className="container" style={{marginTop:'200px'}}>
                <div className="row">
                   
                        <div className="col-lg-8">
                                <div  className="card">
                                    <div className="card-body">
                                        <div className="card-title border-bottom pt-3 pb-3">Xác nhận thông tin giao hàng</div>
                                    <MyEnhancedForm />    
                                {/* <form className="pt-3 pb-3">
                                    <div >
                                        <div className="inputWithIcon">
                                            <input 
                                            type="text" 
                                            placeholder="Nhập địa chỉ giao hàng" 
                                            name="address"
                                           onChange={this.changeAddress}
                                            />
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="inputWithIcon">
                                            <input type="text" 
                                            placeholder="Người nhận"
                                            name="user"
                                            onChange={this.changeUser}
                                             />
                                            <i class="fa fa-user" aria-hidden="true"></i>

                                        </div>
                                        <div className="inputWithIcon">
                                            <input 
                                            type="text"
                                             placeholder="Số điện thoại"
                                              name="phone"
                                              onChange={this.changePhone}
                                              />
                                            <i class="fa fa-phone" aria-hidden="true"></i>

                                        </div>
                                        <div className="inputWithIcon">
                                            <input type="text" placeholder="ghi chú" name="desc"
                                             onChange={this.changeDesc}
                                            />
                                        </div>
                                        <div>
                                            <input type="submit" value="Đặt Hàng" className="btn btn-success"/>
                                        </div>
                                    </div>
                                    </form> */}
                                    </div>
                                    
                                </div> 
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title border-bottom pt-3 pb-3">Hình thức thanh toán</div>
                                        <p>SHIP CODE</p>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 res-cart">
                               <InfoCart url={this.props.match.url} hoadon={this.state}/>
                        </div>
                     
                </div>
        </div>
        );
    }
}
 
export default Payment;
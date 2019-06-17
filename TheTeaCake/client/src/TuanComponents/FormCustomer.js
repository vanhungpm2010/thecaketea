import React, { Component } from 'react';
import {withFormik} from 'formik';
import * as yup from 'yup'; // for everything
import {connect} from 'react-redux'
import { saveBill } from '../actions/bill';

class FormCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      noti:0
     }
  }
  clickClose=()=>{
    this.setState({
        noti:1
    })
}

  render() { 
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;
 
    return ( 
      <div>
        <form className="pt-3 pb-3" onSubmit={handleSubmit}>
        <div >
            <div className="inputWithIcon">
                <input 
                type="text" 
                placeholder="Nhập địa chỉ giao hàng" 
                name="address"
                value={values.address}
               onChange={handleChange}
                />
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {errors.address && touched.address && <div id="feedback" className="alert alert-danger">{errors.address}</div>}
            </div>
       
            <div className="inputWithIcon">
                <input type="text" 
                placeholder="Người nhận"
                name="user"
                value={values.user}
                onChange={handleChange}
                 />
                <i className="fa fa-user" aria-hidden="true"></i>

            </div>
            {errors.user && touched.user && <div id="feedback" className="alert alert-danger">{errors.user}</div>}
            <div className="inputWithIcon">
                <input 
                type="text"
                 placeholder="Số điện thoại"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  />
                <i className="fa fa-phone" aria-hidden="true"></i>

            </div>
            {errors.phone && touched.phone && <div id="feedback" className="alert alert-danger">{errors.phone}</div>}
            <div className="inputWithIcon">
                <input type="text"
                 placeholder="ghi chú"
                  name="desc"
                  value={values.desc}
                 onChange={handleChange}
                />
            </div>
            {errors.desc && touched.desc && <div id="feedback" className="alert alert-danger">{errors.desc}</div>}
           
            <div>
                <input type="submit" value="Đặt Hàng" className="btn btn-success"/>
            </div>
        </div>
        {this.props.status ?(
                  <div class="alert alert-primary noti text-center" role="alert">
                Đặt hàng thành công
                <i class="fa fa-window-close" onClick={this.clickClose} aria-hidden="true"></i>
            </div>) :"" }
        </form>
       
        </div>
        
     );
  }
}
 


const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ address: '',user:'',phone:'',desc:'' }),
    //validation with yup

    validationSchema:yup.object().shape({
        address:yup.string().required('vui lòng nhập địa chỉ giao hàng'),
        user:yup.string().required('vui lòng điền tên của bạn'),
        desc:yup.string().required('điền thông tin nhắc nhở giao hàng'),
         phone:yup.string().matches(/^[0-9]+$/,'phone phải là số').required('bạn phải nhập phone').min(9,'phone thấp nhất là 9 số').max(11,'phone cao nhất là 11 số')
      

    }),
    
  
    handleSubmit: (values, { props,setStatus,setSubmitting }) => {
       
      setTimeout(() => {
      var bill={
        addess:values.address,
        user:values.user,
        desc:values.desc,
        phone:values.phone
      }
      
     props.saveBill(bill);
      setStatus({success:true});
        setSubmitting(false);
      }, 1000);
    },
  
   
  })(FormCustomer);
  const mapDispatchToProps=(dispatch)=>({
    saveBill:(bill)=>dispatch(saveBill(bill))
  })
export default connect(null,mapDispatchToProps)(MyEnhancedForm);
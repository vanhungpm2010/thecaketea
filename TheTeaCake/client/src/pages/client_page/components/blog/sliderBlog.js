import React, { Component } from 'react';

class SliderBlog extends Component {
    render() {
        return (
            <div id="home" style={{ backgroundImage: 'url(images/bg_2.jpg)', width: '100%', height: '862px' }} className="parallax hidden-xs">
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                        <div className="col-md-8 col-sm-12 text-center ftco-animate" style={{ marginTop: '300px' }}>
                            <span className="subheading" style={{ fontFamily: 'Pacifico', fontSize: '30px', color: '#c49b63' }}>Welcome</span>
                            <h1 className="mb-4" style={{ color: '#FFFFFF' }}>The TeaCake  Blog</h1>

                            {/* <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SliderBlog;
import React, { Component } from 'react';

class MenuAbout extends Component {
    render() {
        return (
            <section className="ftco-section" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 pr-md-5">
                  <div className="heading-section text-md-right ftco-animate">
                    <span className="subheading" style={{fontFamily:'Pacifico' ,color:'#c49b63',display: 'block',lineHeight:'1',marginBottom: '-48px',fontSize:'48px'}}>Discover</span>
                    <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: '700', position: 'relative', textTransform: 'uppercase', fontFamily: 'sans-serif',color:'#fff'}}>Our Menu</h2>
                    <p className="mb-4" style ={{color:'gray',fontFamily:'"Montserrat", "Helvetica Neue", Arial, sans-serif'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p><a href="/menu" className="btn btn-primary btn-outline-primary px-4 py-3">View Full Menu</a></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-entry">
                      <img href="#" className="img" style={{backgroundImage: 'url(images/menu-1.jpg)', width: '100%', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-entry mt-lg-4">
                      <img href="#" className="img" style={{backgroundImage: 'url(images/menu-2.jpg)', width: '100%', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-entry">
                      <img href="#" className="img" style={{backgroundImage: 'url(images/menu-3.jpg)', width: '100%', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="menu-entry mt-lg-4">
                      <img href="#" className="img" style={{backgroundImage: 'url(images/menu-4.jpg)', width: '100%', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default MenuAbout;
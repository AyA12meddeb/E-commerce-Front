import React from 'react';
import { MoveDownRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-0 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="fw-light text-start fs-6 text">LUXURY CARS <br /> FOR EVERYONE</h3>
            <div className="pt-3 text-start">
              <a href="/instagram" className="text-white text-decoration-none me-3">INSTAGRAM</a>
              <a href="/facebook" className="text-white text-decoration-none">FACEBOOK</a>
            </div>
            <p className="mt-3 fw-light text-start">© K A R H A B T Y </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <ul className="list-unstyled text-start">
              <li><a href="/cart" className="text-white text-decoration-none d-block">SHOP</a></li>
              <li><a href="/about" className="text-white text-decoration-none d-block">ABOUT</a></li>
              <li><a href="/contact" className="text-white text-decoration-none d-block">CONTACT</a></li>
              
            </ul>
          </div>

          

          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="fw-light text-start fs-4 text">SUBSCRIBE TO RECEIVE YOUR DREAM CAR </h3>
            <div className="input-group mt-3">
              <input
                type="email"
                placeholder="EMAIL"
                className="form-control bg-transparent border-end-0 border-bottom border-top-0 border-start-0 text-white"
              />
              <span className="input-group-text bg-transparent border-0">
                <MoveDownRight size={15} className="text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
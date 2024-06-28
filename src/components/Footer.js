import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="bi bi-gem me-3"></i>Quantum Aesthetics
              </h6>
              <p>
                © 2023 Copyright Quantum Aesthetics. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Site Nav</h6>
              <p><a href="#!" className="text-reset">Courses</a></p>
              <p><a href="#!" className="text-reset">About</a></p>
              <p><a href="#!" className="text-reset">Online</a></p>
              <p><a href="#!" className="text-reset">Models</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
              <p><a href="#!" className="text-reset">Privacy Policy</a></p>
              <p><a href="#!" className="text-reset">Terms & Conditions</a></p>
              <p><a href="#!" className="text-reset">Contact Us</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="bi bi-geo-alt-fill me-3"></i> 2210 S. Mill Ave, Ste 7, Tempe, Arizona 85282</p>
              <p><i className="bi bi-envelope-fill me-3"></i> info@example.com</p>
              <p><i className="bi bi-telephone-fill me-3"></i> (480) 590-4328</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

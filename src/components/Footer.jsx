import React from "react";

const Footer = () => {
  return (
    <div className="px-5">
      <footer className="pt-5 px-5">
        <div className="row justify-between">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Address</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  A1 Selectors Pvt. Ltd. O-910, Gaur City Mall, Greater Noida,
                  UP- 201306
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  +91-9999557044 +91-120-4109120
                </span>
              </li>
              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  info@a1selectors.com
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4 border-top">
          <p className="mb-0">
            © 2025 A1 Selectors, Inc. All rights reserved. Powered By
            A1Selectors.
          </p>
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i
                  className="bi bi-instagram text-teal-700"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i
                  className="bi bi-facebook text-teal-700"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

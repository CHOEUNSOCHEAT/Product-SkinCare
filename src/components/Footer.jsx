import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin, faTruck, faPlane, faRotateLeft, faClock, faCookie } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Images/logo1.avif';
import logo2 from '../assets/Images/logo2.avif';
import logo3 from '../assets/Images/logo3.avif';
import logo4 from '../assets/Images/logo4.avif';
import logo5 from '../assets/Images/logo5.avif';
import logo6 from '../assets/Images/logo6.avif';

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <hr />
        <div className="container my-5 w-100">
          <div className="row">
            <Link to="/logo1" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <img src={logo1} alt="Brand Logo 1" className="img-fluid" />
            </Link>
           <Link to="/logo2" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
           
              <img src={logo2} alt="Brand Logo 2" className="img-fluid" />
           
            </Link>
            <Link to="/logo3" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            
              <img src={logo3} alt="Brand Logo 3" className="img-fluid" />
            
            </Link>
            <Link to="/logo4" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
           
              <img src={logo4} alt="Brand Logo 4" className="img-fluid" />
           
            </Link>
            <Link to="/logo5" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
           
              <img src={logo5} alt="Brand Logo 5" className="img-fluid" />
           
            </Link>
            <Link to="/logo6" className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
           
              <img src={logo6} alt="Brand Logo 6" className="img-fluid" />
          
            </Link>
          </div>
        </div>

        <hr />
        <div>
          <div className="container">
            <div className="row">
              {/* Help and Information Column */}
              <div className="col-md-3">
                <h5 className="text-success">Help And Information</h5>
                <div>
                  <p><FontAwesomeIcon icon={faArrowsSpin} aria-label="Contact Us" /> &nbsp;Contact Us</p>
                  <p><FontAwesomeIcon icon={faTruck} aria-label="UK Delivery" /> &nbsp;UK Delivery</p>
                  <p><FontAwesomeIcon icon={faPlane} aria-label="International Delivery" /> &nbsp;International Delivery</p>
                  <p><FontAwesomeIcon icon={faRotateLeft} aria-label="Return Policy" /> &nbsp;Return Policy</p>
                  <p><FontAwesomeIcon icon={faClock} aria-label="Opening Time" /> &nbsp;Time: 8:00am - 7:00pm</p>
                  <p><FontAwesomeIcon icon={faCookie} aria-label="Cookie Settings" /> &nbsp;Cookie Settings</p>
                </div>
              </div>

              {/* About ESPA Column */}
              <div className="col-md-3">
                <h5 className="text-success">About ESPA</h5>
                <div>
                  <p>About Us</p>
                  <p>Principles Product</p>
                  <p>ESPA Lounge - Loyalty Program</p>
                  <p>Spa Near You</p>
                  <p>Careers</p>
                  <p>ESPA New Business</p>
                  <p>Refer A Friend</p>
                </div>
              </div>

              {/* Useful Information Column */}
              <div className="col-md-3">
                <h5 className="text-success">Connect with us</h5>
                <div>
                  <p><FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp; Facebook</p>
                  <p><FontAwesomeIcon icon={faSquareInstagram} />&nbsp;&nbsp; Instagram</p>
                  <p> <FontAwesomeIcon icon={faYoutube} /> &nbsp;&nbsp;Youtube</p>
                  <p><FontAwesomeIcon icon={faTwitter} /> &nbsp;&nbsp;Twitter</p>
                 
                </div>
              </div>

              {/* Payment Options Column */}
              <div className="col-md-3">
                <h5 className="text-success">Pay Securely with</h5>
                <div className="w-100 mt-5">
                  <img className="w-100" src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png" alt="payment methods" />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="container text-center">
            <h6 className="text-success">Design By: Choeurn Socheat</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

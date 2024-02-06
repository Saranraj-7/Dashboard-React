import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import visa from '../Asset/visa.png';
import mastercard from '../Asset/mastercard.png';
import americanexpress from '../Asset/americanexpress.png';
import paypal from '../Asset/paypal.png';
import img from '../Asset/img.jpg';


const Footer = () => {
  return (
    <div className='header'>
      <div className='container  p-3'>
        <div className='row'>
          <div className='col-12 mb-3 d-flex justify-content-center'>
            Supported Payment System
          </div>
          <div className='line '></div>
          <div className='col-12 d-flex justify-content-center mt-2'>
          <img src={visa} alt="Description of the " style={{ width: '60px', height: '40px'}} />
          <img  className='ms-2' src={mastercard} alt="Description of the " style={{ width: '60px', height: '40px'}} />
          <img className='ms-2' src={americanexpress} alt="Description of the " style={{ width: '60px', height: '40px'}} />
          <img className='ms-2' src={paypal} alt="Description of the " style={{ width: '60px', height: '40px'}} />
          </div>
       </div>
      
     
     </div>
    </div>
    
  );
};

export default Footer;

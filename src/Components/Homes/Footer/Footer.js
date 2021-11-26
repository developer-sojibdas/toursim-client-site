import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    return (
        <div class="bg-dark footer">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">
              <div className="nav-link">
                <h1 style={{color:"hotpink"}}>Section</h1>
              <Link to ="#">Homes</Link>
              <Link to ="#">Features</Link>
              <Link to ="#">Pricing</Link>
              <Link to ="#">FAQs</Link>
              <Link to ="#">About Us</Link>
              </div>
          </div>
          <div class="col">
              <div className="nav-link">
                <h1  style={{color:"hotpink"}}>RECENT BLOG</h1>
              <Link to ="#">YouTube</Link>
              <Link to ="#">Facebook</Link>
              <Link to ="#">Instragram</Link>
              <Link to ="#">Twitter</Link>
              <Link to ="#">TikTok</Link>
              </div>
          </div>
          <div class="col">
              <div className="nav-link">
                <h3  style={{color:"hotpink"}}>NEWSLETTER</h3>
              <h5  style={{color:"hotpink"}}>SUBMIT Email</h5>
          <Form.Control className="w-50 m-1  mx-auto" type="text" placeholder="Email" /> 
          <button className="btn-style">SEND</button>
              </div>
          </div>
         
          <div class="col">
              <div className="nav-link">
                <h1  style={{color:"hotpink"}}>RECENT BLOG</h1>
              <Link to ="#">YouTube</Link>
              <Link to ="#">Facebook</Link>
              <Link to ="#">Instragram</Link>
              <Link to ="#">Twitter</Link>
              <Link to ="#">TikTok</Link>
              </div>
          </div>
          
        </div>
        <div className="mt-5">
        <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="" />
        
        <small className="text-light mt-5">Copyright 2021@ WELCOME TO  <span style={{ color: "hotpink" }}> Holiday Wanders</span>. All right reserved.</small>
        </div>
      </div>
    );
};

export default Footer;